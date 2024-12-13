import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { FaPhoneAlt } from "react-icons/fa";


import sareesImage from "../assets/saree.jpeg";
import girlsWearImage from "../assets/girls_wear.jpeg";
import boysWearImage from "../assets/boys_wear.jpg";
import ganzyImage from "../assets/ganzy.jpg";
import advertisementImage from "../assets/Advertisement_image.jpg"; 

const Home = () => {
  const categories = [
    {
      title: "Sarees",
      image: sareesImage,
      description: "Elegant and traditional sarees for every occasion.",
      price: 1499,
    },
    {
      title: "Girls' Wear",
      image: girlsWearImage,
      description: "Stylish and comfortable clothing for girls.",
      price: 999,
    },
    {
      title: "Boys' Wear",
      image: boysWearImage,
      description: "Trendy outfits for boys to rock every season.",
      price: 899,
    },
    {
      title: "Ganzy Clothes",
      image: ganzyImage,
      description: "Premium ganzy wear for casual and formal looks.",
      price: 799,
    },
  ];


//   The products will be displayed randomly here by me, here we can modify it according to users requirement(like what all products user wants to display on its site)...



  const customerReviews = [
    "Amazing quality! Highly recommend SaiFashionZone.",
    "Loved the sarees! Perfect for special occasions.",
    "Affordable and trendy clothing for my kids!",
    "The ganzy clothes are so comfortable and stylish!",
    "Fast delivery and excellent customer service.",
  ];

  
  const [repeatedCategories, setRepeatedCategories] = useState([]);

  useEffect(() => {
    const generateRandomProducts = () => {
      return Array.from({ length: 12 }, () => {
        return categories[Math.floor(Math.random() * categories.length)];
      });
    };
    setRepeatedCategories(generateRandomProducts());
  }, []);

  
  const newArrivals = [
    { name: "Silk Saree", price: 1999, discount: "10%", image: sareesImage },
    { name: "Designer Lehenga", price: 2999, discount: "15%", image: girlsWearImage },
    { name: "Boys' Kurta Set", price: 1299, discount: "20%", image: boysWearImage },
    { name: "Ganzy Blazer", price: 1799, discount: "5%", image: ganzyImage },
    { name: "Party Wear Dress", price: 2499, discount: "25%", image: girlsWearImage },
  ];

  return (
    <div className="p-6">
     
      <div
        className="bg-cover bg-center text-white text-center p-12 rounded-lg mb-8"
        style={{ backgroundImage: `url(${advertisementImage})` }}
      >
        <h2 className="text-4xl font-bold mb-4">Christmas & New Year Sale!</h2>
        <p className="text-lg">
          Up to <span className="font-bold">50% OFF</span> on all categories. Shop now and make this holiday season special!
        </p>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-center">Our Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {repeatedCategories.map((category, index) => (
          <ProductCard key={index} {...category} />
        ))}
      </div>

      
      <h2 className="text-2xl font-bold mb-4 text-center">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Wedding", image: sareesImage },
          { title: "Birthdays", image: girlsWearImage },
          { title: "Vacations", image: boysWearImage },
          { title: "Festivals", image: ganzyImage },
        ].map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-32 w-full object-contain rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{category.title}</h3>
          </div>
        ))}
      </div>

      
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>
      <div className="space-y-6 mb-8 flex justify-center">
      {customerReviews.map((review, index) => (
      <div
      key={index}
      className="bg-gray-100 shadow-lg p-6 rounded-xl flex items-center justify-center w-64 h-64 text-center"
      >
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm italic">{`"${review}"`}</p>
        <span className="block text-xs text-gray-500 mt-4">- Happy Customer</span>
      </div>
    </div>
      ))}
   </div>


      
      <h2 className="text-2xl font-bold mb-4 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivals.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-32 w-full object-contain rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              Price: ₹{product.price} (Discount: {product.discount})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Home;
