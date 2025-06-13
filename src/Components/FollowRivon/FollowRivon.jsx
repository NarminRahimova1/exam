import React from 'react'
import follow1 from '../../images/follow1.webp'
import follow2 from '../../images/follow2.webp'
import follow3 from '../../images/follow3.webp'
import follow4 from '../../images/follow4.webp'
import follow5 from '../../images/follow5.webp'
import { nanoid } from 'nanoid'
import { FaInstagram } from "react-icons/fa";
const followImages = [
  { id: nanoid(), 
    img: follow1 
},
  { id: nanoid(), 
    img: follow2 
},
  { id: nanoid(), 
    img: follow3
},
  { id: nanoid(), 
    img: follow4 
},
  { id: nanoid(), 
    img: follow5
},
 
]

function FollowRivon() {
  return (
    <div className="py-10">
      <div className="text-center mb-6">
        <h2 className="text-[30px] text-[#121212] font-semibold">Follow @Rivon</h2>
        <p className="text-[16px] text-[#121212CC]">
          The best quality products are waiting for you & choose it now.
        </p>
      </div>
      <div className="flex justify-around items-center">
        {followImages.map(({ id, img }) => (
          <div
            key={id}
            className="relative group w-[230px] h-[200px] overflow-hidden" >
            <img
              src={img}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
             <div className="absolute inset-0 flex items-center justify-center">
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 rounded-full w-[70px] h-[70px] flex items-center justify-center">
      <FaInstagram className="text-white text-2xl" />
    </div>
  </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowRivon