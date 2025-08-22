import { z } from "zod";
declare const productCategories: readonly ["menswallet", "leatherbags", "importedbags", "handclutch", "mensidebag"];
export type ProductCategory = (typeof productCategories)[number];
export declare const ProductSchema: z.ZodObject<{
    productName: z.ZodString;
    productDescription: z.ZodString;
    productPrice: z.ZodNumber;
    productCategory: z.ZodEnum<{
        menswallet: "menswallet";
        leatherbags: "leatherbags";
        importedbags: "importedbags";
        handclutch: "handclutch";
        mensidebag: "mensidebag";
    }>;
}, z.core.$strip>;
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
export {};
