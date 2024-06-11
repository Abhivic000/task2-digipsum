import React from 'react';
import Herobg from '../assets/herobg.png';

const Hero = () => {
  return (
    <div className="bg-[#F3EDE6] flex items-center justify-center min-h-screen p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-semibold mb-5">
            Enable your team with financial savvy
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Invest in your team's financial education and expertise to help them make informed decisions, manage resources efficiently.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 w-40 rounded-sm font-semibold hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-96 relative bg-cover" style={{ backgroundImage: `url(herobg)` }}>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center py-4">
        <p className="text-gray-700">Trusted over +88,000 customers around the world</p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
