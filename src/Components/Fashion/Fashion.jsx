import React from 'react'
import fashionImg from '../../images/fashion.webp'

function Fashion() {
  return (
     <div className="container w-full flex gap-x-10 items-center py-9">
  <div className="w-1/2">
    <img src={fashionImg} alt="Fashion Look" className="w-full object-cover" />
  </div>
  <div className=" w-1/2 max-w-[500px] space-y-5">
    <h2 className="font-semibold text-[48px]">Shop the look</h2>
    <p className="text-[#121212BF] text-[16px] leading-[2.5]"> Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both. </p>
    <button className="px-6 py-3 bg-black text-white rounded uppercase text-[15px] cursor-pointer"> Discover Now </button>
  </div>
</div>
  );
}

export default Fashion;