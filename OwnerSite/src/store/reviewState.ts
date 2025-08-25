import { selector } from "recoil";

const reviews = [
  {
    reviewId: 1,
    name: "Subham Mondal",
    review:
      "This store is very good and had suitable environment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, velit possimus corporis sequi quia.",
    rating: "4",
  },
  {
    reviewId: 2,
    name: "Ananya Sharma",
    review:
      "Amazing collection of products, and the staff was very friendly. Definitely visiting again.",
    rating: "5",
  },
  {
    reviewId: 3,
    name: "Rohit Agarwal",
    review:
      "The place is decent but sometimes it feels a bit crowded. Still, great value for money.",
    rating: "3",
  },
  {
    reviewId: 4,
    name: "Priya Das",
    review:
      "I really liked the store vibe. Products were well organized and easy to find.",
    rating: "4",
  },
  {
    reviewId: 5,
    name: "Arjun Mehta",
    review:
      "Great experience! Staff explained the features very patiently. I would recommend this to my friends.",
    rating: "5",
  },
  {
    reviewId: 6,
    name: "Sneha Kapoor",
    review:
      "Store ambiance was good but billing took longer than expected. Needs improvement there.",
    rating: "3",
  },
  {
    reviewId: 7,
    name: "Karan Singh",
    review:
      "Best store I’ve visited in a while. Proper management and a wide variety of products.",
    rating: "5",
  },
  {
    reviewId: 8,
    name: "Ishita Roy",
    review:
      "Products were nice but some items were overpriced compared to other places.",
    rating: "3",
  },
  {
    reviewId: 9,
    name: "Amit Verma",
    review:
      "Customer service was really good. They helped me find the exact product I was looking for.",
    rating: "4",
  },
  {
    reviewId: 10,
    name: "Neha Gupta",
    review:
      "Neat and clean store with a relaxing atmosphere. Shopping here was smooth and enjoyable.",
    rating: "4",
  },
];

export const reviewState = selector({
  key: "reviewState",
  get: () => {
    return reviews;
  },
});
