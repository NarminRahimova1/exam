import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";
const socialLinks = [
  { icon: <FaFacebookF />, href: "#", hoverColor: "hover:text-blue-700" },
  { icon: <FaInstagram />, href: "#", hoverColor: "hover:text-pink-500" },
  { icon: <FaYoutube />, href: "#", hoverColor: "hover:text-red-700" },
  { icon: <FaTwitter />, href: "#", hoverColor: "hover:text-blue-400" },
  { icon: <FaPinterest />, href: "#", hoverColor: "hover:text-red-500" },
];
function Topbar() {
  return (
     <div className="topbar bg-[#090b0a] text-[#ffffffbf] text-[15px] p-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaPhoneVolume />
          <a href="#" className="">+0123456789</a>
          <CgMail />
          <a href="#">Digizen@domain.com</a>
        </div>
        <p>Free Delivery on <b>orders</b> over $260</p>
        <div className="flex items-center gap-2">
          <ul className="flex gap-2 text-white">
            <li><a href="">AZN</a></li>
            <li><a href="">English</a></li>
          </ul>
          <div className="flex gap-2">
            {socialLinks.map((item, index) => (
              <a key={index} href={item.href} 
              className={`${item.hoverColor} duration-300 transition-colors text-[18px]`}>{item.icon}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;