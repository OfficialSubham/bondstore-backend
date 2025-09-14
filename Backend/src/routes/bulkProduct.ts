import { Context, Hono } from "hono";
import { PrismaClient, ProductCategories } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { ProductInter } from "@codersubham/bond-store-types";

type category =
  | "menswallet"
  | "leatherbags"
  | "importedbags"
  | "handclutch"
  | "mensidebag";

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
      orderBy: {
        productId: "desc",
      },
    });
    return c.json({ message: "Here is your products", bulkProducts });
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

allProduct.get("/giveinitial", async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const categories: ProductCategories[] = [
    "menswallet",
    "leatherbags",
    "importedbags",
    "handclutch",
    "mensidebag",
  ];
  const promises = categories.map((cat) =>
    prisma.product.findMany({
      where: { productCategory: cat },
      include: { Images: true },
      orderBy: [{ productDiscountedPrice: "asc" }, { productId: "asc" }],
      take: 5,
    })
  );

  // Run them in parallel
  const results = await Promise.all(promises);
  const productsByCategory: Record<string, ProductInter[]> = {};
  categories.forEach((cat, i) => {
    productsByCategory[cat] = results[i] as ProductInter[];
  });
  return c.json({ message: "Initial products", productsByCategory });
});

allProduct.get("/category/:name", async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const category = c.req.param("name") as category;
    const page = Number(c.req.query("page") || 1);
    const pageSize = 5;
    const items = await prisma.product.findMany({
      where: { productCategory: category },
      include: { Images: true },
      orderBy: [{ productDiscountedPrice: "asc" }, { productId: "asc" }],
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    // console.log(items.length);
    return c.json({ category, products: items });
  } catch (error) {
    console.log(error);
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

allProduct.get("/category/all/:name", async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const category = c.req.param("name") as category;
    const items = await prisma.product.findMany({
      where: { productCategory: category },
      include: { Images: true },
    });
    // console.log(items);
    return c.json({ category, products: items });
  } catch (error) {
    console.log(error);
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

export default allProduct;
