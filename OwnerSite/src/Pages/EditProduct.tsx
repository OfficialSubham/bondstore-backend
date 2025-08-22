import Carousel from "../components/carousel";

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

  return (
    <div className="flex flex-col gap-8 font-toreadore w-full">
      <Carousel />
      <span className="leading-4">
        Product Name :
        <input
          type="text"
          className="w-full mt-2 h-10 bg-slate-300 px-2 rounded-md"
        />
      </span>
      <div>
        Category : <br />
        <select
          className="bg-slate-300 text-black h-10 rounded-md px-2"
          name="Category"
        >
          {category.map((cat) => {
            return <option value={cat.categoryType}>{cat.categoryName}</option>;
          })}
        </select>
      </div>
      <div className="whitespace-pre-line">
        Description : <br />
        <textarea
          name="desc"
          className="h-30 bg-slate-300 w-full p-2 rounded-md"
        ></textarea>
      </div>
      <div>
        Price :{" "}
        <input
          type="number"
          className="bg-slate-300 h-10 w-full rounded-md px-2"
        />
      </div>
      <div className="mx-auto flex gap-4">
        <button className="bg-red-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-8 py-4 font-toreadore">
          Cancel
        </button>
        <button className="bg-green-500 text-white rounded-md hover:bg-transparent hover:border border-black hover:text-black transition-all duration-300 px-8 py-4 font-toreadore">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
