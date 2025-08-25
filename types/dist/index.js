"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.ProductSchema = void 0;
const zod_1 = require("zod");
const productCategories = [
    "menswallet",
    "leatherbags",
    "importedbags",
    "handclutch",
    "mensidebag",
];
exports.ProductSchema = zod_1.z.object({
    productName: zod_1.z.string().min(2),
    productDescription: zod_1.z.string().min(2),
    productAcutalPrice: zod_1.z.number(),
    productDiscountedPrice: zod_1.z.number(),
    productCategory: zod_1.z.enum(productCategories),
});
exports.UserSchema = zod_1.z.object({
    username: zod_1.z.string().min(3),
    userAddress: zod_1.z.string().min(5),
    userLandmark: zod_1.z.string().min(3),
    userState: zod_1.z.string().min(3),
    userPincode: zod_1.z.string().min(4),
    userContact: zod_1.z.string().trim().length(10),
    userAltrContact: zod_1.z.string().trim().length(10).optional(),
});
