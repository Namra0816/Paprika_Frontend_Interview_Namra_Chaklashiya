import React from 'react';
import RestaurantHeader from './RestaurantHeader';

const MainContent = () => (
  <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col px-6 pt-10 pb-20 bg-white max-md:px-5 max-md:mt-1 max-md:max-w-full">
      <RestaurantHeader />
      <div className="shrink-0 mt-10 h-px border border-solid bg-zinc-300 border-zinc-light max-md:max-w-full" />
    </div>
  </main>
);

export default MainContent;