import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div
      className="h-[50vh] flex gap-10 mx-auto mb-[150px]
 py-0 px-[140px] bg-gradient-to-br from-pink-200 to-white"
    >
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-semibold text-gray-800">Exclusive offers for you</h1>
        <p className="text-gray-600 text-1xl font-semibold pb-5">
          ONLY ON BEST SELLERS PRODUCT
        </p>
        <button className="w-[250px] h-[50px] bg-pink-400 rounded-full text-white cursor-pointer hover:bg-pink-200">
          Shop Now
        </button>
      </div>
      <div className="flex h-[40vh]">
        <img className="" src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
