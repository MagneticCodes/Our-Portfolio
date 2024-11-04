import React, { useEffect, useState } from "react";
import Logo from "../../../assets/logo/logo.png";
// import logo_01 from '../../../'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent py-2 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="h-20">
          <img src={Logo} alt="Logo" className="h-full w-full" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-blue-400 duration-500">Home</a>
          <a href="#" className="text-white hover:text-blue-400 duration-500">Products</a>
          <a href="#" className="text-white hover:text-blue-400 duration-500">About Us</a>
          <a href="#" className="text-white hover:text-blue-400 duration-500">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-blue-400 duration-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-orange-400 duration-500">
            <BsInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-red-500 duration-500">
            <IoLogoYoutube size={20} />
          </a>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
