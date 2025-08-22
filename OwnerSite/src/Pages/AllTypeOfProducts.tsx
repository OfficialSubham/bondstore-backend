import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FilterProduct } from "../components/product";

const AllTypeOfProducts = () => {
  const arr = new Array(9).fill(9);
  const [sortBy, setSortBy] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <div className="w-full relative h-10 items-center flex">
        <div
          className="px-4 py-2 bg-slate-300/18 rounded-md font-toreadore"
          onClick={() => {
            setSortBy((st) => !st);
          }}
        >
          Sort By
          <AnimatePresence>
            {sortBy && (
              <motion.div
                initial={{ x: -100, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -200, opacity: 0.1, scale: 0.9, animationDelay: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="absolute text-center px-5 py-2 flex flex-col gap-2 bg-slate-300 transition-transform duration-300 left-0 top-12 rounded-md"
              >
                <div
                  onClick={() => {
                    setSortBy(false);
                  }}
                >
                  Low To High
                </div>
                <div className="w-full h-px bg-black"></div>
                <div
                  onClick={() => {
                    setSortBy(false);
                  }}
                >
                  High To Low
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4">
        {arr.map((_, idx) => {
          return (
            <div key={idx} className="h-70">
              <FilterProduct />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTypeOfProducts;
