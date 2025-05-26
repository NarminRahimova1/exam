import React from 'react'
import { nanoid } from 'nanoid';
import { FaCarSide } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
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
 <div className="container flex  items-center justify-between mb-5">
  {featuresData.map(({icon, title, info }) => (
    <div key={nanoid()} className="flex items-center p-4 rounded">
      <p className="text-[50px] mr-4 text-gray-600">{icon}</p>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{info}</p>
      </div>
    </div>
  ))}
</div>
  )
}

export default Features;