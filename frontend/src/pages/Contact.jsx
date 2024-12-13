import React from "react";

const Contact = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Get in Touch</h3>
          <p>
            <strong>Address:</strong> 123 Fashion Street, Mumbai, India
          </p>
          <p>
            <strong>Email:</strong> support@saifashionzone.com
          </p>
          <p>
            <strong>Phone:</strong> +91-999XXXXXXX
          </p>
          <p>
            Feel free to reach out to us for any queries or support.
          </p>
        </div>

       
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
