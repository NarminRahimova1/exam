import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


function Topbar() {
  return (
   <div className="topbar flex items-center justify-between p-2 bg-[#090b0a] text-gray-300">
    <div className="container">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FaPhoneVolume />
        <a href="#" className="">+0123456789</a>
        <CgMail />
        <a href="mailto:digizen@domain.com" className="">Digizen@domain.com</a>
      </div>
      
         <p className="">Free Delivery on orders over $260</p>
       <div className="flex items-center gap-2">
        <ul className="flex gap-2">
            <li><a href="">AZN</a></li>
            <li><a href="">English</a></li>
        </ul>
        <a href="">
        <FaFacebookF />
        </a>
        <a href="">
            <FaInstagram />
        </a>
        <a href="">
        <FaYoutube />
        </a>
        <a href="">
            <FaTwitter />
        </a>
        <a href="">
            <FaPinterest />
        </a>
       </div>
    </div>
  </div>
</div>
  )
}

export default Topbar;