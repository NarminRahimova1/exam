import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import hero1 from '../../images/hero-1.webp';
import hero2 from '../../images/hero-2.webp';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiMiniArrowUpRight } from "react-icons/hi2";

function Hero() {
  return (
    <div className=" container relative w-full overflow-hidden rounded-lg">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.next-el',
          prevEl: '.prev-el'
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="flex items-center h-[90vh] w-full bg-[#c1dcd7]">
            <div className="w-1/2 p-8 z-20 relative text-left">
              <h3 className="mb-5 text-[22px] text-[#333333] uppercase tracking-[5px]">
                Elegance is elimination
              </h3>
              <h1 className="text-[60px] font-bold mb-5">
                Stay Ahead of The Trends
              </h1>
              <p className="text-[18px] text-[#121212] mb-2">
                Tell your brand's story through images
              </p>
              <button className="bg-black mt-6 text-white px-6 py-3 rounded flex gap-[8px] items-center cursor-pointer uppercase">
                Collections <HiMiniArrowUpRight />
              </button>
            </div>
            <div className="w-1/2 h-full relative">
              <img
                src={hero2}
                alt="Slide 1"
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center h-[90vh] w-full bg-[#c1dcd7]">
            <div className="w-1/2 p-8 z-20 relative text-left">
              <h3 className="mb-5 uppercase text-[22px] text-[#333333] tracking-[5px]">
                Elegance is elimination
              </h3>
              <h1 className="text-[60px] font-bold mb-4">
                Stay Ahead of The Trends
              </h1>
              <p className="text-[18px] text-[#121212] mb-2">
                Tell your brand's story through images
              </p>
              <button className="bg-black text-white px-6 py-3 rounded flex gap-[8px] mt-6 items-center cursor-pointer">
                Shop Now <HiMiniArrowUpRight />
              </button>
            </div>

            <div className="w-1/2 h-full relative">
              <img
                src={hero1}
                alt="Slide 2"
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="prev-el absolute w-[50px] h-[50px] top-1/2 -translate-y-1/2 left-4 bg-white text-black p-2 rounded-full z-30 flex items-center justify-center">
        <FaChevronLeft className="text-[15px]" />
      </button>
      <button className="next-el absolute w-[50px] h-[50px] top-1/2 -translate-y-1/2 right-4 bg-white text-black p-2 rounded-full z-30 flex items-center justify-center">
        <FaChevronRight className="text-[15px]" />
      </button>
    </div>
  );
}

export default Hero;