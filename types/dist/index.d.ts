import { z } from "zod";
declare const productCategories: readonly ["menswallet", "leatherbags", "importedbags", "handclutch", "mensidebag"];
export type ProductCategory = (typeof productCategories)[number];
export declare const ProductSchema: z.ZodObject<{
    productName: z.ZodString;
    productDescription: z.ZodString;
    productAcutalPrice: z.ZodNumber;
    productDiscountedPrice: z.ZodNumber;
    productCategory: z.ZodEnum<{
        menswallet: "menswallet";
        leatherbags: "leatherbags";
        importedbags: "importedbags";
        handclutch: "handclutch";
        mensidebag: "mensidebag";
    }>;
}, z.core.$strip>;
export declare const UserSchema: z.ZodObject<{
    username: z.ZodString;
    userAddress: z.ZodString;
    userLandmark: z.ZodString;
    userState: z.ZodString;
    userPincode: z.ZodString;
    userContact: z.ZodString;
    userAltrContact: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
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
export {};
