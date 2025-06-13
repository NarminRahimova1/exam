import React from 'react'
import { IoSearch, IoChevronDown } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <div className="navbar container py-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="https://rivon-demo.myshopify.com/cdn/shop/files/logo-2.png?v=1734254597&width=130"
              alt="Logo" />
          </div>
          <nav>
            <ul className="flex items-center gap-5 text-[16px] font-semibold text-[#121212]">
              <li>
               <Link to="/">Home</Link></li>
              <li className="relative group flex items-center cursor-pointer">
                <Link to="/shop" className="flex items-center gap-1">
                  Shop <IoChevronDown className="translate-y-[2px]" />
                </Link>
                <ul className="absolute left-0 top-full mt-5 w-40 bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100"> Shop1 </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100"> Shop2 </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100"> Shop3</a>
                  </li>
                </ul>
              </li>
              <li className="relative group flex items-center cursor-pointer">
                <Link to="/pages" className="flex items-center gap-1">
                  Pages <IoChevronDown  className="translate-y-[2px]" />
                </Link>
                <ul className="absolute left-0 top-full mt-5 w-40 bg-white shadow-lg  border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <li>
                    <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100"> About Us</Link>
                  </li>
                  <li>
                    <Link to="team" className="block px-4 py-2 hover:bg-gray-100"> Team </Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100"> FAQ </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100"> Wishlist </a>
                  </li>
                </ul>
              </li>
              <li className="relative group flex items-center cursor-pointer">
                <Link to="/blog" className="flex items-center gap-1">
                  Blog <IoChevronDown  className="translate-y-[2px]" />
                </Link>
                <ul className="absolute left-0 top-full mt-5 w-40 bg-white shadow-lg  border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100"> Blog Details </a>
                  </li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        <div className="flex items-center gap-4 text-[23px]">
  <div className="relative">
    <a href="#"><FaRegHeart /></a>
    <span className="absolute -top-2 -right-2 bg-black text-white font-medium text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full">0</span>
  </div>
  <div className="relative">
    <a href="#"><FiShoppingCart /></a>
    <span className="absolute -top-2 -right-2 bg-black  text-white font-medium text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full">0</span>
  </div>
</div>
        </div>
      </div>
   
  );
}

export default Navbar;