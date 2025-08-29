import { useRecoilValue } from "recoil";
import DateSpecifitOrder from "../components/dateSpecifitOrder";
import { ordersState } from "../store/orders";

const Orders = () => {
  const orders = useRecoilValue(ordersState);
  return (
    <div className="min-h-screen overflow-scroll flex flex-col w-full">
      <h1>All Orders</h1>
      <div className="flex-1 flex flex-col gap-10 bg-black w-full">
        {orders.map((ordr) => {
          console.log(ordr);
          return (
            // <div key={ordr.order_id}>hello</div>
            <DateSpecifitOrder
              key={ordr.order_id}
              ordrDate={ordr.date}
              orders={ordr.orders}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
