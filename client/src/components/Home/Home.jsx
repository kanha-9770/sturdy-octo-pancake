import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Carousel from './Carousel';
const Home = () => {
    const [activeLink, setActiveLink] = useState(0); // State to track active link, -1 means none
    const handleMouseEnter = (index) => {
        setActiveLink(index);
    };

    const handleMouseLeave = () => {
        setActiveLink(-1); // Reset activeLink when mouse leaves all links
    };

    return (
        <div className="relative top-6 flex flex-col items-center bg-[#f5f5f5] rounded-lg  overflow-hidden max-w-full">
            <div className="relative p-10 w-full">
                <video
                    id="background-video"
                    className="w-full h-[25rem] object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="video/bg.mp4" type="video/mp4" />
                    <source src="video/bg.webm" type="video/webm" />
                    <source src="video/bg.ogv" type="video/ogg" />
                </video>
                <div className="absolute bottom-20 left-20 bg-white text-black px-4 font-montserrat text-16 py-1 rounded-full cursor-pointer flex items-center">
                    <span>Get a Quote</span>
                    <button className="border-2 rounded-full h-8 w-8 ml-2">
                        <span className="text-3xl"><MdKeyboardArrowRight /></span>
                    </button>
                </div>
            </div>
            <div className="flex mt-[-1.5rem] px-8 w-full">
                <div className=" w-full flex flex-row">
                    <div className="w-2/5 flex flex-col">
                        <h2 className="text-4xl font-montserrat font-thin">FOOD PACKING MACHINES</h2>
                        <h3 className="text-6xl font-montserrat
                     italic">𝓂𝒶𝓃𝓊𝒻𝒶𝒸𝓉𝓊𝓇𝒾𝓃𝑔</h3>
                        <div className="flex justify-start w-full">
                            <nav className="flex space-x-4 px-4 py-2">
                                <a
                                    href="#machines"
                                    className={`text-gray-600 hover:text-black ${activeLink === 0 && 'border-b-2 border-red-600'}`}
                                    onMouseEnter={() => handleMouseEnter(0)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Machines
                                </a>
                                <a
                                    href="#about-us"
                                    className={`text-gray-600 hover:text-black ${activeLink === 1 && 'border-b-2 border-red-600'}`}
                                    onMouseEnter={() => handleMouseEnter(1)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    About Us
                                </a>
                                <a
                                    href="#news"
                                    className={`text-gray-600 hover:text-black ${activeLink === 2 && 'border-b-2 border-red-600'}`}
                                    onMouseEnter={() => handleMouseEnter(2)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    News
                                </a>
                                <a
                                    href="#brands"
                                    className={`text-gray-600 hover:text-black ${activeLink === 3 && 'border-b-2 border-red-600'}`}
                                    onMouseEnter={() => handleMouseEnter(3)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Brands
                                </a>
                                <a
                                    href="#clientele"
                                    className={`text-gray-600 hover:text-black ${activeLink === 4 && 'border-b-2 border-red-600'}`}
                                    onMouseEnter={() => handleMouseEnter(4)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Clientele
                                </a>
                                <a
                                    href="#testimonials"
                                    className={`text-gray-600 hover:text-black ${activeLink === 5 && 'border-b-2 border-red-600'}`}
                                    onMouseEnter={() => handleMouseEnter(5)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Testimonials
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="flex justify-end flex-col w-3/5">
                        <Carousel />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;
