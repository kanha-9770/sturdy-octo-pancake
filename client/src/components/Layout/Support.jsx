import React, { useState, useEffect, useRef } from 'react';
import './my.css';
import { supporItem } from '../../constants';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from '../index';
import { BgMapImage } from '../../assets';
const Support = () => {
    const carouselRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const firstCardWidth = useRef(0);
    const cardPerView = useRef(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const initializeCarousel = () => {
            firstCardWidth.current = carousel.querySelector('.card').offsetWidth;
            cardPerView.current = Math.round(carousel.offsetWidth / firstCardWidth.current);

            const carouselChildren = [...carousel.children];
            carouselChildren.slice(-cardPerView.current).reverse().forEach((card) => {
                carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
            });
            carouselChildren.slice(0, cardPerView.current).forEach((card) => {
                carousel.insertAdjacentHTML('beforeend', card.outerHTML);
            });

            carousel.classList.add('no-transition');
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove('no-transition');
        };

        const handleResize = () => {
            carousel.classList.add('no-transition');
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove('no-transition');
        };

        const handleDragStart = (e) => {
            setIsDragging(true);
            carousel.classList.add('dragging');
            setStartX(e.pageX - carousel.offsetLeft);
            setStartScrollLeft(carousel.scrollLeft);
        };

        const handleDragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            carousel.scrollLeft = startScrollLeft - walk;
        };

        const handleDragStop = () => {
            setIsDragging(false);
            carousel.classList.remove('dragging');
        };

        const handleInfiniteScroll = () => {
            if (!carousel) return;
            if (carousel.scrollLeft === 0) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
                carousel.classList.remove('no-transition');
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove('no-transition');
            }
        };

        initializeCarousel();
        window.addEventListener('resize', handleResize);
        carousel.addEventListener('mousedown', handleDragStart);
        carousel.addEventListener('mousemove', handleDragging);
        document.addEventListener('mouseup', handleDragStop);
        carousel.addEventListener('scroll', handleInfiniteScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            carousel.removeEventListener('mousedown', handleDragStart);
            carousel.removeEventListener('mousemove', handleDragging);
            document.removeEventListener('mouseup', handleDragStop);
            carousel.removeEventListener('scroll', handleInfiniteScroll);
        };
    }, []);

    const handleArrowClick = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        carousel.scrollLeft += direction === 'left' ? -firstCardWidth.current : firstCardWidth.current;
    };

    return (
        <div className="wrapper rounded-lg bg-white w-full mx-auto relative h-auto flex items-center justify-center p-14" ref={wrapperRef}>
            <button
                onClick={() => handleArrowClick('left')} className="absolute z-10 left-0 p-0 text-4xl ml-2 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
            >
                <span className="relative z-10"><MdKeyboardArrowLeft /></span>
            </button>
            <ul className="carousel" ref={carouselRef}>
                {supporItem.map((card, index) => (
                    <li
                        className=" ml-4 flex flex-col items-center justify-center" key={index}>
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

export default Support;
