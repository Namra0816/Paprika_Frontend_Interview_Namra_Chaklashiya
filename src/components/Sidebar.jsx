import React from 'react';

const Sidebar = () => (
  <aside className="w-1/5 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col items-start p-10 text-base font-semibold text-black border-r-2 border-lightgray-100 border-solid max-md:px-5 max-md:mt-0 max-md:border-r-0 max-md:border-b-2 max-md:flex max-md:flex-row max-md:justify-around max-md:text-center">
      <button className="hover:bg-lightgray-100 p-3 rounded-xl">Best Matches</button>
      <button className="mt-8 hover:bg-lightgray-100 p-3 rounded-xl max-md:mt-0">Menu</button>
      <button className="mt-8 hover:bg-lightgray-100 p-3 rounded-xl max-md:mt-0">Dietary Info</button>
      <button className="mt-8 hover:bg-lightgray-100 p-3 rounded-xl max-md:mt-0">Reviews</button>
    </div>
  </aside>
);

export default Sidebar;

