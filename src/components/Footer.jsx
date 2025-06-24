import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import Icon from "../assets/Icon.png";

const Footer = () => {
  return (
    <footer className="bg-neutralDGrey text-white py-12">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Logo + Copy + Icons */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
          <img src={Icon} alt="" className="w-10 inline-block items-center"></img>
          <h3 className="text-2xl font-bold text-white">NEXCENT</h3>
          </div>
          <p className="text-sm text-gray-400">Copyright © 2020 Nexcent Ltd.</p>
          <p className="text-sm text-gray-400">All rights reserved</p>
          <div className="flex space-x-4 pt-2">
            <FaFacebookF className="hover:text-brandPrimary cursor-pointer" />
            <FaInstagram className="hover:text-brandPrimary cursor-pointer" />
            <FaTwitter className="hover:text-brandPrimary cursor-pointer" />
            <FaGithub className="hover:text-brandPrimary cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Column 3: Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Help center</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay up to date</h4>
          <div className="flex items-center bg-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="name@flowbite.com"
              className="w-full px-4 py-2 text-black focus:outline-none"
            />
            <button className="bg-brandPrimary text-white px-4 py-2 hover:bg-green-700 transition">
              ➤
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
