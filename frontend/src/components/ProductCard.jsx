import React from "react";

const ProductCard = ({ image, title, description, price, addToCart }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
        <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
      </div>

      
      <div className="p-4 text-center">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <p className="text-green-600 font-semibold mt-2">₹{price}</p>

       
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addToCart({ image, title, description, price })} 
        >
          Add to Cart
        </button>

        
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
