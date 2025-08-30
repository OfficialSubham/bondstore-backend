-- DropForeignKey
ALTER TABLE "public"."UserOrder" DROP CONSTRAINT "UserOrder_dayId_fkey";

-- AddForeignKey
ALTER TABLE "public"."UserOrder" ADD CONSTRAINT "UserOrder_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "public"."AllOrders"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;
