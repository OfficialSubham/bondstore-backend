import { Context, Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const allProduct = new Hono();

allProduct.get("/bulk", async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const bulkProducts = await prisma.product.findMany({
      include: {
        Images: true,
      },
    });
    return c.json({ message: "Here is your products", bulkProducts });
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

export default allProduct;
