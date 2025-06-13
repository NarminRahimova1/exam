import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaPlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function NewArrivals() {
     const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Xəta oldu:", err));
  }, []);
  return (
   
          <div className="container px-4 py-12">
         <h2 className="text-3xl font-semibold text-center mb-2">
        New Arrivals
         </h2>
         <p className="text-center text-gray-600 mb-8">
         The best quality products are waiting for you & choose it now.
         </p>
   
         <div className="grid grid-cols-4 gap-6">
           {products.slice(8, 12).map((item) => (
             <div key={item.id} className="flex flex-col cursor-pointer">
               <div className="relative bg-[#f6f6f6] rounded-lg p-4 h-[300px] flex items-center justify-center group">
                 <img
                   src={item.image}
                   alt={item.title}
                   className="h-full object-contain"
                 />
                 <div className="absolute bottom-5  flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <button className="bg-white rounded-full shadow hover:bg-gray-100">
                     <FaPlus className="text-blue-500 p-2 text-[35px] cursor-pointer" />
                   </button>
                   <button className="bg-white  rounded-full shadow hover:bg-gray-100">
                     <FaEye className="text-gray-700 p-2 text-[35px] cursor-pointer" />
                   </button>
                   <button className="bg-white rounded-full shadow hover:bg-gray-100">
                     <FaHeart className="text-red-500 text-[35px] p-2 cursor-pointer" />
                   </button>
                 </div>
               </div>
   
               <div className="mt-4 text-center">
                 <h3 className="text-[16px] font-semibold">{item.title}</h3>
                 <p className="text-gray-600">${item.price}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
  )
}

export default NewArrivals