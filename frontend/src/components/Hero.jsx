import React from "react";
import bannerImage from "../assets/banner.jpg"; 

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Your Style</h1>
        <p className="text-lg">Explore sarees, girls' wear, boys' wear, and more!</p>
      </div>
    </div>
  );
};

export default Hero;
