import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../generated/prisma/edge";
import { Context, Hono } from "hono";
import { ProductSchema } from "@codersubham/bond-store-types";

const createProduct = new Hono();

createProduct.post(async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.formData();
    const files = body.getAll("files") as File[];
    const productName = body.get("productName");
    const productAcutalPrice = body.get("productAcutalPrice");
    const productDesc = body.get("productDesc");
    const productCategory = body.get("productCategory");
    const productDiscountedPrice = body.get("productDiscountedPrice");
    const { success, data, error } = ProductSchema.safeParse({
      productAcutalPrice: Number(productAcutalPrice),
      productName,
      productDiscountedPrice: Number(productDiscountedPrice),
      productDescription: productDesc,
      productCategory,
    });

    if (!success)
      return c.json({ message: "Please  enter a valid product" }, 400);

    const imgUrls = await uploadFiles(files, c);
    if (imgUrls.length == 0)
      return c.json(
        { messge: "Internal server error Upload Failed", error },
        500
      );

    await prisma.$transaction(async (tx) => {
      const product = await tx.product.create({
        data: {
          productAcutalPrice: data.productAcutalPrice,
          productName: data.productName,
          productCategory: data.productCategory,
          productDesc: data.productDescription,
          productDiscountedPrice: data.productDiscountedPrice,
        },
      });
      const productId = product.productId;
      await tx.images.createMany({
        data: imgUrls.map((img) => {
          return {
            fileId: img.fileId,
            imgUrl: img.url,
            productId,
          };
        }),
      });
    });
    return c.json({ message: "Image uploaded successfully" });
  } catch (error) {
    return c.json({ messge: "Internal server error", error }, 500);
  }
});

type urlType = {
  fileId: string;
  url: string;
};

async function uploadFiles(files: File[], c: Context) {
  const urlEndPoint = "https://upload.imagekit.io/api/v1/files/upload";
  const private64Key = btoa(`${c.env.PRIVATE_KEY}:`);
  const Authorization = `Basic ${private64Key}`;
  const imagesUrl: urlType[] = [];
  try {
    for (const file of files) {
      //First convertig the file in raw bytes like 0s and 1s
      const arrayBuffer = await file.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: file.type });

      const form = new FormData();
      form.append("file", blob);
      form.append("fileName", file.name);

      const res = await fetch(urlEndPoint, {
        method: "POST",
        headers: { Authorization },
        body: form,
      });

      const result = await res.json();
      if (result.fileId && result.url) {
        const fileId = result.fileId;
        const url = result.url;
        imagesUrl.push({
          fileId,
          url,
        });
      }
    }
    return imagesUrl;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default createProduct;
