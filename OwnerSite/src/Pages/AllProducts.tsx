import Category from "../components/category";

const AllProducts = () => {
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

  return (
    <div className="w-full flex flex-col gap-4 h-full">
      {category.map((cat) => {
        return (
          <Category
            key={cat.categoryName}
            categoryName={cat.categoryName}
            categoryType={cat.categoryType}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
