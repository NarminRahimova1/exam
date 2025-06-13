import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const headerClass = "font-bold text-[16px] mb-3";
const ulClass = "text-[14px] text-[#121212BF] font-semibold space-y-4";

function Footer() {
  return (
    <footer className="bg-[#e6f2f2] py-10 ">
      <div className="container grid grid-cols-4 gap-8">
        <div>
          <h2 className={headerClass}>Contact Info</h2>
          <ul className={ulClass}>
            <li><a href="">70 Washington Square South, New York, NY 10012, United States</a></li>
            <li><a href="">Email: info@fashionshop.com</a></li>
            <li><a href="">Phone: (212) 555-1234</a></li>
          </ul>
        </div>
        <div>
          <h2 className={headerClass}>Our Store</h2>
          <ul className={ulClass}>
            <li><a href="">Full Grooming</a></li>
            <li><a href="">Bath and Dry</a></li>
            <li><a href="">Styling</a></li>
            <li><a href="">Medical Bath</a></li>
          </ul>
        </div>
        <div>
          <h2 className={headerClass}>Useful Links</h2>
          <ul className={ulClass}>
            <li><a href="">Login</a></li>
            <li><a href="">My Account</a></li>
            <li><a href="">Wishlist</a></li>
            <li><a href="">Checkout</a></li>
          </ul>
        </div>
        <div>
          <h2 className={headerClass}>Sign up for Email</h2>
          <p className="text-[14px] text-[#121212BF] mb-4 font-semibold">
            Subscribe to our newsletter to receive news on update.
          </p>
          <form className="flex items-center border border-[#121212BF] rounded w-full py-1">
            <span className="px-3 text-[#121212BF]"><FaEnvelope /></span>
            <input
              type="email"
              placeholder="Enter your email"
              className=" px-2 py-2 outline-none text-[14px]"
            />
            <button className="bg-black text-white p-2  text-[12px] font-semibold transition uppercase">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center">
        <div className="flex justify-between items-center flex-col md:flex-row gap-4 px-4">
          <p className="text-[#121212BF] text-[14px] font-semibold">
            &copy; 2025, Rivon Shopify Theme.
          </p>
          <div className="flex gap-2 items-center">
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;