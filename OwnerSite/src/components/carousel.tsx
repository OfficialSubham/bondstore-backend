import type { Images, ProductInter } from "@codersubham/bond-store-types";

export default function Carousel({
  Images,
  setCurrentProduct,
  setDeletedImagesId,
}: {
  Images: Images[];
  setCurrentProduct: React.Dispatch<React.SetStateAction<ProductInter | null>>;
  setDeletedImagesId: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const handleDeleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.dataset.imageId);
    setDeletedImagesId((pre) => {
      return pre.concat(id);
    });
    setCurrentProduct((cr) => {
      if (cr?.productImages == null) return cr;
      const currentImages = cr?.productImages.filter((img) => img.imgId != id);
      return {
        ...cr,
        productImages: currentImages,
      };
    });
  };

  return (
    <div className="h-80 rounded-md w-full flex gap-4 bg-slate-400 overflow-x-scroll p-2">
      {Images.map((img) => {
        return (
          <div
            key={img.imgId}
            className=" h-full rounded-md shadow-xl shrink-0 flex flex-col bg-slate-300/18 w-60 p-2"
          >
            <div className="flex-1 rounded-md shadow-md">
              <img
                src={img.imgUrl}
                alt={`preview-${img.imgUrl}`}
                className="h-full w-full"
              />
            </div>
            <button
              className="bg-red-500 px-5 py-2 mt-2 rounded-md mx-auto text-white"
              data-image-id={img.imgId}
              onClick={handleDeleteImage}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
