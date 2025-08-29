import { useNavigate } from "react-router-dom";
import { FewReviews } from "./reviews";
import { useRecoilValue } from "recoil";
import { reviewState } from "../store/reviewState";

export default function ReviewSection() {
  const reviews = useRecoilValue(reviewState);
  const navigate = useNavigate();
  return (
    <div className="w-full h-80 flex flex-col items-center snap-x snap-mandatory overflow-hidden">
      <div className="w-30 text-center font-toreadore text-xl font-bold leading-5 tracking-widest">
        Reviews & Ratings
      </div>
      <div className="flex-1 w-full flex gap-6 items-center px-2 overflow-x-scroll scroll-smooth scrollbar-hidden">
        {reviews.slice(0, 5).map((review) => (
          <FewReviews
            key={review.reviewId}
            name={review.name}
            rating={`${review.rating}`}
            review={review.review}
            reviewId={review.reviewId}
          />
        ))}
      </div>
      <button
        className="bg-black text-white rounded-md hover:bg-transparent border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
        onClick={() => {
          navigate("/reviews");
        }}
      >
        View All Reviews
      </button>
    </div>
  );
}
