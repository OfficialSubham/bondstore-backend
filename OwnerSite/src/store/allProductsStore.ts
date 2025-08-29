import type { ProductInter } from "@codersubham/bond-store-types";
import axios from "axios";
import { atom, selector, selectorFamily } from "recoil";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const bulkProduct = atom<ProductInter[] | null>({
  key: "bulkProduct",
  default: selector({
    key: "bulkProductSelector",
    get: async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/allproduct/bulk`);
        // console.log(res);
        return res.data.bulkProducts;
      } catch (error) {
        console.log(error);
      }
      return [];
    },
  }),
});

export const categoryProductSelector = selectorFamily({
  key: "categoryProducts",
  get:
    ({ category }: { category: string }) =>
    ({ get }) => {
      const products = get(bulkProduct);
      if (!products) return [];
      const filtered =
        category == "explorebags"
          ? products
          : products.filter((p) => p.productCategory == category);
      return [...filtered].sort(
        (a, b) => a.productDiscountedPrice - b.productDiscountedPrice
      );
    },
});

export const oneProductPerCategorySelector = selector<ProductInter[]>({
  key: "oneProductPerCategorySelector",
  get: ({ get }) => {
    const products = get(bulkProduct);
    if (!products) return [];

    const categoryMap = new Map<string, ProductInter>();

    for (const product of products) {
      if (!categoryMap.has(product.productCategory)) {
        categoryMap.set(product.productCategory, product);
      }
    }

    return Array.from(categoryMap.values());
  },
});
