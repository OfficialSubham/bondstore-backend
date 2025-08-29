// import type { AllOrders } from "@codersubham/bond-store-types";
import type { AllOrders, ProductInter } from "@codersubham/bond-store-types";
import axios from "axios";
import { atom, selector } from "recoil";

type productArray = {
  product: ProductInter;
  productId: number;
  purchasedId: number;
  quantity: number;
  userOrderUserId: number;
};

export type IOrder = {
  dayId: number;
  productPurchased: productArray[];
  userAddress: string;
  userAltrContact?: string;
  userContact: string;
  userId: number;
  userLandmark: string;
  userPincode: string;
  userState: string;
  username: string;
};

type EditedAllOrders = Omit<AllOrders, "orders"> & {
  orders: IOrder[];
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const ordersState = atom<EditedAllOrders[] | []>({
  key: "ordersState",
  default: selector({
    key: "ordersStateSelector",
    get: async () => {
      const res = await axios.get(`${BACKEND_URL}/order/getallorder`);
      const orders = res.data.allOrders as EditedAllOrders[];
      return orders;
    },
  }),
});
