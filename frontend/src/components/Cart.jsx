import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-container p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item flex justify-between items-center border-b py-2">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div className="ml-4">
                <h3 className="text-gray-800">{item.title}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeFromCart(index)} 
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      
      {cartItems.length > 0 && (
        <div className="mt-4 text-right">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
