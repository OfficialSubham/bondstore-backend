-- DropForeignKey
ALTER TABLE "public"."ProductPurchase" DROP CONSTRAINT "ProductPurchase_productId_fkey";

-- AddForeignKey
ALTER TABLE "public"."ProductPurchase" ADD CONSTRAINT "ProductPurchase_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;
