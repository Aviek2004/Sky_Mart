import React from 'react';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#111]
    border border-white
    rounded-[35px]
    p-10
    flex justify-between items-center
    min-h-50

    bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
    bg-size:60px_60p]">

  {/* Left Side */}
  <div className="flex flex-col gap-5">
    <div>
      <h1 className="uppercase text-[#c8f400] text-xl mb-5">
        Good afternoon 👋
      </h1>

      <h1 className="text-white text-6xl">
        Welcome back,
      </h1>
    </div>

    <p className="text-[#c8f400] text-5xl">
      Aviek!
    </p>

    <div>
      <p className="text-gray-500">
        Discover today's picks — hand-curated products across
      </p>
      <p className="text-gray-500">
        electronics, fashion, and more.
      </p>
    </div>

    <div className="flex gap-3">
      <button onClick={() => navigate("/shop")} className="h-10 w-30 bg-[#c8f400] rounded-xl text-white hover:text-black">
        Shop Now
      </button>

      <button onClick={() => navigate("/shop")} className="h-10 w-40 border border-gray-700 rounded-xl text-gray-500 hover:border-white">
        View All Products
      </button>
    </div>
  </div>

  {/* Right Side */}
  <div className="flex flex-col gap-4">
    <div className="h-20 w-40 border border-gray-400 rounded-xl flex flex-col justify-center items-center">
      <h1 className="text-[#c8f400] text-4xl">20+</h1>
      <p className="text-gray-400">Products Available</p>
    </div>

    <div className="h-20 w-40 border border-gray-400 rounded-xl flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl">Free</h1>
      <p className="text-gray-400">Delivery on ₹999+</p>
    </div>
  </div>

</div>
  )
}

export default Hero
