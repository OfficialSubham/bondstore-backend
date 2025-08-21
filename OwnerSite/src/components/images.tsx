const Images = ({ images }: { images: File[] }) => {
  return (
    <div className="flex gap-4 px-2 flex-1 flex-wrap pb-80">
      {images.map((file, i) => (
        <img
          key={i}
          src={URL.createObjectURL(file)}
          alt={`preview-${i}`}
          className="w-40 h-40 object-cover mx-auto rounded-lg shadow"
        />
      ))}
    </div>
  );
};

export default Images;
