import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import hero1 from '../../images/hero-1.webp';
import hero2 from '../../images/hero-2.webp';




function Hero() {
  return (
    <div className="container bg-[#c1dcd7] rounded-lg overflow-hidden relative">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation={{
      nextEl:'.next-el',
      prevEl:'.prev-el'
    }

    }
    autoplay={{ delay: 4000 }}
    loop={true} >
   
    <SwiperSlide>
      <div className="flex items-center h-[80vh]">
        <div className="w-1/2 p-6">
        <h3 className="mb-5 text-2xl">Elegance is elimination</h3>
        <h1 className="text-4xl font-bold mb-4">Stay Ahead of The Trends</h1>
        <p className="text-xl mb-2">Tell your brand's story through images</p>
          <button className="bg-black text-white px-6 py-3 rounded"> Collections
     </button>
        </div>
        <div className="w-1/2 overflow-hidden rounded-lg">
          <img
            src={hero2}
            alt="Slide 1"
            className="w-full h-full object-cover object-right"/>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="flex items-center h-[80vh]">
        <div className="w-1/2  p-6">
           <h3 className="mb-5 text-2xl">Elegance is elimination</h3>
        <h1 className="text-4xl font-bold mb-4">Stay Ahead of The Trends</h1>
          <p className="text-xl mb-2">Tell your brand's story through images</p>
          <button className="bg-black text-white px-6 py-3 rounded"> Shop Now </button>
        </div>
        <div className="w-1/2 overflow-hidden rounded-lg">
          <img
            src={hero1}
            alt="Slide 2"
            className="w-full h-full object-cover object-right" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  <button className="prev-el absolute w-[50px] h-[50px] top-1/2 left-4  bg-white transform  bg-black text-black p-2 rounded-full z-10">Prev </button>
  <button className="next-el absolute w-[50px] h-[50px] top-1/2 right-4 bg-white transform  bg-black text-black p-2 rounded-full z-10"> Next</button>
</div>    
  )
  
}

export default Hero;


