import axios from "axios";
import { atom, selector } from "recoil";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
type review = {
  reviewId: number;
  name: string;
  review: string;
  rating: number;
};

export const reviewState = atom({
  key: "reviewState",
  default: selector({
    key: "reviewSelector",
    get: async () => {
      const res = await axios(`${BACKEND_URL}/review/getallreview`);
      const reviews = res.data.reviews as review[];
      return reviews.reverse();
    },
  }),
});
