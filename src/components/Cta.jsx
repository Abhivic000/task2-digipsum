import React from 'react'

const Cta = () => {
  return (
    <div className="bg-[#F3EDE6] flex flex-col items-center justify-center min-h-screen">
        <div className="w-full">
                <svg width="100%" height="800" viewBox="0 0 1440 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_165)">
                        <path d="M-273.5 0.90625V498.302L137.5 735.615V605.699L362.5 735.615V605.699L587.5 735.615V605.699L812.5 735.615V605.121L1038.5 735.615V605.699L1263.5 735.615V605.699L1488.5 735.615V605.699L1713.5 735.615V237.821L1302.5 0.90625V130.604L1077.5 0.90625V130.604L852.5 0.90625V130.604L627.5 0.90625V131.18L401.5 0.90625V130.604L176.5 0.90625V130.604L-48.5 0.90625V130.604L-273.5 0.90625Z" fill="#0061FE" />
                        <path d="M-160.5 130.604V2.63693L63.0006 131.47L64.5 132.335V130.604V2.63692L288.001 131.47L289.5 132.335V130.604V2.63692L514.001 132.047L515.5 132.911V131.18V2.63692L739.001 131.47L740.5 132.335V130.604V2.63692L964.001 131.47L965.5 132.335V130.604V2.63692L1189 131.47L1190.5 132.335V130.604V2.63692L1599.5 238.398V733.883L1376 604.833L1374.5 603.967V605.699V733.883L1151 604.833L1149.5 603.967V605.699V733.883L926 604.833L924.5 603.967V605.699V733.883L700 604.255L698.5 603.389V605.121V733.883L475 604.833L473.5 603.967V605.699V733.882L250 604.833L248.5 603.967V605.699V733.882L25 604.833L23.5 603.967V605.699V733.882L-385.5 497.724V2.63693L-161.999 131.47L-160.5 132.335V130.604Z" stroke="white" stroke-width="2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_165">
                            <rect width="100%" height="740" fill="white" transform="translate(0 0.708008)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
            <div className="absolute">
                <h1 className="text-6xl text-white font-semibold">Discover Customized Solutions for</h1>
                <h1 className="text-6xl text-white font-semibold text-center">Your Financial Goals</h1>
                <button className="border-1 border-white bg-black text-white py-3 px-6 w-40 mt-20 rounded-sm font-semibold hover:bg-gray-300 hover:text-black transition duration-300 text-center ml-[24rem]">
                Get Started
            </button>
            </div>
        </div>
  )
}

export default Cta