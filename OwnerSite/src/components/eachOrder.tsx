import type { IOrder } from "../store/orders";

const EachOrder = ({ orderDetails }: { orderDetails: IOrder }) => {
  return (
    <div className=" flex flex-col gap-2 pb-4 ">
      <div>
        <h5>Name : {orderDetails.username}</h5>
        <h5>Address : {orderDetails.userAddress}</h5>
        <h5>Phone Number: {orderDetails.userContact}</h5>
        <h5>Alt Num: {orderDetails.userAltrContact}</h5>
      </div>
      <div className="h-60 w-full overflow-x-scroll flex gap-4 border-b border-black pb-5 mb-4">
        {orderDetails.productPurchased.map((pro) => {
          return (
            <div
              key={pro.productId}
              className="shrink-0 w-40 h-full bg-slate-300/18 shadow-2xl rounded-md"
            >
              <img
                src={pro.product.Images[0].imgUrl}
                className="w-full h-35 rounded-md object-fit"
                alt=""
              />
              <h1>Quantity : {pro.quantity}</h1>
              <h1>Price : {pro.product.productDiscountedPrice}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EachOrder;
