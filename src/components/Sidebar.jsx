import React from 'react';

const Sidebar = () => (
  <aside className="w-1/5 max-md:ml-0 max-md:w-full">
     <div className="p-10 text-base font-semibold text-black border-r-2 border-gray-200 border-solid max-md:px-5 max-md:mt-1 max-md:border-r-0 max-md:border-b-2">
        <div>Best Matches</div>
        <div className="mt-10">Menu</div>
        <div className="mt-10">Dietary Info</div>
        <div className="mt-10">Reviews</div>
      </div>
  </aside>
);

export default Sidebar;