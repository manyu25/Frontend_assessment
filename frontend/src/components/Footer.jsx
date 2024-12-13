import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-2">About SaiFashionZone</h3>
          <p className="text-sm">
            SaiFashionZone by Raiba brings you the finest collection of sarees, girls' wear, boys' wear, and ganzy clothes. Elevate your style with our unique designs!
          </p>
        </div>

         {/* we can add various social media links here, for now i have added random links along with random contact and address information */}
      
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-sm">
            Address: 123 Fashion Street, Mumbai, India
          </p>
          <p className="text-sm">Email: support@saifashionzone.com</p>
          <p className="text-sm">Phone: +91-999XXXXXXX</p>
        </div>

       
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-white">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>

     
      <div className="text-center text-sm mt-4 border-t border-pink-300 pt-4">
        © 2024 SaiFashionZone by Raiba. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
