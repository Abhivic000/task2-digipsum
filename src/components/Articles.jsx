import React from 'react';
import Ctabg from '../assets/cta-bg.png';

const Articles = () => {
    return (
        <div className="bg-[#F3EDE6] flex flex-col items-center justify-center min-h-screen p-8">
            <div className="items-center justify-center">
                <h1 className="text-6xl font-semibold mt-3"> Our Articles </h1>
            </div>
            <div className="flex flex-row mt-[4rem] gap-20">
                <div className="flex flex-col">
                    <svg width="380" height="481" viewBox="0 0 412 481" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M411.75 0.708008V480.708L67.6 480.406L89.6241 442.317H343.434L367.22 401.494H68.635L23.0183 480.387L0.75 480.362V0.708008H411.75Z" fill="#0061FE" />
                    </svg>

                    <p className="text-2xl">Tangible steps to improve your</p>
                    <p className="text-2xl">financial situation</p>
                    <p className="text-gray-500">22 Aug 2023 - 3 mins</p>
                </div>
                <div className="flex flex-col">
                    <svg width="380" height="481" viewBox="0 0 412 481" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M411.75 0.708008V480.708L67.6 480.406L89.6241 442.317H343.434L367.22 401.494H68.635L23.0183 480.387L0.75 480.362V0.708008H411.75Z" fill="#0061FE" />
                    </svg>
                    <p className="text-2xl">Tangible steps to improve your</p>
                    <p className="text-2xl">financial situation</p>
                    <p className="text-gray-500">22 Aug 2023 - 3 mins</p>
                </div>
                <div className="flex flex-col">
                    <svg width="380" height="481" viewBox="0 0 412 481" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M411.75 0.708008V480.708L67.6 480.406L89.6241 442.317H343.434L367.22 401.494H68.635L23.0183 480.387L0.75 480.362V0.708008H411.75Z" fill="#0061FE" />
                    </svg>
                    <p className="text-2xl">Tangible steps to improve your</p>
                    <p className="text-2xl">financial situation</p>
                    <p className="text-gray-500">22 Aug 2023 - 3 mins</p>
                </div>
            </div>
            <button className="border-4 border-blue-400 text-black py-3 px-6 w-40 mt-20 rounded-sm font-semibold hover:bg-blue-200 transition duration-300">
                Learn More
            </button>
            
        </div>
    )
}

export default Articles