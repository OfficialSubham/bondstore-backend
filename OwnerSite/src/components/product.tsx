import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-full snap-center w-50 mx-auto shrink-0 flex justify-center flex-col gap-2"
      onClick={() => {
        navigate(`/product/1`);
      }}
    >
      <div className="h-40 flex-1 rounded-md w-full">
        <img
          src="/tempImages/imag.jpeg"
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <button className="bg-red-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore">
          Delete
        </button>
        <button className="bg-green-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore">
          Edit
        </button>
      </div>
    </div>
  );
};

export const FilterProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full snap-center sm:w-40 md:w-58 mx-auto shrink-0 flex justify-center flex-col gap-2">
      <div className="h-40 flex-1 rounded-md w-full">
        <img
          src="/tempImages/imag.jpeg"
          alt="this is alt"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <button className="bg-red-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore">
          Delete
        </button>
        <button
          className="bg-green-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-5 py-2 font-toreadore"
          onClick={() => {
            navigate(`/product/1`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Product;
