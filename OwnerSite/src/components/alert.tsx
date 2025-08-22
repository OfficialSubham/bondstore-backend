const Alert = () => {
  const show = false;
  return (
    show && (
      <div className="w-screen h-screen flex-col gap-2 flex justify-center items-center bg-neutral-200 fixed z-100">
        <span>Do you confirm to do this</span>
        <div className="w-50  flex justify-evenly">
          <button className="bg-green-400 px-4 rounded-md text-white">
            Yes
          </button>
          <button className="bg-red-400 px-4 text-white py-2 rounded-md">
            No
          </button>
        </div>
      </div>
    )
  );
};

export default Alert;
