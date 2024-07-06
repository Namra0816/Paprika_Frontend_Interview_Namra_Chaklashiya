import React from "react";
import teaIcon from "../../../assets/teaIcon.png"

const AppetizerPairs = () => {
  return (
    <div className="w-[500px] rounded-2xl shrink-0 py-[22px] px-[23px] max-w-full text-left text-gray font-inter border-[1px] border-solid border-lightgray-200">
      <div className="self-stretch flex flex-row gap-[14px] max-md:flex-wrap">
        <img
          className="self-stretch w-[140px] relative max-h-full"
          loading="lazy"
          alt="Tea Icon"
          src={teaIcon}
        />
        <div className="flex-1 flex flex-col items-start justify-center gap-[8px]">
          <div className="self-stretch flex flex-row items-start justify-between text-base">
            <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              English Breakfast
            </div>
            <div className="tracking-[-0.02em] font-medium text-black min-w-[48px] whitespace-nowrap">
              $ 8.99
            </div>
          </div>
          <div className="leading-[150%] text-dimgray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Fluffy pancakes, with their golden-brown exteriors and soft, airy
            interiors, are a quintessential breakfast delight. Their delightful
            texture is achieved through careful mixing of ingredients and
            precise cooking techniques, resulting in a stack of pancakes that
            practically melt in your mouth. Topped with a drizzle of maple syrup
            or a dollop of whipped cream, fluffy pancakes are an irresistible
            treat for any morning indulgence.
          </div>
          <div className="rounded-lg bg-aliceblue p-3 whitespace-nowrap text-royalblue">
            <b className="relative">75% Dietary Match</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppetizerPairs;
