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
  productAcutalPrice: z.number(),
  productDiscountedPrice: z.number(),
  productCategory: z.enum(productCategories),
});

export const UserSchema = z.object({
  username: z.string().min(3),
  userAddress: z.string().min(5),
  userLandmark: z.string().min(3),
  userState: z.string().min(3),
  userPincode: z.string().min(4),
  userContact: z.string().trim().length(10),
  userAltrContact: z.string().trim().length(10).optional(),
});

export type UserType = z.infer<typeof UserSchema>;

export interface ProductInter {
  productId: number;
  productName: string;
  productImages: Images[];
  productDesc: string;
  productCategory: ProductCategory;
  productAcutalPrice: number;
  productDiscountedPrice: number;
}

export type EditProductType = ProductInter & {
  deletedImagesId?: number[];
};
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
  customerLandmark: string;
  customerPincode: string;
  customerAltrContact: string;
  productPurchased: productPurchased[];
}

export interface AllOrders {
  order_id: number;
  date: string;
  orders: Order[];
}

export interface productPurchased {
  productId: number;
  productName: string;
  productImage: Images;
  productAcutalPrice: number;
  productDiscountedPrice: number;
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
