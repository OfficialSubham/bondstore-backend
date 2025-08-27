-- CreateTable
CREATE TABLE "public"."Review" (
    "reviewId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewId")
);
