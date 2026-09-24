import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {

  const navigate = useNavigate();

  const categories = [
    {
      name: "Electronics",
      icon: "💻",
      value: "electronics",
      count: 0,
    },
    {
      name: "Clothing",
      icon: "👕",
      value: "clothing",
      count: 0,
    },
    {
      name: "Furniture",
      icon: "🛋️",
      value: "furniture",
      count: 0,
    },
    {
      name: "Home",
      icon: "🏠",
      value: "home",
      count: 0,
    },
    {
      name: "Sports",
      icon: "⚽",
      value: "sports",
      count: 0,
    },
    {
      name: "Accessories",
      icon: "👜",
      value: "accessories",
      count: 0,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6">

      {categories.map((category) => (

        <button
          key={category.value}
          type="button"
          onClick={() =>
            navigate(
              `/shop?category=${category.value}`
            )
          }
          className="
            h-35
            w-70
            bg-white
            border
            rounded-2xl
            hover:-translate-y-2
            hover:shadow-xl
            transition
          "
        >

          <div className="
            flex
            flex-col
            justify-center
            items-center
            gap-3
          ">

            <h1 className="py-2 text-4xl">
              {category.icon}
            </h1>

            <div className="
              flex
              flex-col
              items-center
              text-black
            ">

              <h1 className="text-xl">
                {category.name}
              </h1>

              <h1 className="text-gray-500">
                {category.count} items
              </h1>

            </div>

          </div>

        </button>

      ))}

    </div>
  );
};

export default Category;