import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsBasket2 } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [NavToggle, setNavToggle] = useState(false);

  return (
    <div>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-6 px-4 md:px-8">
          {/* Logo */}
          <div className="logo">
            <img src="../images/logo.png" alt="logo" className="w-24 md:w-32" />
          </div>

          {/* Navigation Items for Larger Screens */}
          <div className="hidden md:flex gap-4">
            <a
              href="#"
              className="font-saira text-xl font-medium leading-6 text-green flex justify-center items-center gap-1"
            >
              Home <MdOutlineKeyboardArrowDown />
            </a>
            <a
              href="#"
              className="font-saira text-xl font-medium leading-6 text-black flex justify-center items-center gap-1"
            >
              Course <MdOutlineKeyboardArrowDown />
            </a>
            <a
              href="#"
              className="font-saira text-xl font-medium leading-6 text-black flex justify-center items-center gap-1"
            >
              Blog <MdOutlineKeyboardArrowDown />
            </a>
            <a
              href="#"
              className="font-saira text-xl font-medium leading-6 text-black flex justify-center items-center gap-1"
            >
              Shop <MdOutlineKeyboardArrowDown />
            </a>
            <a
              href="#"
              className="font-saira text-xl font-medium leading-6 text-black flex justify-center items-center gap-1"
            >
              Pages <MdOutlineKeyboardArrowDown />
            </a>
            <a
              href="#"
              className="font-saira text-xl font-medium leading-6 text-black flex justify-center items-center gap-1"
            >
              Events <MdOutlineKeyboardArrowDown />
            </a>
          </div>

          {/* Icons for Larger Screens */}
          <div className="hidden md:flex justify-center items-center gap-4">
            <a href="#" className="text-2xl font-medium text-black">
              <BsBasket2 />
            </a>
            <a href="#" className="text-2xl font-medium text-black">
              <IoPersonCircleOutline />
            </a>
            <a href="#" className="text-2xl font-medium text-black">
              <CiSearch />
            </a>
          </div>

          {/* Login and Sign-Up for Larger Screens */}
          <div className="hidden md:flex justify-center items-center gap-6">
            <a href="#" className="text-xl font-medium leading-9">
              Login
            </a>
            <a
              href="#"
              className="text-xl font-medium text-white leading-5 bg-btn-gradient px-6 py-4 rounded-lg"
            >
              Sign Up
            </a>
          </div>

          {/* Navbar Toggle Button*/}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-2xl text-black focus:outline-none"
              onClick={() => setNavToggle(!NavToggle)}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Toggle Menu */}
        {NavToggle && (
          <div className="md:hidden bg-white shadow-lg rounded-lg py-4 px-6">
            {/* Navigation Links */}
            <a
              href="#"
              className="block py-2 font-saira text-lg font-medium text-green"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 font-saira text-lg font-medium text-black"
            >
              Course
            </a>
            <a
              href="#"
              className="block py-2 font-saira text-lg font-medium text-black"
            >
              Blog
            </a>
            <a
              href="#"
              className="block py-2 font-saira text-lg font-medium text-black"
            >
              Shop
            </a>
            <a
              href="#"
              className="block py-2 font-saira text-lg font-medium text-black"
            >
              Pages
            </a>
            <a
              href="#"
              className="block py-2 font-saira text-lg font-medium text-black"
            >
              Events
            </a>

            {/* Divider */}
            <hr className="my-4" />

            {/* Icons */}
            <div className="flex justify-around py-2">
              <a href="#" className="text-2xl font-medium text-black">
                <BsBasket2 />
              </a>
              <a href="#" className="text-2xl font-medium text-black">
                <IoPersonCircleOutline />
              </a>
              <a href="#" className="text-2xl font-medium text-black">
                <CiSearch />
              </a>
            </div>

            {/* Login and Sign-Up */}
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="#"
                className="text-lg font-medium text-center text-black"
              >
                Login
              </a>
              <a
                href="#"
                className="text-lg font-medium text-center text-white bg-btn-gradient px-6 py-3 rounded-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
