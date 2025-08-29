import { useRecoilValue } from "recoil";
import { reviewState } from "../store/reviewState";
import Reviews from "../components/reviews";

const AllReviews = () => {
  const reviews = useRecoilValue(reviewState);
  return (
    <div className="w-full">
      <div className="grid gap-2 mx-auto grid-cols-2 md:grid-cols-3">
        {reviews.map((review) => {
          return (
            <Reviews
              key={review.reviewId}
              name={review.name}
              rating={review.rating}
              review={review.review}
              reviewId={review.reviewId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllReviews;
