import React from 'react'
import { FaCarSide, FaGift, FaCrown } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";

const featuresData = [
  {
    icon: <FaCarSide />, 
    title: "Free Shipping" ,
    info: "On all orders over $75.00",
  },
  {
    icon: <FaGift />,
    title: "Money Back",
    info: "30 days money back guarantee",
  },
  {
    icon: <FaCrown />,
    title: "Friendly Support",
    info: "Team always ready for you",
  },
  {
    icon: <CiCreditCard1 />,
    title: "Free Shipping",
    info: "On all orders over $75.00",
  },
];

function Features() {
  return (
 <div className="container flex justify-between items-center p-4">
  {featuresData.map(({icon, title, info }, index ) => (
    <div key={index} className="flex items-center my-6">
      <span className="text-[50px] mr-4 text-[#121212BF]">{icon}</span>
      <div className="flex flex-col gap-2"> 
        <h3 className="text-[16px] font-bold uppercase text-[#121212]">{title}</h3>
        <p className="text-[15px] text-[#121212BF]">{info}</p>
      </div>
     </div>
  ))}
</div>
  );
}

export default Features;