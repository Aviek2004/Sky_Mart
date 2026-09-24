import React from "react";

const Hero1 = ({
  category = "",
  search = "",
  sort = "featured",
  onCategoryChange,
  onSearchChange,
  onSortChange,
  onClear,
  productCount = 0,
}) => {
  return (
    <div className="px-8 pt-8">

      {/* Heading */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold text-white">
          Shop by Category
        </h1>


        {/* Selected Category */}
        {category && (
          <div className="mt-5 flex items-center gap-3">

            <span className="
              bg-lime-400
              text-black
              px-5
              py-2
              rounded-full
              font-semibold
              flex
              items-center
              gap-3
            ">

              {category}

              <button
                onClick={onClear}
                className="
                  text-black
                  font-bold
                  text-xl
                  hover:text-red-600
                "
              >
                ×
              </button>

            </span>

          </div>
        )}

      </div>

    </div>
  );
};

export default Hero1;