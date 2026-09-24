import React from 'react'
import Footer2 from './Footer2'
import userIcon from "../assets/img/user1.png";
import userIcon1 from "../assets/img/image (1).png";
import userIcon2 from "../assets/img/image (2).png";
import userIcon3 from "../assets/img/image (3).png";
import userIcon4 from "../assets/img/image (4).png";
import userIcon5 from "../assets/img/image (5).png";
import userIcon6 from "../assets/img/image.png";

const Header = () => {
  return (
<div>
    <div className='mt-5 h-full flex flex-col justify-center items-center gap-5'>
        <div>
            <img className="h-30 w-30"
                    src={userIcon}
                    alt="User"
                  />
        </div>
      <h1 className='text-white text-6xl'>About <span className='text-[#c8f400]'>SkyMart</span></h1>
      <div>
        <h3 className='text-gray-600 text-xl'>SkyMart is a next-generation e-commerce platform built to make online</h3>
        <h3 className='text-gray-600 text-xl'>shopping fast, fair, and enjoyable — for everyone.</h3>
      </div>
      <div className='mt-10 flex gap-4'>
        <div className='bg-[#111111] h-30 w-70 border border-white rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-3xl'><img className="h-5 w-5" src={userIcon4} alt="img" style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }}/></h1>
            <h1 className='text-white text-xl'>20K+</h1>
            <h4 className='text-gray-400 text-xs'>Products</h4>
        </div>
        <div className='bg-[#111111] h-30 w-70 border border-white rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-3xl'><img className="h-5 w-5" src={userIcon5} alt="img" style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }}/></h1>
            <h1 className='text-white text-xl'>50K+</h1>
            <h4 className='text-gray-400 text-xs'>Happy Customers</h4>
        </div>
        <div className='bg-[#111111] h-30 w-70 border border-white rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-3xl'><img className="h-5 w-5" src={userIcon3} alt="img" style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }}/></h1>
            <h1 className='text-white text-xl'>4.9</h1>
            <h4 className='text-gray-400 text-xs'>ProducAvg.Ratingts</h4>
        </div>
        <div className='bg-[#111111] h-30 w-70 border border-white rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-3xl'>
                <img className="h-5 w-5" 
                src={userIcon1} 
                alt="img"
                style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }} />
            </h1>
            <h1 className='text-white text-xl'>99%</h1>
            <h4 className='text-gray-400 text-xs'>On-time Delivery</h4>
        </div>
      </div>


      <div className='bg-[#111111] h-70 w-290 border border-white rounded-2xl'>
        <h1 className='p-5 ml-5 text-white text-4xl'>Our Story</h1>
        <div className='ml-10 text-gray-500 flex flex-col gap-4'>
            <p>
                <h1>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves:</h1>
                <h1>what if shopping online was actually enjoyable?</h1>
            </p>
            <p>
                <h1>Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday</h1>
                <h1>essentials — all at prices that don't require a second mortgage.</h1>
            </p>
            <p>
                <h1>We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.</h1>
            </p>
        </div>
      </div>

        <div className=' flex flex-col gap-10'>
            <div className="flex flex-col ">
                <h1 className="text-white text-4xl font-bold flex justify-center items-center">
                    What We Stand For
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-5">

            <div className="bg-[#111111] h-32 border border-white rounded-xl p-5">
                <img className="h-8 w-8"  src={userIcon6} alt="" style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }} />
                <h2 className="text-white text-xl font-bold">
                    Trust
                </h2>
                <p className="text-gray-400 mt-2">
                    Every product is verified for quality and authenticity before listing.
                </p>
            </div>

            <div className="bg-[#111111] h-32 border border-white rounded-xl p-5">
                <img src={userIcon1} alt="" style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }} />
                <h2 className="text-white text-xl font-bold">
                    Speed
                </h2>
                <p className="text-gray-400 mt-2">
                    We ensure every product meets our quality standards.
                </p>
            </div>

            <div className="bg-[#111111] h-32 border border-white rounded-xl p-5">
                <img src={userIcon2} alt="" style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }} />
                <h2 className="text-white text-xl font-bold">
                    Community
                </h2>
                <p className="text-gray-400 mt-2">
                    Your satisfaction is always our top priority.
                </p>
            </div>

            <div className="bg-[#111111] h-32 border border-white rounded-xl p-5">
                <img src={userIcon3} alt="" style={{
                filter:
                "brightness(0) saturate(100%) invert(79%) sepia(99%) saturate(1200%) hue-rotate(25deg) brightness(105%) contrast(105%)"
                }} />
                <h2 className="text-white text-xl font-bold">
                    Qwality
                </h2>
                <p className="text-gray-400 mt-2">
                    Clear pricing and honest product information every time.
                </p>
            </div>
        </div>


        <div className='flex flex-col gap-10'>
            <div>
                <h1 className='text-white flex justify-center items-center text-4xl'>Meet the Team</h1>
            </div>
            <div className='flex gap-5 ml-5 '>
                <div className='bg-[#111111] p-3 h-30 w-60 border border-white rounded-2xl text-white flex flex-col justify-center items-center'>
                    <h1>Aviek Roy</h1>
                    <h3>Founder & CEO</h3>
                </div>
                <div className='bg-[#111111] p-3 h-30 w-60 border border-white rounded-2xl text-white flex flex-col justify-center items-center'>
                    <h1>Aviek Roy</h1>
                    <h3>Founder & CEO</h3>
                </div>
                <div className='bg-[#111111] p-3 h-30 w-60 border border-white rounded-2xl text-white flex flex-col justify-center items-center'>
                    <h1>Aviek Roy</h1>
                    <h3>Founder & CEO</h3>
                </div>
                <div className='bg-[#111111] p-3 h-30 w-60 border border-white rounded-2xl text-white flex flex-col justify-center items-center'>
                    <h1>Aviek Roy</h1>
                    <h3>Founder & CEO</h3>
                </div>
            </div>
        </div>


        <div>
            <div className='ml-8 h-60 w-250 border border-[#c8f400] rounded-xl flex flex-col justify-center items-center gap-5'>
                <h1 className='text-white text-3xl mt-10'>Ready to shop</h1>
                <h4 className='text-gray-500'>Explore thousands of products at unbeatable prices</h4>
                <button className='h-13 w-50 border border-[#c8f400] rounded-xl text-black bg-[#c8f400] font-bold'>{"Browse Products ->"}</button>
            </div>
        </div>
    </div>
</div>
<Footer2 />
</div>
)}
export default Header
