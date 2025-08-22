export default function Carousel() {
  const images = new Array(5).fill(5);
  return (
    <div className="h-80 rounded-md w-full flex gap-4 bg-slate-400 overflow-x-scroll p-2">
      {images.map((_, idx) => {
        return (
          <div
            key={idx}
            className=" h-full rounded-md shadow-xl shrink-0 flex flex-col bg-slate-300/18 w-60 p-2"
          >
            <div className="flex-1 rounded-md shadow-md"></div>
            <button className="bg-red-500 px-5 py-2 mt-2 rounded-md mx-auto text-white">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
