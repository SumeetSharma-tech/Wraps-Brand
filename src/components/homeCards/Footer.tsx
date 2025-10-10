"use client";

import React from "react";
import Logo from '../../../public/images/LOGO/2ND LOGO GREEN.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] -mt-40 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-4 gap-10">
        {/* Logo and description */}
        <div>
          <div className="flex items-center mb-4">
            <img src={Logo.src} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="ml-3 text-2xl font-bold">Phone Wraps</span>
          </div>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam vitae quam nec ante fringilla vel at erat convallis elit.
          </p>
          <div className="flex space-x-3 mt-4">
  <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/discord-logo.png" alt="Discord" /></a>
  <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" /></a>
  <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" /></a>
  <a href="#"><img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" /></a>
</div>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">What is ico</a></li>
            <li><a href="#" className="hover:text-white">Roadmap</a></li>
            <li><a href="#" className="hover:text-white">Whitepaper</a></li>
            <li><a href="#" className="hover:text-white">Social Network</a></li>
            <li><a href="#" className="hover:text-white">Join Us Now</a></li>
          </ul>
        </div>

        {/* Supports */}
        <div>
          <h3 className="text-white font-semibold mb-4">Supports</h3>
          <ul className="space-y-1 text-sm">
  <li><a href="#" className="py-1 rounded inline-block hover:bg-blue-700">Setting & Privacy</a></li>
  <li><a href="#" className="py-1 rounded inline-block hover:bg-blue-700">Help & Support</a></li>
  <li><a href="#" className="py-1 rounded inline-block hover:bg-blue-700">Terms & Conditions</a></li>
  <li><a href="#" className="py-1 rounded inline-block hover:bg-blue-700">24/7 Supports</a></li>
  <li><a href="#" className="py-1 rounded inline-block hover:bg-blue-700">On Point FAQ</a></li>
</ul>

        </div>

        {/* News & Post */}
        <div>
          <h3 className="text-white font-semibold mb-4">News & Post</h3>
          <div className="space-y-4 text-sm">
            <a href="#" className="flex items-center gap-3 hover:text-white">
              <img src="https://picsum.photos/50?random=1" alt="News 1" className="w-12 h-12 object-cover rounded" />
              <div>
                <p>Laboris nisi aliquip dium exiulyim commo cons...</p>
                <span className="text-gray-500 text-xs">Aug 21 2024</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-white">
              <img src="https://picsum.photos/50?random=2" alt="News 2" className="w-12 h-12 object-cover rounded" />
              <div>
                <p>Expenses as material bre mate insisted buildi...</p>
                <span className="text-gray-500 text-xs">Aug 21 2024</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
