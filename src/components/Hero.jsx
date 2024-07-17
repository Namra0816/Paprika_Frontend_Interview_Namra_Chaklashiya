import React from 'react';
import bgimage from '../assets/bgimage.png'
import backArrow from '../assets/backArrow.png'
import favIcon from '../assets/favIcon.png'
import shareIcon from '../assets/shareIcon.png'
import imageIcon from '../assets/imageIcon.png'

const Hero = () => (
  <section className="relative flex flex-col px-12 py-12 min-h-[291px] max-md:px-5">
    <img loading="lazy" src={bgimage} className="absolute inset-0 object-cover w-full h-full" alt="Hero Background" />
    <div className="relative flex justify-between">
      <button>
        <img loading="lazy" src={backArrow} className="shrink-0 w-11 my-auto" alt="Back Arrow" />
      </button>
      <div className="flex gap-5">
        <button>
          <img loading="lazy" src={favIcon} className="shrink-0 w-[53px]" alt="Share Icon" />
        </button>
        <button>
          <img loading="lazy" src={shareIcon} className="shrink-0 w-[53px]" alt="Favorite Icon" />
        </button>
      </div>
    </div>
    <button className="relative flex self-end gap-4 px-3 py-3 mt-24 text-base font-medium text-red-400 bg-white rounded-lg max-md:mt-auto">
      <img loading="lazy" src={imageIcon} className="shrink-0 w-7" alt="PhotoIcon" />
      <div className="my-auto">All (45) Photos</div>
    </button>
  </section>
);

export default Hero;
