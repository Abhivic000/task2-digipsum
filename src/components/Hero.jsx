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
        <div className="mt-5 ml-36"><svg width="436" height="670" viewBox="0 0 636 870" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M636 0V869.239L103.447 868.771L137.528 809.721H530.285L567.092 746.434H105.048L34.459 868.741L0 868.701V0H132.236L61.3578 122.805H565.102L601.63 59.5174H166.854L201.203 0H636Z" fill="white"/>
<path d="M636 0V869.239L103.447 868.771L137.528 809.721H530.285L567.092 746.434H105.048L34.459 868.741L0 868.701V0H132.236L61.3578 122.805H565.102L601.63 59.5174H166.854L201.203 0H636Z" fill="#0061FE"/>
</svg>
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
