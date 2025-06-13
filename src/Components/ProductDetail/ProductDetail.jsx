import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp, FaFacebook, FaTwitter, FaShare } from 'react-icons/fa'
function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [showReturn, setShowReturn] = useState(false);

  const colors = ['#000000', '#800000']; 

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?limit=4')
      .then((res) => {
        setProducts(res.data);
        if (res.data.length > 0) {
          setSelectedImage(res.data[0].image);
        }
      })
      .catch((err) => console.error('Xəta oldu:', err));
  }, []);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const increaseQuantity = () => {
    if (quantity < 50) setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="container p-6 flex flex-col gap-10 md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="flex items-center justify-center border rounded-lg mb-4">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected product"
              className="max-w-full h-[600px] object-contain"
            />
          )}
        </div>
        <div className="flex gap-4">
          {products.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              onClick={() => handleImageClick(item.image)}
              className={`w-20 h-20 object-contain border rounded cursor-pointer hover:border-blue-500 ${
                selectedImage === item.image ? 'border-blue-500' : ''
              }`}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Fashion</h2>
        <h3 className="text-xl mt-2">Rainbow Gradient Unisex T-Shirt</h3>
        <p className="text-2xl font-semibold mb-4"> ₼1,127.00  </p>
          <p className="text-sm font-normal text-gray-600 mt-3">Tax included.</p>
        <div className="mb-4">
          <p className="font-semibold mb-2">Size: S</p>
          <div className="flex gap-2">
            {['S', 'M', 'L'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-4 py-2 transition ${
                  selectedSize === size ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
                }`} >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">Color: Rainbow</p>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                  selectedColor === color ? 'border-black' : 'border-gray-300'
                }`}></div>
            ))}
          </div>
        </div>
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center border rounded overflow-hidden">
            <button onClick={decreaseQuantity} className="px-4 py-2 hover:bg-gray-100">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={increaseQuantity} className="px-4 py-2 hover:bg-gray-100">+</button>
          </div>
          <button className="border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition ml-2"> Add to cart </button>
        </div>
        <button className="w-full bg-black text-white px-6 py-3 rounded mb-6">Buy it now </button>
        <div className="mb-6">
          <div
            className="border-t border-b border-gray-200 py-3 cursor-pointer flex justify-between items-center"
            onClick={() => setShowDescription(!showDescription)}>
            <span className="font-semibold">Description</span>
            {showDescription ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showDescription && (
            <p className="mt-2 text-gray-700">
              This trendy unisex t-shirt features a vibrant rainbow gradient design, adding a pop of color to any outfit. Made with high-quality materials, it is both comfortable and stylish. Perfect for expressing your unique style with.
            </p>
          )}
          <div
            className="border-b py-3 cursor-pointer border-gray-200 flex justify-between items-center mt-2"
            onClick={() => setShowReturn(!showReturn)} >
            <span className="font-semibold">Return Policy</span>
            {showReturn ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {showReturn && (
            <p className="mt-2 text-gray-700">
              Shipping policy for our store
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
              1-2 business days (Typically by end of day)
              30 days money back guaranty
              24/7 live support
              odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore
              te feugait nulla facilisi. </p>
          )}
        </div>
        <div className="flex gap-4">
           <a href="#" className="flex items-center gap-2 border p-2"> <FaFacebook /> Facebook</a>
          <a href="#" className="flex items-center gap-2 border p-2"> <FaTwitter/> Twitter</a>
          <a href="#" className="flex items-center gap-2 border p-2"> <FaShare/>  Share</a>
        </div>
      </div>
    </div>
  );
}


export default ProductDetail