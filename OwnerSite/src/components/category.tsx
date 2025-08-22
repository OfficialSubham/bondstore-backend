import { useNavigate } from "react-router-dom";
import Product from "./product";

const Category = ({
  categoryName,
  categoryType,
}: {
  categoryName: string;
  categoryType: string;
}) => {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="w-full h-85 flex tracking-[2px] font-morganite flex-col gap-4">
      <div className="w-full flex justify-between">
        <h1 className="font-bold text-[32px]">{categoryName}</h1>
        <button
          className="bg-black text-white rounded-md hover:bg-transparent border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={() => {
            navigate(`/products/${categoryType}`);
          }}
        >
          View all
        </button>
      </div>
      <div className="flex-1 snap-x flex gap-4 overflow-x-scroll bg-slate-300/18 w-full items-center">
        {arr.slice(0, 4).map((cat) => {
          return <Product key={cat} />;
        })}
        {arr.length > 4 && (
          <button
            className="bg-black border text-white rounded-md hover:bg-transparent shrink-0 border-black hover:text-black transition-all duration-300 font-toreadore px-5 py-2 "
            onClick={() => {
              navigate(`/products/${categoryType}`);
            }}
          >
            View all
          </button>
        )}
      </div>
    </div>
  );
};

export default Category;
