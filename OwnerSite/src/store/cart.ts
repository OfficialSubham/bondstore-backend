import type { productPurchased } from "@codersubham/bond-store-types";
import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: JSON.parse(
    localStorage.getItem("yourCart") || "[]"
  ) as productPurchased[],
});

export const cartHydratedState = atom({
  key: "cartHydratedState",
  default: false,
});

export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const cart = get(cartState);
    let total = 0;
    cart.forEach((item) => {
      total += item.productDiscountedPrice * item.quantity;
    });
    return total;
  },
});

export const totalProduct = selector({
  key: "totalProduct",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.length;
  },
});

export const addedToCartState = atom({
  key: "addedToCartState",
  default: false,
});
