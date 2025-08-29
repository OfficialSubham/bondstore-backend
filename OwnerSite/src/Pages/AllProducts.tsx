import { useNavigate } from "react-router-dom";
import Category from "../components/category";
import ReviewSection from "../components/reviewSection";

const AllProducts = () => {
  const category = [
    {
      categoryName: "Men's Wallet",
      categoryType: "menswallet",
    },
    {
      categoryName: "Leather Bags",
      categoryType: "leatherbags",
    },
    {
      categoryName: "Imported Bags",
      categoryType: "importedbags",
    },
    {
      categoryName: "Hand Clutch",
      categoryType: "handclutch",
    },
    {
      categoryName: "Men's Side Bag",
      categoryType: "mensidebag",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4 h-full">
      <button
        className="bg-black text-white font-toreadore px-5 py-3 mx-auto rounded-md"
        onClick={() => {
          navigate("/orders");
        }}
      >
        View Orders
      </button>
      <ReviewSection />
      {category.map((cat) => {
        return (
          <Category
            key={cat.categoryName}
            categoryName={cat.categoryName}
            categoryType={cat.categoryType}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
