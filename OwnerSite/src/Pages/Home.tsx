import { useState } from "react";
import Images from "../components/images";
import UploadImageInput from "../components/uploadImageInput";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState<File[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = Array.from(e.target.files);
    setImages((preSt) => preSt.concat(file));
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
      categoryType: "mensidebags",
    },
  ];
  return (
    <div className="w-full h-full overflow-y-scroll">
      <Images images={images} />
      <div className="absolute bottom-0 inset-x-0 bg-slate-700 py-2 px-5">
        <div className="max-w-3xl flex gap-4 flex-col h-full mx-auto">
          <UploadImageInput
            category={category}
            handleFileChange={handleFileChange}
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
  );
};

export default Home;
