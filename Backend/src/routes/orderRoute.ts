import { Order, UserSchema } from "@codersubham/bond-store-types";
import { Context, Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../generated/prisma/edge";
import axios from "axios";

const orderRoute = new Hono();

orderRoute.post("/createorder", async (c: Context) => {
  try {
    const body = await c.req.json();
    const {
      customerName,
      customerNumber,
      customerAddress,
      customerLandmark,
      customerPincode,
      customerAltrContact,
      customerState,
      productPurchased,
    } = body as Order;
    console.log(customerName);
    const { success, data } = UserSchema.safeParse({
      username: customerName,
      userAddress: customerAddress,
      userLandmark: customerLandmark,
      userContact: customerNumber,
      userPincode: customerPincode,
      userState: customerState,
      userAltrContact: customerAltrContact,
    });
    if (!success) return c.json({ msg: "Please enter valid credentials" });
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    await prisma.$transaction(async (tx) => {
      const today = new Date();
      const startOfDay = new Date(today.setHours(0, 0, 0, 0));
      let todayOrder = await tx.allOrders.findUnique({
        where: { date: startOfDay },
      });

      if (!todayOrder) {
        todayOrder = await tx.allOrders.create({
          data: {
            date: startOfDay,
          },
        });
      }

      const newOder = await tx.userOrder.create({
        data: {
          username: data.username,
          userAddress: data.userAddress,
          userContact: data.userContact,
          userLandmark: data.userLandmark,
          userState: data.userState,
          userPincode: data.userPincode,
          dayId: todayOrder.order_id,
        },
      });

      await tx.productPurchase.createMany({
        data: productPurchased.map((pro) => {
          return {
            userOrderUserId: newOder.userId,
            productId: Number(pro.productId),
            quantity: Number(pro.quantity),
          };
        }),
      });
    });

    let total = 0;
    const productList = productPurchased
      .map((item, idx) => {
        total += item.productAcutalPrice * item.quantity;
        return `Image: ${item.productImage.imgUrl} \n 📦${idx + 1}. ${
          item.productName
        } 
        (x${item.quantity}) - ₹${item.productAcutalPrice} 
        \n`;
      })
      .join("\n");

    const userDetail = `
    ${productList} \n \n
    👤 Name: ${data.username} \n 
    📞 Phone: ${data.userContact} \n 
    📞 Alt Phone : ${data.userAltrContact}  \n 
    Landmark : ${data.userLandmark} \n
    Pincode : ${data.userPincode} \n 
    State : ${data.userState} 
    📍Address: ${data.userAddress} 
    \n \n🛍️ TOTAL: ₹${total}`;

    const res = await axios.post(`${c.env.TELEGRAM_URL}`, {
      text: userDetail,
      chat_id: c.env.CHAT_ID,
    });

    if (res.data.ok == true) {
      return c.json({
        message: "Order Successful",
      });
    } else {
      return c.json(
        {
          message: "Some Error occured",
        },
        400
      );
    }
  } catch (error) {
    console.log(error);
    return c.json({ msg: "Internal Server Error" }, 500);
  }
});

export default orderRoute;
