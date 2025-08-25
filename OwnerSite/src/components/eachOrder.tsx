import type { Order } from "@codersubham/bond-store-types";

const EachOrder = ({ orderDetails }: { orderDetails: Order }) => {
  return (
    <div className=" flex flex-col gap-2">
      <div>
        <h5>Name : {orderDetails.customerName}</h5>
        <h5>Address : {orderDetails.customerAddress}</h5>
        <h5>Phone Number: {orderDetails.customerNumber}</h5>
        <h5>Alt Num: {orderDetails.customerAltrContact}</h5>
      </div>
      <div className="h-50 w-full overflow-x-scroll flex gap-4">
        {orderDetails.productPurchased.map((pro) => {
          return (
            <div
              key={pro.productId}
              className="shrink-0 w-40 h-full bg-slate-300/18 shadow-2xl rounded-md"
            >
              <img
                src={pro.productImage.imgUrl}
                className="w-full h-35 rounded-md object-fit"
                alt=""
              />
              <h1>Quantity : {pro.quantity}</h1>
              <h1>Price : {pro.productDiscountedPrice}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EachOrder;
