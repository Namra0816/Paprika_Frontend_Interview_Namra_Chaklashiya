import React from 'react';
import verifiedIcon from '../../assets/verifiedIcon.png';
import addItemIllustration from '../../assets/addItemIllustration.png';
import forwardarrow from '../../assets/forwardarrow.png';

const RestaurantHeader = () => (
    <div className="flex gap-12 px-px max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 py-1.5">
          <div className="flex gap-5 pr-2 mr-auto text-3xl font-bold text-stone-700">
            <button className="text-ellipsis text-left">The Daily Grind</button>
            <img loading="lazy" src={verifiedIcon} className="shrink-0 my-auto aspect-square w-[35px]" alt="Verified Icon" />
          </div>
          <div className="mt-5 font-inter text-2xl text-offblack text-ellipsis">
            1.2 miles away | <span className="font-bold text-emerald-500">Open</span>
          </div>
        </div>
      <div className="flex flex-col self-start p-2 bg-white rounded-2xl border border-lightgray-100 border-solid text-stone-700 max-md:flex-1">
        <div className="flex gap-5 items-center">
          <img loading="lazy" src={addItemIllustration} className="shrink-0 aspect-square w-[61px]" alt="Add Icon" />
          <div className="flex flex-col flex-1 self-stretch py-1 my-auto">
            <div className="text-base font-bold text-ellipsis">Add Item</div>
            <div className="mt-1 text-sm text-ellipsis">Add a new item to this menu</div>
          </div>
          <button>
            <img loading="lazy" src={forwardarrow} className="shrink-0 my-auto aspect-square w-[22px]" alt="Plus Icon" />
          </button>
        </div>
      </div>
    </div>
  );
  
  export default RestaurantHeader;