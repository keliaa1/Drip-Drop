import React from "react";


const Newsletter = () => {
  return (
    <div className=" w-[65%] h-[40vh] flex flex-col align-center justify-center m-auto mb-[150px]  bg-gradient-to-br from-pink-200 to-white p-10 rounded-2xl">
      <h1 className="text-2xl font-bold pb-5 text-center ">Subscribe to our Newsletter</h1>
      <p className="text-center pb-5">Get weekly offers and stay updated</p>
      <div className="flex align-center justify-between bg-white w-[730px] h-[70px] rounded-4xl border-1[#e3e3e3]">
        <input className="w-[400px] ml-[30px] border-0 outline-0 text-[#616161] px-4" type="email" placeholder="email" />
        <button className="w-[200px] h-[70px] rounded-4xl bg-black text-white">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter;
