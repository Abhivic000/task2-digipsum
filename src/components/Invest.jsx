import React from 'react'

const Invest = () => {
    return (
        <div className="bg-[#F3EDE6] flex items-center justify-center min-h-screen p-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="flex flex-col justify-center mb-28">
                    <h1 className="text-7xl font-semibold mb-5 mt-8">
                        Tangible advice to improve your financial situation
                    </h1>
                    <p className="text-gray-700 text-lg mb-8">
                        Invest in your team's financial education and expertise to help them make informed decisions, manage resources efficiently.
                    </p>
                    <button className="border-4 border-blue-400 text-black py-3 px-6 w-40 rounded-sm font-semibold hover:bg-blue-200 transition duration-300">
                        Learn More
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <svg width="685" height="783" viewBox="0 0 685 783" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M226 177.698V49.7307L635 285.492V780.976L411.5 651.926L410 651.06V652.792V780.976L1 544.818V49.7307L224.501 178.564L226 179.428V177.698Z" stroke="#666361" stroke-width="2" />
                        <path d="M274.5 129.698V0.865334L684.5 237.203V733.842L460.25 604.359L459.5 603.926V604.792V733.842L49.5 497.107V0.865338L273.75 130.131L274.5 130.563V129.698Z" fill="#0061FE" stroke="#666361" />
                    </svg>

                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center py-4">
                <p className="text-gray-700">Trusted over +88,000 customers around the world</p>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    )
}

export default Invest