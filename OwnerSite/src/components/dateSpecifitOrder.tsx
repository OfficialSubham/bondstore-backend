import type { ProductInter } from "@codersubham/bond-store-types";
import EachOrder from "./eachOrder";
import { useSetRecoilState } from "recoil";
import { ordersState } from "../store/orders";
import { loadingState } from "../store/loadingState";

type productArray = {
  product: ProductInter;
  productId: number;
  purchasedId: number;
  quantity: number;
  userOrderUserId: number;
};

type IOrder = {
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

const DateSpecifitOrder = ({
  ordrDate,
  orders,
}: {
  ordrDate: Date;
  orders: IOrder[];
}) => {
  const formattedDate = new Date(ordrDate).toLocaleDateString("en-IN", {
    day: "2-digit", // 25
    month: "short", // Aug
    year: "numeric", // 2025
  });

  const setOrderState = useSetRecoilState(ordersState);
  const setLoading = useSetRecoilState(loadingState);
  const handleDeleteOrder = async () => {
    const isConfirmed = confirm(
      "Do you really want to delete all the order of this day"
    );
    if (!isConfirmed) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 3000));
    setOrderState((pre) => {
      return pre.filter((pro) => pro.date != ordrDate);
    });
    setLoading(false);
  };

  return (
    <div className="p-2 w-full bg-stone-200">
      <button
        className="bg-red-400 px-5 py-3 rounded-md"
        onClick={handleDeleteOrder}
      >
        Delete This Days All Order
      </button>
      <h1>Date: {formattedDate}</h1>
      {orders
        .map((ordr) => {
          return <EachOrder key={ordr.userId} orderDetails={ordr} />;
        })
        .reverse()}
    </div>
  );
};

export default DateSpecifitOrder;
