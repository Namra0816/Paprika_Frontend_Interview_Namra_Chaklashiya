import React from 'react';
import AppetizerBox from "./AppetizerBox";

const Appetizer = () => {
  return (
    <div className="flex flex-col gap-[47px] mt-32 max-w-full text-2xl text-black max-md:mt-10 max-md:max-w-full">
      <h3 className="m-1 font-semibold text-left max-md:text-center">
        Appetizers
      </h3>
      <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full text-sm text-gray max-md:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] max-md:flex-wrap max-md:justify-center">
          <AppetizerBox />
          <AppetizerBox />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] max-md:flex-wrap max-md:justify-center">
          <AppetizerBox />
          <AppetizerBox />
        </div>
      </div>
    </div>
  );
}

export default Appetizer;
