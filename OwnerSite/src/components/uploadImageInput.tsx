import type { ProductCategory } from "@codersubham/bond-store-types";
import { useState } from "react";

interface CategoryType {
  categoryName: string;
  categoryType: string;
}

const UploadImageInput = ({
  handleFileChange,
  category,
  Image,
}: {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: CategoryType[];
  Image: File[];
}) => {
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

  const sendFile = () => {
    Image.forEach((img) => {
      if (img.size > 160000)
        return alert("Please Give Image of size lesser than 160KB");
    });
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
        className="h-25 rounded-md w-full bg-slate-300/18 p-2"
        placeholder="Enter Product description"
      ></textarea>
    </>
  );
};

export default UploadImageInput;
