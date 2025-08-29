import { FilterProduct } from "../components/product";
import { useRecoilValue } from "recoil";
import { categoryProductSelector } from "../store/allProductsStore";
import { useParams } from "react-router-dom";

const AllTypeOfProducts = () => {
  const { category } = useParams();
  const products = useRecoilValue(
    categoryProductSelector({ category: category || "" })
  );
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <div key={product.productId} className="h-90">
              <FilterProduct
                productId={product.productId}
                Images={product.Images}
                productName={product.productName}
                productAcutalPrice={product.productAcutalPrice}
                productDiscountedPrice={product.productDiscountedPrice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTypeOfProducts;
