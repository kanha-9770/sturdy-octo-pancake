import React, { useState, useCallback, memo } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Carousel from './Carousel';
import "@fontsource/alex-brush";

// Memoized Navbar Link Component
const NavLink = memo(({ href, text, index, activeLink, handleMouseEnter, handleMouseLeave }) => (
    <a
        href={href}
        className={`text-gray-600 hover:text-black ${activeLink === index && 'border-b-2 border-red-600'}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
    >
        {text}
    </a>
));

const Home = () => {
    const [activeLink, setActiveLink] = useState(0); // State to track active link, -1 means none

    // Memoized event handlers
    const handleMouseEnter = useCallback((index) => {
        setActiveLink(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setActiveLink(-1); // Reset activeLink when mouse leaves all links
    }, []);

    return (
        <div className="relative top-6 flex flex-col items-center bg-[#f5f5f5] rounded-lg overflow-hidden max-w-full">
            <div className="relative p-10 px-12 w-full">
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
            <div className="flex mt-[-1.5rem] px-10 w-full">
                <div className="w-full flex flex-row">
                    <div className="w-2/5 flex flex-col">
                        <h2 className="text-4xl font-poppins font-extralight">FOOD PACKING MACHINES</h2>
                        <h3 className="text-6xl py-4 font-alex-brush">Manufacturing</h3>
                        <div className="flex justify-start w-full">
                            <nav className="flex space-x-4 px-4 py-0">
                                <NavLink
                                    href="#machines"
                                    text="Machines"
                                    index={0}
                                    activeLink={activeLink}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseLeave={handleMouseLeave}
                                />
                                <NavLink
                                    href="#about-us"
                                    text="About Us"
                                    index={1}
                                    activeLink={activeLink}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseLeave={handleMouseLeave}
                                />
                                <NavLink
                                    href="#news"
                                    text="News"
                                    index={2}
                                    activeLink={activeLink}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseLeave={handleMouseLeave}
                                />
                                <NavLink
                                    href="#brands"
                                    text="Brands"
                                    index={3}
                                    activeLink={activeLink}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseLeave={handleMouseLeave}
                                />
                                <NavLink
                                    href="#clientele"
                                    text="Clientele"
                                    index={4}
                                    activeLink={activeLink}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseLeave={handleMouseLeave}
                                />
                                <NavLink
                                    href="#testimonials"
                                    text="Testimonials"
                                    index={5}
                                    activeLink={activeLink}
                                    handleMouseEnter={handleMouseEnter}
                                    handleMouseLeave={handleMouseLeave}
                                />
                            </nav>
                        </div>
                    </div>
                    <div className="flex mt-[-6.5rem] justify-end flex-col w-3/5">
                        <Carousel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Home);
