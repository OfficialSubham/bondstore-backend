import { useEffect, useState } from "react";
import Carousel from "../components/carousel";
import type { ProductInter } from "@codersubham/bond-store-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bulkProduct } from "../store/allProductsStore";
import { useNavigate, useParams } from "react-router-dom";
import { loadingState } from "../store/loadingState";

const EditProduct = () => {
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
      categoryType: "mensidebags",
    },
  ];
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [currentProduct, setCurrentProduct] = useState<ProductInter | null>(
    null
  );
  const [deletedImagesId, setDeletedImagesId] = useState<number[]>([]);
  const products = useRecoilValue(bulkProduct);
  const setLoadingState = useSetRecoilState(loadingState);
  const handleEditProduct = async () => {
    console.log(deletedImagesId);
    console.log(currentProduct);
    setLoadingState(true);
    await new Promise((re) => setTimeout(re, 3000));
    setLoadingState(false);
    navigate(-1);
  };

  useEffect(() => {
    const product = products?.find((pro) => pro.productId == Number(id));
    if (product) setCurrentProduct(product);
    return () => {
      setCurrentProduct(null);
    };
  }, [id, products]);

  const handleOnChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setCurrentProduct((cp) => {
      if (!cp) return null;
      return {
        ...cp,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    currentProduct && (
      <div className="flex flex-col gap-8 font-toreadore w-full">
        <Carousel
          Images={currentProduct.productImages}
          setCurrentProduct={setCurrentProduct}
          setDeletedImagesId={setDeletedImagesId}
        />
        <span className="leading-4">
          Product Name :
          <input
            type="text"
            onChange={handleOnChange}
            name="productName"
            value={currentProduct.productName ?? ""}
            className="w-full mt-2 h-10 bg-slate-300 px-2 rounded-md"
          />
        </span>
        <div>
          Category : <br />
          <select
            className="bg-slate-300 text-black h-10 rounded-md px-2"
            name="productCategory"
            value={currentProduct.productCategory ?? ""}
            onChange={handleOnChange}
          >
            {category.map((cat) => {
              return (
                <option key={cat.categoryType} value={cat.categoryType}>
                  {cat.categoryName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="whitespace-pre-line">
          Description : <br />
          <textarea
            name="productDesc"
            value={currentProduct.productDesc ?? ""}
            className="h-30 bg-slate-300 w-full p-2 rounded-md"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div>
          Actual Price :{" "}
          <input
            type="number"
            value={currentProduct.productAcutalPrice ?? ""}
            name="productAcutalPrice"
            onChange={handleOnChange}
            className="bg-slate-300 h-10 w-full rounded-md px-2"
          />
        </div>
        <div>
          Discounted Price :{" "}
          <input
            type="number"
            name="productDiscountedPrice"
            value={currentProduct.productDiscountedPrice ?? ""}
            onChange={handleOnChange}
            className="bg-slate-300 h-10 w-full rounded-md px-2"
          />
        </div>
        <div className="mx-auto flex gap-4">
          <button
            className="bg-red-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-8 py-4 font-toreadore"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-8 py-4 font-toreadore"
            onClick={handleEditProduct}
          >
            Save
          </button>
        </div>
      </div>
    )
  );
};

export default EditProduct;
