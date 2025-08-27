import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context, Hono } from "hono";

const deleteProductRoute = new Hono();

deleteProductRoute.delete("/:id", async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");

    const imgOfThatProduct = await prisma.images.findMany({
      where: {
        productId: Number(id),
      },
    });

    if (imgOfThatProduct.length == 0)
      return c.json({ message: "No Product Found" }, 400);

    const private64Key = btoa(`${c.env.PRIVATE_KEY}:`);
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${private64Key}`,
      },
    };
    const results = await Promise.all(
      imgOfThatProduct.map(async (img) => {
        const url = `https://api.imagekit.io/v1/files/${img.fileId}`;
        const response = await fetch(url, options);
        return response.status === 204;
      })
    );

    if (results.includes(false)) {
      return c.json({ message: "Error while deleting" }, 500);
    }
    const dbCall = await prisma.product.delete({
      where: {
        productId: Number(id),
      },
    });
    return c.json({ message: "Successfully Deleted the product" });
  } catch (error) {
    console.log(error);
    return c.json({ message: "Internal Error" }, 500);
  }
});

export default deleteProductRoute;
