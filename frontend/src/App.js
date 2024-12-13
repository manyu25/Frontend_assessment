import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Cart from "./components/Cart"; 

function App() {
  const [cartItems, setCartItems] = useState([]); 

  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Home addToCart={addToCart} /> 
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
