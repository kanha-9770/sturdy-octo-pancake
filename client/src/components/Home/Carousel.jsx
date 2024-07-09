import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Carousel.css';

const images = [
    'https://picsum.photos/600/400?random=1',
    'https://picsum.photos/600/400?random=2',
    'https://picsum.photos/600/400?random=3',
    'https://picsum.photos/600/400?random=4',
    'https://picsum.photos/600/400?random=5',
];

const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
];
const Carousel = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const items = document.querySelectorAll('.slider-item');
        const previous = (current - 1 + items.length) % items.length;
        const next = (current + 1) % items.length;
        gsap.to(items, { zIndex: 0, scale: 0.5, opacity: 0.5, y: '30px', duration: 0.8 });
        gsap.to(items[current], { zIndex: 2, scale: 1, opacity: 1, y: '0px', duration: 0.8 });
        gsap.to(items[previous], { zIndex: 1, opacity: 0.7, scale: 0.75, y: '10px', duration: 0.8 });
        gsap.to(items[next], { zIndex: 1, opacity: 0.7, scale: 0.75, y: '10px', duration: 0.8 });
    }, [current]);
    return (
        <div className="slider-container w-full">
            <div className="slider">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`slider-item ${index === current ? 'active' : ''}`}
                    >
                        <img className='h-32 w-48 object-contain' src={src} alt={`Item ${index}`} />
                        <div className="text-content bg-[#f5f5f5]">
                            <h3>Item {index + 1}</h3>
                            <p>{texts[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigation">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`nav-button ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
