import { Context, Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Images } from "@codersubham/bond-store-types";

const imgRoute = new Hono();

imgRoute.post("/deleteimg", async (c: Context) => {
  const body = await c.req.json();
  const { images } = body;
  // console.log(images);
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const private64Key = btoa(`${c.env.PRIVATE_KEY}:`);
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${private64Key}`,
      },
    };
    const imgDetails = (await Promise.all(
      images.map(async (img: number) => {
        const eachImg = await prisma.images.findUnique({
          where: {
            imgId: img,
          },
        });
        return eachImg;
      })
    )) as Images[];

    const results = await Promise.all(
      imgDetails.map(async (img) => {
        const url = `https://api.imagekit.io/v1/files/${img.fileId}`;
        const response = await fetch(url, options);
        return response.status === 204;
      })
    );

    if (results.includes(false)) {
      return c.json({ message: "Error while deleting" }, 500);
    }

    await Promise.all(
      images.map(async (img: number) => {
        const eachImg = await prisma.images.delete({
          where: {
            imgId: img,
          },
        });
        return eachImg;
      })
    );

    return c.json({ message: "Successfully deleted the images" });
  } catch (error) {
    return c.json({ msg: "Internal Server Error" }, 500);
  }
});

export default imgRoute;
