import { useEffect, useState } from "react";
import Carousel from "../components/carousel";
import {
  ProductSchema,
  type ProductInter,
} from "@codersubham/bond-store-types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { bulkProduct } from "../store/allProductsStore";
import { useNavigate, useParams } from "react-router-dom";
import { loadingState } from "../store/loadingState";
import axios from "axios";

const EditProduct = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
  const [products, setProducts] = useRecoilState(bulkProduct);
  const setLoadingState = useSetRecoilState(loadingState);

  const handleEditProduct = async () => {
    const { success, data, error } = ProductSchema.safeParse({
      productAcutalPrice: Number(currentProduct?.productAcutalPrice),
      productName: currentProduct?.productName,
      productDiscountedPrice: Number(currentProduct?.productDiscountedPrice),
      productDescription: currentProduct?.productDesc,
      productCategory: currentProduct?.productCategory,
    });
    console.log(error);
    if (!success) return alert("Please enter with minimum details");
    try {
      setLoadingState(true);
      const formData = new FormData();
      formData.append("productId", `${currentProduct?.productId}`);
      formData.append("productName", data.productName);
      formData.append("productAcutalPrice", `${data.productAcutalPrice}`);
      formData.append("productCategory", data.productCategory);
      formData.append("productDesc", data.productDescription);
      formData.append(
        "productDiscountedPrice",
        JSON.stringify(data.productDiscountedPrice)
      );
      if (deletedImagesId.length > 0) {
        const res = await axios.post(`${BACKEND_URL}/img/deleteimg`, {
          images: deletedImagesId,
        });
        if (res.status != 200)
          return alert("There is some error in the backend");
      }
      const updateProRes = await axios.put(
        `${BACKEND_URL}/product/editproduct`,
        formData
      );
      if (updateProRes.status != 200)
        return alert(
          "There is some problem in the backend please delete the product and create new one"
        );
      alert("Successfully updated the product");
      setProducts((pre) => {
        if (!pre) return pre;
        return pre?.map((eachPro) => {
          if (eachPro.productId == currentProduct?.productId) {
            return currentProduct;
          }
          return eachPro;
        });
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingState(false);
    }
  };

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

  useEffect(() => {
    const product = products?.find((pro) => pro.productId == Number(id));
    if (product) setCurrentProduct(product);
    return () => {
      setCurrentProduct(null);
    };
  }, [id, products]);

  return (
    currentProduct && (
      <div className="flex flex-col gap-8 font-toreadore w-full">
        <Carousel
          Images={currentProduct.Images}
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
