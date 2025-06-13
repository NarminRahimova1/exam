import React from 'react'
import banner1 from '../../images/banner1.webp'
import banner2 from '../../images/banner2.webp'
import { nanoid } from 'nanoid';
import Marquee from 'react-fast-marquee';
import { IoIosStar } from "react-icons/io";

const topBanners = [
  {
    id: nanoid(),
    img: banner1,
    title: 'Top Collections',
    subtitle: 'Top Trends Style',
    btnText: 'Shop Now',
  },
  {
    id: nanoid(),
    img: banner2,
    title: 'Premium-Online Exclusive',
    subtitle: 'Here Your Style',
    btnText: 'Shop Now',
  },
];

function TopTrends() {
  return (
    <>
      <div className="container mt-5">
        <div className="flex gap-8">
          {topBanners.map(({ id, img, title, subtitle, btnText }) => (
            <div key={id} className="relative h-full rounded-lg overflow-hidden w-1/2">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-[50px] w-full h-full flex items-center pl-8">
                <div className="w-[300px]">
                  <h3 className="text-[16px] uppercase text-[#121212BF] mb-2">{title}</h3>
                  <p className="text-[35px] font-bold mb-4">{subtitle}</p>
                  <button className=" text-[#121212BF] text-[17px] underline">{btnText} </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 border-y border-gray-200 py-4">
        <Marquee speed={50} pauseOnHover={true} gradient={false} className="uppercase text-[30px]">
          <div className="flex items-center whitespace-nowrap gap-x-5 ">
            <span>Sign up and get 10% off your first order</span>
            <IoIosStar className=""/>
            <span>Free delivery for orders over $120</span>
            <IoIosStar className=""/>
          </div>
        </Marquee>
      </div>
    </>

  )
  
}

export default TopTrends