import { useState } from "react";
import Images from "../components/images";
import UploadImageInput from "../components/uploadImageInput";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { bulkProduct } from "../store/allProductsStore";
const Home = () => {
  const navigate = useNavigate();
  const products = useRecoilValue(bulkProduct);
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = Array.from(e.target.files);
    setImages((preSt) => preSt.concat(file));
  };

  const handleDeleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.imgId;
    setImages((pre) => {
      return pre.filter((_, idx) => idx != Number(id));
    });
  };

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
  return products ? (
    <div className="w-full h-full overflow-y-scroll">
      <Images images={images} handleDeleteImage={handleDeleteImage} />
      <div className="absolute bottom-0 inset-x-0 bg-slate-700 py-2 px-5">
        <div className="max-w-3xl flex gap-4 flex-col h-full mx-auto">
          <UploadImageInput
            category={category}
            Image={images}
            handleFileChange={handleFileChange}
            setImages={setImages}
          />
          <button
            className="bg-black mx-auto rounded-md text-white px-5 py-3"
            onClick={() => {
              navigate("/yourproducts");
            }}
          >
            Go to Your Products
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>there is nothing to show for now</div>
  );
};

export default Home;
