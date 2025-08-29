import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../generated/prisma/edge";
import { Context, Hono } from "hono";
import { ProductSchema } from "@codersubham/bond-store-types";

const editProduct = new Hono();

editProduct.put("/editproduct", async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.formData();
    const producId = body.get("productId");
    const productName = body.get("productName");
    const productAcutalPrice = body.get("productAcutalPrice");
    const productDesc = body.get("productDesc");
    const productCategory = body.get("productCategory");
    const productDiscountedPrice = body.get("productDiscountedPrice");
    console.log(producId);
    const { success, data, error } = ProductSchema.safeParse({
      productAcutalPrice: Number(productAcutalPrice),
      productName,
      productDiscountedPrice: Number(productDiscountedPrice),
      productDescription: productDesc,
      productCategory,
    });
    if (!success)
      return c.json({ message: "Please  enter a valid product", error }, 400);

    await prisma.$transaction(async (tx) => {
      await tx.product.update({
        where: {
          productId: Number(producId),
        },
        data: {
          productAcutalPrice: data.productAcutalPrice,
          productName: data.productName,
          productCategory: data.productCategory,
          productDesc: data.productDescription,
          productDiscountedPrice: data.productDiscountedPrice,
        },
      });
    });
    return c.json({ message: "Product updated successfully" });
  } catch (error) {
    return c.json({ messge: "Internal server error", error }, 500);
  }
});

export default editProduct;
