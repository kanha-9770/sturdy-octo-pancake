
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Machines } from "../../constants";


const Home = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const carouselRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (animationRef.current) animationRef.current.kill();
        };
    }, []);

    const startAutoSlide = () => {
        animationRef.current = gsap.to(carouselRef.current, {
            xPercent: -100 * Machines.length,
            ease: "none",
            duration: Machines.length * 3, // Total duration for one complete cycle
            repeat: -1,
            modifiers: {
                xPercent: (xPercent) => {
                    const index = Machines.length;
                    return `${xPercent % (index * 100)}%`;
                },
            },
        });
    };

    const handleMouseEnter = () => {
        gsap.to(animationRef.current, { timeScale: 0.5 }); // Slow down the animation
    };

    const handleMouseLeave = () => {
        gsap.to(animationRef.current, { timeScale: 1 }); // Resume normal speed
    };

    const handleVideoPlay = () => {
        const videoElement = document.getElementById("background-video");
        if (videoElement) {
            videoElement.play();
            setIsVideoPlaying(true);
        }
    };
    const [flipped, setFlipped] = useState(false);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFlipped((prevFlipped) => !prevFlipped);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(intervalId);
    }, []);
    return (
        <section className="relative h-screen w-screen overflow-hidden bg-transparent bg-cover bg-center text-white font-sans">
            <video
                id="background-video"
                autoPlay
                loop
                muted
                playsInline
                className="absolute brightness-90	 inset-0 w-full h-full object-cover z-0"
                onCanPlay={() => setIsVideoPlaying(true)}
            >
                <source src="video/bg.mp4" type="video/mp4" />
                <source src="video/bg.webm" type="video/webm" />
                <source src="video/bg.ogv" type="video/ogg" />
            </video>
            {!isVideoPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
                    onClick={handleVideoPlay}
                >

                </div>
            )}
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-10">
                <h1 className="text-4xl md:text-5xl font-normal leading-tight mb-4">
                    <span>Paper </span>
                    <span className="flip-animate">
                        <span data-hover="Cup Machine">Cup Machine</span>
                    </span>
                </h1>
                <p className="text-2xl md:text-4xl font-bold italic mb-8 tracking-wide">Manufacturing</p>
                <button className="p-1 pl-6 pr-6 text-black bg-white rounded-md shadow-lg transition duration-300 font-bold text-base">
                    Book Now
                </button>
            </div>
            <div
                className="absolute bottom-0 w-full flex items-center justify-center p-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative overflow-hidden w-full mx-20 flex justify-center items-center">
                    <div
                        className="flex transition-transform px-24 items-center justify-center duration-500"
                        ref={carouselRef}
                    >
                        {Machines.map((machine, index) => (
                            <div key={index} className="flex-shrink-0 w-1/5 px-2">
                                <div className="relative top-6 flex flex-col overflow-hidden transform transition-transform duration-500 hover:scale-110">
                                    <div className="relative">
                                        <img
                                            src={Machines.image}
                                            alt={Machines.name}
                                            className="h-32 w-full object-cover"
                                        />
                                        <br />
                                        <div className="absolute bottom-0 left-0  top-12 right-0 h-3/5 bg-white bg-opacity-5 flex items-end justify-center">
                                            <span className="text-white text-xs md:text-xs font-medium p-4">
                                                {Machines.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {Machines.map((machine, index) => (
                            <div
                                key={index + Machines.length}
                                className="flex-shrink-0 w-1/5 px-2"
                            >
                                <div className="relative top-6 flex flex-col overflow-hidden transform transition-transform duration-500 hover:scale-110">
                                    <div className="relative">
                                        <img
                                            src={Machines.image}
                                            alt={Machines.name}
                                            className="h-32 w-full object-cover"
                                        />
                                        <br></br>
                                        <div className="absolute bottom-0 left-0 top-12 right-0 h-3/5 bg-white bg-opacity-5 flex items-end justify-center">
                                            <span className="text-white text-xs md:text-xs font-medium p-4">
                                                {Machines.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  
        </section>
    );
};

export default Home;
