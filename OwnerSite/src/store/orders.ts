// import type { AllOrders } from "@codersubham/bond-store-types";
import type { AllOrders } from "@codersubham/bond-store-types";
import { atom } from "recoil";

const allOrders = [
  {
    order_id: 1,
    date: "2025-08-01T10:30:00.000Z",
    orders: [
      {
        orderId: 101,
        customerName: "Subham Mondal",
        customerNumber: "9876543210",
        customerAddress: "Salt Lake, Kolkata",
        customerLandmark: "Near City Centre",
        customerPincode: "700091",
        customerAltrContact: "9123456789",
        productPurchased: [
          {
            productId: 1,
            productName: "Leather Wallet",
            productImage: {
              imgId: 1,
              productId: 1,
              imgUrl: "https://picsum.photos/200?random=1",
              fileId: "file_1",
            },
            productAcutalPrice: 1200,
            productDiscountedPrice: 999,
            quantity: 1,
          },
          {
            productId: 2,
            productName: "Hand Clutch",
            productImage: {
              imgId: 2,
              productId: 2,
              imgUrl: "https://picsum.photos/200?random=2",
              fileId: "file_2",
            },
            productAcutalPrice: 1500,
            productDiscountedPrice: 1299,
            quantity: 2,
          },
        ],
      },
      {
        orderId: 190,
        customerName: "Subham Mondal",
        customerNumber: "9876543210",
        customerAddress: "Salt Lake, Kolkata",
        customerLandmark: "Near City Centre",
        customerPincode: "700091",
        customerAltrContact: "9123456789",
        productPurchased: [
          {
            productId: 1,
            productName: "Leather Wallet",
            productImage: {
              imgId: 1,
              productId: 1,
              imgUrl: "https://picsum.photos/200?random=1",
              fileId: "file_1",
            },
            productAcutalPrice: 1200,
            productDiscountedPrice: 999,
            quantity: 1,
          },
          {
            productId: 2,
            productName: "Hand Clutch",
            productImage: {
              imgId: 2,
              productId: 2,
              imgUrl: "https://picsum.photos/200?random=2",
              fileId: "file_2",
            },
            productAcutalPrice: 1500,
            productDiscountedPrice: 1299,
            quantity: 2,
          },
        ],
      },
    ],
  },
  {
    order_id: 2,
    date: "2025-08-02T14:15:00.000Z",
    orders: [
      {
        orderId: 102,
        customerName: "Rohit Sharma",
        customerNumber: "9812345678",
        customerAddress: "Ballygunge, Kolkata",
        customerLandmark: "Near South City Mall",
        customerPincode: "700019",
        customerAltrContact: "9871234567",
        productPurchased: [
          {
            productId: 3,
            productName: "Imported Bag",
            productImage: {
              imgId: 3,
              productId: 3,
              imgUrl: "https://picsum.photos/200?random=3",
              fileId: "file_3",
            },
            productAcutalPrice: 2000,
            productDiscountedPrice: 1799,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    order_id: 3,
    date: "2025-08-03T09:00:00.000Z",
    orders: [
      {
        orderId: 103,
        customerName: "Ananya Gupta",
        customerNumber: "9123456780",
        customerAddress: "New Alipore, Kolkata",
        customerLandmark: "Near Metro Station",
        customerPincode: "700053",
        customerAltrContact: "9191919191",
        productPurchased: [
          {
            productId: 4,
            productName: "Men's Side Bag",
            productImage: {
              imgId: 4,
              productId: 4,
              imgUrl: "https://picsum.photos/200?random=4",
              fileId: "file_4",
            },
            productAcutalPrice: 1800,
            productDiscountedPrice: 1599,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    order_id: 4,
    date: "2025-08-04T16:20:00.000Z",
    orders: [
      {
        orderId: 104,
        customerName: "Priya Sen",
        customerNumber: "9000000000",
        customerAddress: "Dum Dum, Kolkata",
        customerLandmark: "Near Airport Gate",
        customerPincode: "700028",
        customerAltrContact: "9333333333",
        productPurchased: [
          {
            productId: 5,
            productName: "Casual Backpack",
            productImage: {
              imgId: 5,
              productId: 5,
              imgUrl: "https://picsum.photos/200?random=5",
              fileId: "file_5",
            },
            productAcutalPrice: 2500,
            productDiscountedPrice: 2200,
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    order_id: 5,
    date: "2025-08-05T11:10:00.000Z",
    orders: [
      {
        orderId: 105,
        customerName: "Arjun Das",
        customerNumber: "9876501234",
        customerAddress: "Howrah, West Bengal",
        customerLandmark: "Near Station Road",
        customerPincode: "711101",
        customerAltrContact: "9001234567",
        productPurchased: [
          {
            productId: 6,
            productName: "Travel Duffle Bag",
            productImage: {
              imgId: 6,
              productId: 6,
              imgUrl: "https://picsum.photos/200?random=6",
              fileId: "file_6",
            },
            productAcutalPrice: 3000,
            productDiscountedPrice: 2700,
            quantity: 2,
          },
        ],
      },
    ],
  },
];

export const ordersState = atom<AllOrders[]>({
  key: "ordersState",
  default: allOrders,
});
