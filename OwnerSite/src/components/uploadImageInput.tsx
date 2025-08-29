import {
  ProductSchema,
  type ProductCategory,
} from "@codersubham/bond-store-types";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { loadingState } from "../store/loadingState";
import axios from "axios";

interface CategoryType {
  categoryName: string;
  categoryType: string;
}

const UploadImageInput = ({
  handleFileChange,
  category,
  Image,
  setImages,
}: {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: CategoryType[];
  Image: File[];

  setImages: (Image: File[]) => void;
}) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const setLoading = useSetRecoilState(loadingState);

  const [productDetails, setProductDetails] = useState({
    productName: "",
    productDescription: "",
    productAcutalPrice: "",
    productDiscountedPrice: "",
    productCategory: "menswallet" as ProductCategory,
  });

  const handleOnchange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setProductDetails((prePro) => {
      return {
        ...prePro,
        [e.target.name]: e.target.value,
      };
    });
  };

  const sendFile = async () => {
    Image.forEach((img) => {
      if (img.size > 160000)
        return alert("Please Give Image of size lesser than 160KB");
    });
    const { success, data } = ProductSchema.safeParse({
      productAcutalPrice: Number(productDetails.productAcutalPrice),
      productName: productDetails.productName,
      productDiscountedPrice: Number(productDetails.productDiscountedPrice),
      productDescription: productDetails.productDescription,
      productCategory: productDetails.productCategory,
    });

    if (!success) return alert("Please Enter valid product details");
    setLoading(true);
    try {
      const formData = new FormData();
      for (const file of Image) {
        formData.append("files", file, file.name);
      }
      formData.append("productName", data.productName);
      formData.append("productAcutalPrice", `${data.productAcutalPrice}`);
      formData.append("productCategory", data.productCategory);
      formData.append("productDesc", data.productDescription);
      formData.append(
        "productDiscountedPrice",
        JSON.stringify(data.productDiscountedPrice)
      );

      const res = await axios.post(`${BACKEND_URL}/createproduct`, formData);
      alert(res.data.message);
      setProductDetails({
        productName: "",
        productDescription: "",
        productAcutalPrice: "",
        productDiscountedPrice: "",
        productCategory: "menswallet" as ProductCategory,
      });
      setImages([]);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message); // your backend’s error
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <input
          type="file"
          multiple
          accept="image/"
          onChange={handleFileChange}
          className="bg-slate-300/18 w-full py-3 px-4 rounded-md"
        />
        <button
          className="px-5 py-3 bg-black rounded-md text-white font-toreadore"
          onClick={sendFile}
        >
          Send
        </button>
      </div>
      <div className="flex w-full gap-2 justify-start">
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          value={productDetails.productName}
          onChange={handleOnchange}
          className="bg-slate-300/18 w-full py-3 px-4 rounded-md"
        />
        <select
          className="bg-black rounded-md text-white px-2"
          name="productCategory"
          value={productDetails.productCategory}
          onChange={handleOnchange}
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
      <div className="flex w-full gap-2 justify-start">
        <input
          type="number"
          name="productAcutalPrice"
          value={productDetails.productAcutalPrice}
          onChange={handleOnchange}
          placeholder="Product Actual Price"
          className="bg-slate-300/18 w-full py-3 px-4 rounded-md"
        />
        <input
          type="number"
          name="productDiscountedPrice"
          value={productDetails.productDiscountedPrice}
          onChange={handleOnchange}
          placeholder="Product Discounted Price"
          className="bg-slate-300/18 w-full py-3 px-4 rounded-md"
        />
      </div>
      <textarea
        name="productDescription"
        onChange={handleOnchange}
        value={productDetails.productDescription}
        className="h-25 rounded-md w-full bg-slate-300/18 p-2"
        placeholder="Enter Product description"
      ></textarea>
    </>
  );
};

export default UploadImageInput;
