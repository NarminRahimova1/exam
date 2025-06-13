import React from 'react'
import fila from "../../images/fila.webp"
import ritter from "../../images/ritter.webp"
import nike from "../../images/nike.webp"
import adidas from "../../images/adidas.webp"
import newholland from "../../images/new-holland.webp"
import puma from "../../images/puma.webp"
import { nanoid } from 'nanoid'

const brandsData = [
  { id: nanoid(), 
    img: fila 
},
  { id: nanoid(), 
    img: ritter 
},
  { id: nanoid(), 
    img: nike 
},
  { id: nanoid(), 
    img: adidas 
},
  { id: nanoid(), 
    img: newholland 
},
  { id: nanoid(),
    img: puma 

  }
]

function Brands() {
  return (
      <div className="flex justify-around items-center my-9 border-y border-gray-300 py-8">
      {brandsData.map(({id, img }) => (
        <img key={id} src={img} alt="brand logo" className="w-[90px]" />
      ))}
    </div>
  );
}

export default Brands;