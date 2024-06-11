import React, { useState } from 'react';
import backgroundSVG from "./bgtest.svg";

const testimonials = [
    {
        quote: "Examining Effective Financial Approaches for Achieving Long-Term Financial Security and Independence in Retirement",
        author: "Diego Mulirro",
        position: "CEO, Tarable",
        // Add more testimonials as needed
    },
    {
        quote: "Examining Effective Financial Approaches for Achieving Long-Term Financial Security and Independence in Retirement",
        author: "Diego Mulirro",
        position: "CEO, Tarable",
        // Add more testimonials as needed
    },
    {
        quote: "Examining Effective Financial Approaches for Achieving Long-Term Financial Security and Independence in Retirement",
        author: "Diego Mulirro",
        position: "CEO, Tarable",
        // Add more testimonials as needed
    },
];

const LeftArrow = () => (
    <svg width="115" height="65" viewBox="0 0 115 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.866064 64.4062L37.2425 1.40625H113.542L77.2264 64.4062H0.866064Z" stroke="#666361" />
        <path d="M40.5571 32.5528C40.3618 32.7481 40.3618 33.0646 40.5571 33.2599L43.7391 36.4419C43.9343 36.6371 44.2509 36.6371 44.4462 36.4419C44.6414 36.2466 44.6414 35.93 44.4462 35.7348L41.6178 32.9063L44.4462 30.0779C44.6414 29.8827 44.6414 29.5661 44.4462 29.3708C44.2509 29.1755 43.9343 29.1755 43.7391 29.3708L40.5571 32.5528ZM40.9106 33.4063H73.4964V32.4063H40.9106V33.4063Z" fill="#666361" />
    </svg>
);

const RightArrow = () => (
    <svg width="115" height="65" viewBox="0 0 115 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M114.814 0.90625H37.3608L0.406982 64.9062H77.9223L114.814 0.90625Z" fill="#0061FE" />
        <path d="M74.257 33.2599C74.4522 33.0646 74.4522 32.7481 74.257 32.5528L71.075 29.3708C70.8797 29.1755 70.5631 29.1755 70.3679 29.3708C70.1726 29.5661 70.1726 29.8827 70.3679 30.0779L73.1963 32.9063L70.3679 35.7348C70.1726 35.93 70.1726 36.2466 70.3679 36.4419C70.5631 36.6371 70.8797 36.6371 71.075 36.4419L74.257 33.2599ZM41.3176 33.4063H73.9034V32.4063H41.3176V33.4063Z" fill="white" />
    </svg>
);

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <div className="flex flex-col justify-center min-h-screen p-8" style={{ backgroundImage: `url(${backgroundSVG})` }}>
            <div className="flex flex-row">
                <div className="flex flex-col justify-between w-full mt-8 gap-28">
                    <div className="ml-24 mt-5">
                        <svg width="298" height="345" viewBox="0 0 298 345" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 233.713V0.656219L105.425 61.4265V0.656219L298 111.663V344.906L192.575 284.034V344.906L0 233.713Z" fill="#0061FE" />
                            <path d="M106.425 61.4265V2.3869L297 112.241V343.174L193.076 283.168L191.575 282.302V284.034V343.174L1 233.135V2.3869L104.925 62.2928L106.425 63.1571V61.4265Z" stroke="#666361" stroke-width="2" />
                        </svg>

                    </div>
                    <div className="ml-24 mt-5">
                        <button onClick={handlePrev}>
                            <LeftArrow />
                        </button>
                        <button onClick={handleNext}>
                            <RightArrow />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-[11rem]">
                <div className="mt-28">
                    <blockquote className="text-4xl font-semibold">
                        “{testimonials[currentIndex].quote}”
                    </blockquote>
                    <p className="text-lg font-medium mt-4">
                        {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-600">
                        {testimonials[currentIndex].position}
                    </p>
                    <button className="mt-4 bg-blue-600 text-white py-3 px-6 rounded-sm font-semibold hover:bg-blue-700 transition duration-300">
                        View Case Study
                    </button>
                </div>

                <div className="flex justify-center mt-20 space-x-4 ml-[25rem]">
                    {testimonials.map((_, index) => (
                        <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
