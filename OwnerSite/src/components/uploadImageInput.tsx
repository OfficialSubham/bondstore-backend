interface CategoryType {
  categoryName: string;
  categoryType: string;
}

const UploadImageInput = ({
  handleFileChange,
  category,
}: {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: CategoryType[];
}) => {
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
        <button className="px-5 py-3 bg-black rounded-md text-white font-toreadore">
          Send
        </button>
      </div>
      <div className="flex w-full gap-2 justify-start">
        <input
          type="text"
          placeholder="Product Name"
          className="bg-slate-300/18 w-full py-3 px-4 rounded-md"
        />
        <select className="bg-black rounded-md text-white px-2" name="Category">
          {category.map((cat) => {
            return <option value={cat.categoryType}>{cat.categoryName}</option>;
          })}
        </select>
      </div>
      <textarea
        name="desc"
        className="h-25 rounded-md w-full bg-slate-300/18 p-2"
        placeholder="Enter Product description"
      ></textarea>
    </>
  );
};

export default UploadImageInput;
