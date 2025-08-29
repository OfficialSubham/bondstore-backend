import axios from "axios";
import { useSetRecoilState } from "recoil";
import { reviewState } from "../store/reviewState";
import { loadingState } from "../store/loadingState";

const Reviews = ({
  name,
  review,
  rating,
  reviewId,
}: {
  name: string;
  review: string;
  rating: number;
  reviewId: number;
}) => {
  const setRev = useSetRecoilState(reviewState);
  const setLoading = useSetRecoilState(loadingState);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleDeleteReview = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `${BACKEND_URL}/review/deleteReview/${reviewId}`
      );
      if (res.status != 200)
        return alert("There is some problem on deleting the review");
      setRev((pre) => {
        return pre.filter((rev) => rev.reviewId != reviewId);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`carousel-item h-55 sm:w-40 snap-center flex-shrink-0 flex flex-col gap-2 md:w-58 md:h-50 font-toreadore transition-transform duration-300 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.2),0_-2px_10px_rgba(0,0,0,0.1)] p-2`}
    >
      <h1>
        Name : <br />
        <span className="text-xs"> {name}</span>
      </h1>
      <h2>
        Review: <br />
        <div className="text-xs tracking-tight leading-4">
          {review.length > 30 ? `${review.slice(0, 29)}...` : review}
        </div>
      </h2>
      <h4>Rating : {rating}/5</h4>
      <button
        className="bg-red-500 mx-auto px-5 py-1 rounded-md"
        onClick={handleDeleteReview}
      >
        Delete
      </button>
    </div>
  );
};

export const FewReviews = ({
  name,
  review,
  rating,
  reviewId,
}: {
  name: string;
  review: string;
  rating: string;
  reviewId: number;
}) => {
  const setRev = useSetRecoilState(reviewState);
  const setLoading = useSetRecoilState(loadingState);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleDeleteReview = async () => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `${BACKEND_URL}/review/deleteReview/${reviewId}`
      );
      if (res.status != 200)
        return alert("There is some problem on deleting the review");
      setRev((pre) => {
        return pre.filter((rev) => rev.reviewId != reviewId);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`carousel-item h-55 w-60 snap-center flex-shrink-0 flex flex-col gap-2 md:w-58 md:h-50 font-toreadore transition-transform duration-300 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.2),0_-2px_10px_rgba(0,0,0,0.1)] p-2`}
    >
      <h1>
        Name : <br />
        <span className="text-xs"> {name}</span>
      </h1>
      <h2>
        Review: <br />
        <div className="text-xs tracking-tight leading-4">
          {review.length > 30 ? `${review.slice(0, 29)}...` : review}
        </div>
      </h2>
      <h4>Rating : {rating}/5</h4>

      <button
        className="bg-red-500 mx-auto px-5 py-1 rounded-md"
        onClick={handleDeleteReview}
      >
        Delete
      </button>
    </div>
  );
};

export default Reviews;
