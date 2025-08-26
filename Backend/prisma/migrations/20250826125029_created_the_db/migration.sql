-- CreateEnum
CREATE TYPE "public"."ProductCategories" AS ENUM ('menswallet', 'leatherbags', 'importedbags', 'handclutch', 'mensidebag');

-- CreateTable
CREATE TABLE "public"."Product" (
    "productId" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "productDesc" TEXT NOT NULL,
    "productAcutalPrice" INTEGER NOT NULL,
    "productDiscountedPrice" INTEGER NOT NULL,
    "productCategory" "public"."ProductCategories" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "public"."Images" (
    "imgId" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "fileId" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("imgId")
);

-- CreateTable
CREATE TABLE "public"."UserOrder" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "userAddress" TEXT NOT NULL,
    "userLandmark" TEXT NOT NULL,
    "userState" TEXT NOT NULL,
    "userPincode" TEXT NOT NULL,
    "userContact" TEXT NOT NULL,
    "userAltrContact" TEXT,
    "allOrdersOrder_id" INTEGER,

    CONSTRAINT "UserOrder_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "public"."AllOrders" (
    "order_id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "AllOrders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "public"."ProductPurchase" (
    "purchasedId" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userOrderUserId" INTEGER,

    CONSTRAINT "ProductPurchase_pkey" PRIMARY KEY ("purchasedId")
);

-- AddForeignKey
ALTER TABLE "public"."Images" ADD CONSTRAINT "Images_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserOrder" ADD CONSTRAINT "UserOrder_allOrdersOrder_id_fkey" FOREIGN KEY ("allOrdersOrder_id") REFERENCES "public"."AllOrders"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductPurchase" ADD CONSTRAINT "ProductPurchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductPurchase" ADD CONSTRAINT "ProductPurchase_userOrderUserId_fkey" FOREIGN KEY ("userOrderUserId") REFERENCES "public"."UserOrder"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
