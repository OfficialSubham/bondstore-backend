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
    Images: Images[];
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
    userId: number;
    username: string;
    userAddress: string;
    userLandmark: string;
    userState: string;
    userPincode: string;
    userContact: string;
    userAltrContact?: string;
    dayId: number;
    productPurchased: productPurchased[];
}
export interface AllOrders {
    order_id: number;
    date: Date;
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
export declare const ReviewSchema: z.ZodObject<{
    name: z.ZodString;
    review: z.ZodString;
    rating: z.ZodNumber;
}, z.core.$strip>;
export interface Data {
    message: string;
    data: ProductInter[];
}
export interface Res {
    status: number;
    data: Data;
}
export {};
