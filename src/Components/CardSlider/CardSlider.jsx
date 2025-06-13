import React from 'react'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { nanoid } from 'nanoid';
import card1 from '../../images/card1.avif'
import card2 from '../../images/card2.avif'
import card3 from '../../images/card3.webp'
import { Rate } from 'antd';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
  const cards =[
    {
      id: nanoid(),
      img: card1,
      name: "Smart Home Assistant",
      rating: 5,
      description: "Thanks guys, keep up the good work! Great job, I will definitely be ordering again! Thanks guys, keep up the good work! Garden was worth a fortune to my company.",
      user: "Michael L.",
      location: "London, UK"
    },
    {
      id: nanoid(),
      img: card2,
      name: "Smart Home Assistant",
      rating: 5,
      description: "Fringilla nec adipiscing eu purus pellentesque adipiscing neque odio ac tincidunt. Diam platea felis leo nunc. Pharetra fermentum neque. lorem text more",
      user: "Emily.T",
      location: "Sydney, Australia"
    },
    {
      id: nanoid(),
      img: card3,
      name: "Smart Home Assistant",
      rating: 5,
      description: "Thanks guys, keep up the good work! Great job, I will definitely be ordering again! Thanks guys, keep up the good work! Garden was worth a fortune to my company.",
      user: "Willie Bradley.",
      location: "/ Reporter"
    },
]

function CardSlider() {
  return (
     <div className="container relative group">
   <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={2}
      spaceBetween={30}
      navigation ={{
         nextEl:'.next-btn',
         prevEl:'.prev-btn'
      }}
    
      loop={true}
    >
      {cards.map(({ id, img, name, rating, description, user, location }) => (
        <SwiperSlide key={id}>
         
          <div className=" bg-[#f3f3f3] max-w-[800px] flex items-center rounded-lg justify-center flex-col gap-2 p-5">
            <img src={img} alt={name} className=" w-[70px] h-[70px] object-cover" />
            <h2 className="text-[17px] text-[#121212E6]">{name}</h2>
            <Rate disabled defaultValue={rating} allowHalf style={{fontSize:'15px'}}/>
            <p className="text-[#121212E6] text-[17px] leading-[1.8]">"{description}"</p>
            <h4 className="text-[#121212E6] font-bold">{user}</h4>
            <h6 className="text-[#12121280] font-[14px]">{location}</h6>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <button className="prev-btn absolute w-[35px] h-[35px] top-1/2 -translate-y-1/2 left-[5px]  bg-white text-black p-2 rounded-full border border-gray-300 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <FaChevronLeft /> </button>
      <button className="next-btn absolute w-[35px] h-[35px] top-1/2 -translate-y-1/2 right-[5px] bg-white text-black p-2 rounded-full border border-gray-300 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><FaChevronRight /> </button>
    </div>
    
  )
}

export default CardSlider