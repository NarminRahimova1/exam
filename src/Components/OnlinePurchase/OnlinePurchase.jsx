import React from 'react'
import online1 from '../../images/online1.webp'
import online2 from '../../images/online2.webp'
import online3 from '../../images/online3.avif'
import { HiMiniArrowUpRight } from "react-icons/hi2";

function OnlinePurchase() {
  return (
     <div className="flex flex-col w-full container rounded-lg bg-[#f3f3f3] flex-row items-center justify-between relative">
      <div className=" flex w-[50%] flex-col items-start ml-10 ">
        <h2 className="text-[16px] text-[#121212BF]">For Online Purchase</h2>
        <p className="text-[60px] font-bold mb-4">50% OFF</p>
         <button className="px-10 py-3 rounded border hover:bg-black hover:text-white flex gap-[5px] items-center cursor-pointer"> View Collections <HiMiniArrowUpRight className="text-[20px]" />
           </button>
        <img src={online1} alt="Faison" className="" />
      </div>
      <div className=" rounded-full w-[50%]">
        <img src={online2} alt="Center" className="" />
      </div>
      <div className="absolute left-[47%] top-[10%]">
        <img src={online3} alt="Right side"className=""/>
      </div>
    </div>
  )
}

export default OnlinePurchase