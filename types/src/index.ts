import { z } from "zod";

const productCategories = [
  "menswallet",
  "leatherbags",
  "importedbags",
  "handclutch",
  "mensidebag",
] as const;
export type ProductCategory = (typeof productCategories)[number];

export const ProductSchema = z.object({
  productName: z.string().min(2),
  productDescription: z.string().min(2),
  productPrice: z.number(),
  productCategory: z.enum(productCategories),
});

export interface ProductInter {
  productId: number;
  productName: string;
  productImages: Images[];
  productDesc: string;
  productCategory: ProductCategory;
  productPrice: number;
}

export interface Images {
  imgId: number;
  productId: number;
  imgUrl: string;
  fileId: string;
}

export interface Order {
  orderId: number;
  customerName: string;
  customerNumber: string;
  customerAddress: string;
  productPurchased: productPurchased[];
}

export interface productPurchased {
  productId: number;
  productImage: Images;
  quantity: number;
}

export interface Data {
  message: string;
  data: ProductInter[];
}

export interface Res {
  status: number;
  data: Data;
}
