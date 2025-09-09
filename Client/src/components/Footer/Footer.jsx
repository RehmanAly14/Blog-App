import React from 'react'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* Left Side - Logo & Description */}
        <div className="md:w-1/3">
          <div className="flex items-center">
           
            <img src={assets.logo} alt="" className="w-32 sm:w-44 " />
          
           
          </div>
          <p className="mt-4 text-gray-500 text-sm ">
            QuickBlog is your space to share ideas, stories, and connect with the world.  
            Simple, fast, and user-friendly blogging for everyone ✨
          </p>
        </div>

        {/* Right Side - 3 Columns */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 md:w-2/3">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600  text-sm">
              <li><a href="/" className="hover:text-violet-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-violet-400 transition">About</a></li>
              <li><a href="/blogs" className="hover:text-violet-400 transition">Blogs</a></li>
              <li><a href="/contact" className="hover:text-violet-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-2 text-gray-600  text-sm">
              <li><a href="/support" className="hover:text-violet-400 transition">Support</a></li>
              <li><a href="/faq" className="hover:text-violet-400 transition">FAQs</a></li>
              <li><a href="/terms" className="hover:text-violet-400 transition">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-violet-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-violet-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-violet-400 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-violet-400 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-violet-400 transition">LinkedIn</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Border & Copyright */}
      <div className='px-8'>
      <div className="border-t  border-gray-300 py-4     text-center text-sm text-gray-400">
        © {new Date().getFullYear()} QuickBlog Sherry. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
