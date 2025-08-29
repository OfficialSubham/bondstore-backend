const Images = ({
  images,
  handleDeleteImage,
}: {
  images: File[];
  handleDeleteImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="flex gap-4 px-2 flex-1 flex-wrap pb-80">
      {images.map((file, i) => (
        <div className="w-50 flex flex-col gap-2">
          <img
            key={i}
            src={URL.createObjectURL(file)}
            alt={`preview-${i}`}
            className="w-40 h-40 object-cover mx-auto rounded-lg shadow"
          />
          <button
            className="bg-red-500 mx-auto w-fit px-3 py-2 rounded-md"
            data-img-id={i}
            onClick={handleDeleteImage}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Images;
