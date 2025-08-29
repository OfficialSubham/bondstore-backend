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
    const isConfirmed = confirm("Do You really want to delete the image");
    if (!isConfirmed) return;
    setDeletedImagesId((pre) => {
      return pre.concat(id);
    });
    setCurrentProduct((cr) => {
      if (cr?.Images == null) return cr;
      if (cr?.Images.length == 1) {
        alert("Please delete the product or keep 1 image");
        return cr;
      }
      const currentImages = cr?.Images.filter((img) => img.imgId != id);
      return {
        ...cr,
        Images: currentImages,
      };
    });
  };

  return (
    <div className="h-80 rounded-md w-full flex gap-4 bg-slate-400 overflow-x-scroll p-2">
      {Images.map((img) => {
        return (
          <div
            key={img.imgId}
            className=" h-full rounded-md  shadow-xl shrink-0 flex flex-col bg-slate-300/18 w-60 p-2"
          >
            <div className="h-55 rounded-md shadow-md">
              <img
                src={img.imgUrl}
                alt={`preview-${img.imgUrl}`}
                className="h-full w-full rounded-md"
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
