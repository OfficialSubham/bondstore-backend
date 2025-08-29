import type { ProductInter } from "@codersubham/bond-store-types";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { bulkProduct } from "../store/allProductsStore";
import axios from "axios";
import { loadingState } from "../store/loadingState";

type ProductSemiDetails = Pick<
  ProductInter,
  | "Images"
  | "productName"
  | "productAcutalPrice"
  | "productId"
  | "productDiscountedPrice"
>;

const Product = ({
  Images,
  productName,
  productAcutalPrice,
  productDiscountedPrice,
  productId,
}: ProductSemiDetails) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const setLoading = useSetRecoilState(loadingState);
  const setBulkProduct = useSetRecoilState(bulkProduct);
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const isConfirmed = confirm("Do You Really want to delete this product");
    if (!isConfirmed) return;
    setLoading(true);
    try {
      const res = await axios.delete(
        `${BACKEND_URL}/deleteProduct/${productId}`
      );
      if (res.status == 200) {
        alert("Product deleted successfully");
        setBulkProduct((pro) => {
          if (!pro) return null;
          return pro?.filter((prod) => prod.productId != productId);
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full snap-center w-50 mx-auto shrink-0 flex justify-center flex-col gap-2">
      <div className="h-40 flex-1 rounded-md w-full relative">
        <div className="absolute top-2 h-6 text-white font-bold w-12 bg-black rounded-md text-center right-2">
          {Math.floor(
            ((productAcutalPrice - productDiscountedPrice) /
              productAcutalPrice) *
              100
          )}
          % off
        </div>
        <img
          onClick={() => {
            navigate(`/edit/product/${productId}`);
          }}
          src={Images[0].imgUrl}
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="font-toreadore">
        Name :{" "}
        {productName.length > 1
          ? `${productName.slice(0, 10)}...`
          : productName}
        <br />
        Price :{" "}
        <span className="text-xs line-through text-slate-500">
          {productAcutalPrice}
        </span>
        <span className="font-bold ml-2">₹{productDiscountedPrice}</span>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/edit/product/${productId}`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export const FilterProduct = ({
  Images,
  productName,
  productAcutalPrice,
  productDiscountedPrice,
  productId,
}: ProductSemiDetails) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const setBulkProduct = useSetRecoilState(bulkProduct);
  const setLoading = useSetRecoilState(loadingState);
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const isConfirmed = confirm("Do You Really want to delete this product");
    if (!isConfirmed) return;
    setLoading(true);
    try {
      const res = await axios.delete(
        `${BACKEND_URL}/deleteProduct/${productId}`
      );
      if (res.status == 200) {
        setBulkProduct((pro) => {
          if (!pro) return null;
          return pro?.filter((prod) => prod.productId != productId);
        });
        alert("Product deleted successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full snap-center sm:w-40 md:w-58 mx-auto shrink-0 flex justify-center flex-col gap-2">
      <div className="h-40 flex-1 rounded-md w-full relative">
        <div className="absolute top-2 h-6 text-white font-bold w-12 bg-black rounded-md text-xs flex items-center justify-center right-2">
          {Math.floor(
            ((productAcutalPrice - productDiscountedPrice) /
              productAcutalPrice) *
              100
          )}
          % off
        </div>
        <img
          onClick={() => {
            navigate(`/edit/product/${productId}`);
          }}
          src={Images[0].imgUrl}
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="font-toreadore">
        Name :{" "}
        {productName.length > 1
          ? `${productName.slice(0, 10)}...`
          : productName}
        <br />
        Price :{" "}
        <span className="text-xs line-through text-slate-500">
          {productAcutalPrice}
        </span>
        <span className="font-bold ml-2">₹{productDiscountedPrice}</span>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-red-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/edit/product/${productId}`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Product;
