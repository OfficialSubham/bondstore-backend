import { useNavigate } from "react-router-dom";
import Product from "./product";
import { useRecoilValue } from "recoil";
import { bulkProduct } from "../store/allProductsStore";

const Category = ({
  categoryName,
  categoryType,
}: {
  categoryName: string;
  categoryType: string;
}) => {
  const navigate = useNavigate();
  const products = useRecoilValue(bulkProduct);

  return (
    <div className="w-full h-100 flex tracking-[2px] font-morganite flex-col gap-4">
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
        {products
          ?.filter((pro) => pro.productCategory == categoryType)
          .slice(0, 8)
          .map((pro) => {
            return (
              <Product
                productAcutalPrice={pro.productAcutalPrice}
                productDiscountedPrice={pro.productDiscountedPrice}
                productId={pro.productId}
                productImages={pro.productImages}
                productName={pro.productName}
                key={pro.productId}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Category;
