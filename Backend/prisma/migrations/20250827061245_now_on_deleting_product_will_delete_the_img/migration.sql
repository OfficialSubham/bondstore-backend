-- DropForeignKey
ALTER TABLE "public"."Images" DROP CONSTRAINT "Images_productId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Images" ADD CONSTRAINT "Images_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;
