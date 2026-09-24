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
          All Products
        </h1>

        <p className="text-gray-500 text-xl mt-3">
          {productCount} products found

          {category && (
            <span className="text-lime-400">
              {" "}
              in {category}
            </span>
          )}
        </p>

      </div>

      {/* Filter Box */}
      <div className="border border-gray-500 rounded-2xl p-6">

        <div className="flex gap-5 items-center">

          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search products"
            className="
              flex-1
              bg-zinc-900
              border
              border-gray-600
              rounded-xl
              px-5
              py-4
              text-white
              text-lg
              outline-none
              focus:border-lime-400
            "
          />

          {/* Category */}
          <select
            value={category || "all"}
            onChange={(e) =>
              onCategoryChange(e.target.value)
            }
            className="
              w-64
              bg-zinc-900
              border
              border-gray-600
              rounded-xl
              px-5
              py-4
              text-white
              text-lg
              outline-none
              focus:border-lime-400
            "
          >

            <option value="all">
              All Categories
            </option>

            <option value="electronics">
              Electronics
            </option>

            <option value="clothing">
              Clothing
            </option>

            <option value="furniture">
              Furniture
            </option>

            <option value="home">
              Home
            </option>

            <option value="sports">
              Sports
            </option>

            <option value="accessories">
              Accessories
            </option>

          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) =>
              onSortChange(e.target.value)
            }
            className="
              w-64
              bg-zinc-900
              border
              border-gray-600
              rounded-xl
              px-5
              py-4
              text-white
              text-lg
              outline-none
              focus:border-lime-400
            "
          >

            <option value="featured">
              Featured
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>

          </select>

        </div>

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