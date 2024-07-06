import React from 'react';
import Strawberry from '../../assets/strawberry.svg'

const BestMatches = () => (
  <div>
    <div className="mt-16 text-2xl font-semibold text-black max-md:mt-10 max-md:max-w-full">Best Matches</div>
    <div className="flex gap-6 justify-between mt-10 text-xs font-medium max-md:flex-wrap max-md:mr-2.5">
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className="flex flex-col">
          <img loading="lazy" src={Strawberry} className="aspect-[1] w-[200px]" alt={`Best Match ${num}`} />
          <div className="flex flex-col mt-3">
            <div className="text-base text-black">Avocado Green Toast</div>
            <div className="mt-2 font-extrabold text-green-600">100% Preference Match</div>
            <div className="mt-2 tracking-tight text-stone-700">$8.99</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BestMatches;