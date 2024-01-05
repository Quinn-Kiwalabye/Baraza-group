import React from "react";
import logo from "../assets/logo.jpg";

const navBar = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4">
      <img src={logo} className="w-28 object-contain relative" alt="logo" />
      <nav className="top-0 right-0 w-full px-4 py-2 flex justify-between items-center before:content-[''] before:absolute before:top-[0] before:left-[0] before:w-full before:h-full">
        <div className="flex items-center flex-shrink-0 text-white mr-6"></div>

        <div>
          <div className="text-align relative inline-flex items-center space-x-4">
            <a
              href="#responsive-header"
              className="transition duration-300 ease-in-out text-slate-600 text-[18px] no-underline ml-[35px] hover:text-green-300"
            >
              About
            </a>
            <a
              href="#responsive-header"
              className="transition duration-300 ease-in-out text-slate-600 text-[18px] no-underline ml-[35px] hover:text-green-300"
            >
              Contact
            </a>
            <a
              href="#responsive-header"
              className="transition duration-300 ease-in-out text-slate-600 text-[18px] no-underline ml-[35px] hover:text-green-300"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navBar;
