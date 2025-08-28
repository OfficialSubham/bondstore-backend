/*
  Warnings:

  - You are about to drop the column `allOrdersOrder_id` on the `UserOrder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[date]` on the table `AllOrders` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `date` on the `AllOrders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `dayId` to the `UserOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."UserOrder" DROP CONSTRAINT "UserOrder_allOrdersOrder_id_fkey";

-- AlterTable
ALTER TABLE "public"."AllOrders" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."UserOrder" DROP COLUMN "allOrdersOrder_id",
ADD COLUMN     "dayId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AllOrders_date_key" ON "public"."AllOrders"("date");

-- AddForeignKey
ALTER TABLE "public"."UserOrder" ADD CONSTRAINT "UserOrder_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "public"."AllOrders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
