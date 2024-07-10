import React, { useRef, useEffect } from 'react';
import './Layout.css';
import { supporItem } from '../../constants';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { BgMapImage } from '../../assets';
import { gsap } from 'gsap';

const SupportLayout = ({ setHoveredItem }) => {
    const carouselRef = useRef(null);
    const containerRef = useRef(null);
    const firstCardWidth = useRef(0);
    const cardCount = supporItem.length;

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const initializeCarousel = () => {
            firstCardWidth.current = carousel.querySelector('.card').offsetWidth;
            const carouselChildren = [...carousel.children];
            carouselChildren.slice(-cardCount).reverse().forEach((card) => {
                carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
            });
            carouselChildren.slice(0, cardCount).forEach((card) => {
                carousel.insertAdjacentHTML('beforeend', card.outerHTML);
            });

            carousel.classList.add('no-transition');
            carousel.scrollLeft = firstCardWidth.current * cardCount;
            carousel.classList.remove('no-transition');
        };

        initializeCarousel();
        window.addEventListener('resize', initializeCarousel);

        const handleScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = firstCardWidth.current * cardCount;
                carousel.classList.remove('no-transition');
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = firstCardWidth.current * cardCount;
                carousel.classList.remove('no-transition');
            }
        };

        carousel.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', initializeCarousel);
            carousel.removeEventListener('scroll', handleScroll);
        };
    }, [cardCount]);

    const handleArrowClick = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        const scrollAmount = direction === 'left' ? -firstCardWidth.current : firstCardWidth.current;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleMouseLeave = (e) => {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        if (e.clientY >= rect.bottom) {
            gsap.to(container, {
                duration: 0.2,
                opacity: 0,
                onComplete: () => {
                    setHoveredItem(null);
                    gsap.to(container, { opacity: 1 });
                }
            });
        }
    };

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
    }, []);

    return (
        <div ref={containerRef} className="wrapper rounded-lg bg-white w-full mx-auto relative h-auto flex items-center justify-center p-14">
            <button
                onClick={() => handleArrowClick('left')} className="absolute z-10 left-0 p-0 text-4xl ml-2 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
            >
                <span className="relative z-10"><MdKeyboardArrowLeft /></span>
            </button>
            <ul className="carousel" ref={carouselRef}>
                {supporItem.map((card, index) => (
                    <li className="ml-4 flex flex-col items-center justify-center" key={`original-${index}`}>
                        <div style={{ backgroundImage: `url(${BgMapImage})` }} className="card">
                            <img className='img' src={card.image} alt="img" draggable="false" />
                        </div>
                        <span className='font-montserrat mt-4 font-medium hover:text-[#483d78] hover:font-bold text-16'>{card.title}</span>
                    </li>
                ))}
                {supporItem.map((card, index) => (
                    <li className="ml-4 flex flex-col items-center justify-center" key={`clone-start-${index}`}>
                        <div style={{ backgroundImage: `url(${BgMapImage})` }} className="card">
                            <img className='img' src={card.image} alt="img" draggable="false" />
                        </div>
                        <span className='font-montserrat mt-4 font-medium hover:text-[#483d78] hover:font-bold text-16'>{card.title}</span>
                    </li>
                ))}
                {supporItem.map((card, index) => (
                    <li className="ml-4 flex flex-col items-center justify-center" key={`clone-end-${index}`}>
                        <div style={{ backgroundImage: `url(${BgMapImage})` }} className="card">
                            <img className='img' src={card.image} alt="img" draggable="false" />
                        </div>
                        <span className='font-montserrat mt-4 font-medium hover:text-[#483d78] hover:font-bold text-16'>{card.title}</span>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => handleArrowClick('right')} className="absolute right-0 z-10 p-0 text-4xl mr-8 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
            >
                <span className="relative z-10"><MdKeyboardArrowRight /></span>
            </button>
        </div>
    );
};

export default SupportLayout;
