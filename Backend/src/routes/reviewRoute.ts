import { withAccelerate } from "@prisma/extension-accelerate";
import { Context, Hono } from "hono";
import { ReviewSchema } from "@codersubham/bond-store-types";
import { PrismaClient } from "../generated/prisma/edge";

const reviewRoute = new Hono();

reviewRoute.get("/getallreview", async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const allReview = await prisma.review.findMany();
    return c.json({ message: "Here is your all review", reviews: allReview });
  } catch (error) {
    c.json({ msg: "Internal Server Error" }, 500);
  }
});

reviewRoute.post("/createReview", async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { name, review, rating } = body;
    const { success } = ReviewSchema.safeParse({
      name,
      review,
      rating,
    });
    if (!success) return c.json({ msg: "Please enter valid credentials" }, 400);
    await prisma.review.create({
      data: {
        name,
        review,
        rating,
      },
    });
    return c.json({ msg: "Review Created Successfully" });
  } catch (error) {
    return c.json({ msg: "Internal Server Error" }, 500);
  }
});

reviewRoute.delete("/deleteReview/:id", async (c: Context) => {
  try {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    await prisma.review.delete({
      where: {
        reviewId: Number(id),
      },
    });
    return c.json({ msg: "Successfull deleted the review" });
  } catch (error) {
    return c.json({ msg: "Internal Server Error" }, 500);
  }
});

export default reviewRoute;
