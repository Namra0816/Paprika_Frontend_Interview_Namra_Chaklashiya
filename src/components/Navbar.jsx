import React, { useState } from 'react';
import logo from '../assets/logo.png';
import searchIcon from '../assets/searchIcon.png';
import locationIcon from '../assets/locationIcon.png';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  // State to manage the menu open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Renders the desktop version of the navbar
  const renderDesktopMenu = () => (
    <div className="hidden lg:flex gap-6">
      <div className="flex flex-col items-center w-1/5">
        <button>
          <img loading="lazy" src={logo} className="shrink-0 w-[171px]" alt="Logo" />
        </button>
      </div>
      <div className="w-3/5">
        <div className="text-lightgray-300">
          <div className="p-3 bg-white rounded-xl shadow-lg w-full">
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-4 w-4/5">
                <img loading="lazy" src={searchIcon} alt="Search Icon" />
                <input
                  type="text"
                  placeholder='"Gluten Free Restaurants"'
                  className="w-full outline-none placeholder-lightgray-300"
                />
              </div>
              <div className="h-6 box-border border-r-[1px]" />
              <div className="flex items-center gap-4 w-1/2">
                <img loading="lazy" src={locationIcon} alt="Location Icon" />
                <input
                  type="text"
                  placeholder='2374 Willow St. Ave'
                  className="w-full outline-none placeholder-lightgray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 lg:ml-12">
        <div className="flex gap-5 justify-center text-xl font-bold text-rose-dark">
          <button className="px-6 py-4 hover:bg-rose-light rounded-[60px]">Sign Up</button>
          <button className="px-6 py-4 hover:bg-rose-light rounded-[60px]">Log In</button>
        </div>
      </div>
    </div>
  );

  // Renders the mobile version of the navbar
  const renderMobileMenu = () => (
    <div className="lg:hidden flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <button>
          <img loading="lazy" src={logo} className="shrink-0 w-[171px]" alt="Logo" />
        </button>
        <LoginIcon
          className="cursor-pointer text-red-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-5 text-xl font-bold text-rose-dark">
          <button className="px-6 py-4 hover:bg-rose-light rounded-[60px]">Sign Up</button>
          <button className="px-6 py-4 hover:bg-rose-light rounded-[60px]">Log In</button>
        </div>
      )}
      <div className="text-lightgray-300 mt-4 w-full">
        <div className="p-3 bg-white rounded-xl shadow-lg w-full">
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-4 w-full">
              <img loading="lazy" src={searchIcon} alt="Search Icon" />
              <input
                type="text"
                placeholder='"Gluten Free Restaurants"'
                className="w-full outline-none placeholder-lightgray-300"
              />
            </div>
            <div className="h-6 box-border border-r-[1px]" />
            <div className="flex items-center gap-4 w-full">
              <img loading="lazy" src={locationIcon} alt="Location Icon" />
              <input
                  type="text"
                  placeholder='2374 Willow St. Ave'
                  className="w-full outline-none placeholder-lightgray-300"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="p-10 w-full max-md:px-5 font-sans">
      {renderDesktopMenu()}
      {renderMobileMenu()}
    </header>
  );
};

export default Navbar;
