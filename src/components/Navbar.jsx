import React from 'react';
import logo from '../assets/logo.png';
import searchIcon from '../assets/searchIcon.png';
import locationIcon from '../assets/locationIcon.png';

const Navbar = () => (
  <header className="p-10 w-full max-md:px-5 font-sans">
    <div className="flex gap-6 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col max-md:items-center w-1/5 max-md:w-full">
        <img loading="lazy" src={logo} className="shrink-0 w-[171px] max-md:mt-1" alt="Logo" />
      </div>
      <div className="w-3/5 max-md:w-full">
        <div className="text-gray-400 max-md:mt-4">
          <div className="p-3 bg-white rounded-xl shadow-lg w-full">
            <div className="flex gap-3">
              <div className="flex items-center gap-4 w-4/5 max-md:w-full">
                <img loading="lazy" src={searchIcon} alt="Search Icon" />
                <span>"Gluten Free Restaurants"</span>
              </div>
              <div className="h-8 box-border border-r-[2px]" />
              <div className="flex items-center gap-4 w-1/2 max-md:w-full">
                <img loading="lazy" src={locationIcon} alt="Location Icon" />
                <span>2374 Willow St. Ave</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 max-md:w-full lg:ml-12 max-md:mt-1">
        <div className="flex gap-5 justify-center text-xl font-bold text-rose-dark max-md:mt-5">
          <span className="my-auto">Sign Up</span>
          <button className="px-12 py-4 bg-rose-light rounded-[60px]">Log In</button>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
