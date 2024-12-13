import React from 'react';

const Navbar = ({ setSearchTerm, setSelectedCategory }) => {
  return (
    <nav className="bg-pink-300 shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-pink-600">SaiFashionZone</div>
      <ul className="flex space-x-6 text-gray-600">
        <li className="hover:text-gray-800 cursor-pointer">Home</li>
        <li className="hover:text-gray-800 cursor-pointer">Products</li>
        <li className="hover:text-gray-800 cursor-pointer">About</li>
        <li className="hover:text-gray-800 cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 rounded"
          onChange={(e) => setSearchTerm(e.target.value)} 
        />

       
        <select
          className="p-2 rounded"
          onChange={(e) => setSelectedCategory(e.target.value)} 
        >
          <option value="">All Categories</option>
          <option value="Sarees">Sarees</option>
          <option value="Boys Wear">Boys Wear</option>
          <option value="Girls Wear">Girls Wear</option>
          <option value="Ganzy Clothes">Ganzy Clothes</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
