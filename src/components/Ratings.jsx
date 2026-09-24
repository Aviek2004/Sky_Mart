import React from "react";
import cake from "../assets/img/cake.jpg";
import tv from "../assets/img/tv.jpg";
import sofa from "../assets/img/sofa.jpg";
import keyboard from "../assets/img/keyboard.jpg";
import studyLamp from "../assets/img/studyLamp.jpg";

const products = [
  { id: 1, img: cake, price: "$599.99" },
  { id: 2, img: tv, price: "$899.99" },
  { id: 3, img: sofa, price: "$1299.99" },
  { id: 4, img: keyboard, price: "$149.99" },
  { id: 5, img: studyLamp, price: "$79.99" },
];

const Ratings = () => {
  return (
    <div className="flex gap-4 p-1">
      {/* Top Rated */}
      <div className="p-4 font-bold text-2xl h-120 w-160 bg-white border rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-black">Top Rated</h1>
          <h1 className="text-[#c8f400] text-xl">See all</h1>
        </div>

        <div className="p-4 flex flex-col gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="h-16 w-130 border border-gray-400 rounded-xl flex justify-between items-center"
            >
              <div className="p-3 flex gap-3 items-center">
                <img className="h-8 w-8" src={item.img} alt="product" />
                <h1 className="text-[#c8f400] text-xl">{item.price}</h1>
              </div>

              <button className="mr-2 w-10 h-10 rounded-xl bg-lime-100 flex items-center justify-center hover:bg-lime-200 transition">
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="p-4 font-bold text-2xl h-120 w-160 bg-white border rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-black">New Arrivals</h1>
          <h1 className="text-[#c8f400] text-xl">See all</h1>
        </div>

        <div className="p-4 flex flex-col gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="h-16 w-130 border border-gray-400 rounded-xl flex justify-between items-center"
            >
              <div className="p-3 flex gap-3 items-center">
                <img className="h-8 w-8" src={item.img} alt="product" />
                <h1 className="text-[#c8f400] text-xl">{item.price}</h1>
              </div>

              <button className="mr-2 w-10 h-10 rounded-xl bg-lime-100 flex items-center justify-center hover:bg-lime-200 transition">
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ratings;