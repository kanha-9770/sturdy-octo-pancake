import React, { useRef, useEffect, useState, useCallback, memo } from 'react';
import { gsap } from 'gsap';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { items, titlesWithImages } from '../../constants';
import '../../App.css';

const AboutLayout = memo(({ hoveredItem, setHoveredItem, heading, setHeading, isVisible, setIsVisible }) => {
    const carouselRef = useRef(null);
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollDown = () => {
        if (currentIndex < items.length - 2) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const scrollUp = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleWheel = useCallback((e) => {
        if (e.deltaY > 0) {
            scrollDown();
        } else {
            scrollUp();
        }
    }, [currentIndex]);

    const handleMouseLeave = useCallback((e) => {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        if (e.clientY >= rect.bottom) {
            gsap.to(container, {
                duration: 0.2,
                opacity: 0,
                onComplete: () => {
                    setHoveredItem(null);
                    setCurrentIndex(0);
                    setHeading(null);
                    setIsVisible(true);
                    gsap.to(container, { opacity: 1 });
                },
            });
        }
    }, [setHoveredItem, setCurrentIndex, setHeading, setIsVisible]);

    useEffect(() => {
        const containerElement = containerRef.current;
        if (containerElement) {
            containerElement.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if (containerElement) {
                containerElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [handleMouseLeave]);

    useEffect(() => {
        const carouselElement = carouselRef.current;

        gsap.fromTo(
            carouselElement.children,
            { y: '100%', scale: 0.5, opacity: 0 },
            { y: '0%', scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'elastic.out(1, 0.5)' }
        );
        carouselElement.addEventListener('wheel', handleWheel);
        return () => {
            carouselElement.removeEventListener('wheel', handleWheel);
        };
    }, [handleWheel]);

    return (
        <div
            ref={containerRef}
            className="flex bg-white flex-col top-0 border-b-2 rounded-xl md:flex-row p-4 pb-8 h-full md:h-full items-center justify-center"
        >
            <div className="grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 flex-shrink">
                {titlesWithImages.map((item, index) => (
                    <div key={index} className="flex p-2 mt-4 flex-col items-center">
                        <Link to={`${item.title}`}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-golden-w h-golden-h rounded-2xl cursor-pointer"
                            />
                            <p className="mt-2 text-center text-sm font-semibold">{item.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="ml-2 w-2 h-72 md:ml-4 lg:ml-6 border-l border-gray-300"></div>
            <div className="ml-2 md:ml-4 lg:ml-6 w-full md:w-1/4 min-h-full flex flex-col justify-between">
                <div ref={carouselRef} className="flex flex-col gap-2">
                    {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
                        <Link key={index} to={`${item.title}`}>
                            <div className={`${item.color} flex items-center p-4 rounded-3xl`}>
                                <div className="h-12 w-12 mr-3 flex justify-center items-center text-2xl">
                                    <item.icon />
                                </div>
                                <div>
                                    <h3 className="text-md font-medium mb-0">{item.title}</h3>
                                    <p className="text-xs line-clamp-3">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {currentIndex > 0 && (
                    <button onClick={scrollUp} className="absolute text-2xl top-0 p-2 rounded-full">
                        <IoIosArrowUp />
                    </button>
                )}
                {currentIndex < items.length - 2 && (
                    <button onClick={scrollDown} className="absolute bottom-4 text-3xl p-2 rounded-full">
                        <IoIosArrowDown />
                    </button>
                )}
            </div>
        </div>
    );
});

export default AboutLayout;
