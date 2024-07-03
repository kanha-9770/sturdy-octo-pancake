import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from '../index';
import { Machines, SidebarLinks, images } from '../../constants';
const AboutLayOut = ({ setHoveredItem, setHeading, setIsVisible }) => {
  const [hoveredCategory, setHoveredCategory] = useState('All Products');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const containerRef = useRef(null);
  const filteredMachines = Machines
    .filter((machine) => machine.category.includes(hoveredCategory))
    .map((machine) => ({
      ...machine,
      image: images[machine.image],
    }));
  const middleIndex = Math.floor(filteredMachines.length / 2);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredMachines.length);
    setActiveCategory(filteredMachines[(currentIndex + 1) % filteredMachines.length].category.split(',')[0]);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredMachines.length) % filteredMachines.length);
    setActiveCategory(filteredMachines[(currentIndex - 1 + filteredMachines.length) % filteredMachines.length].category.split(',')[0]);
  };
  const handleMouseLeave = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    if (e.clientY >= rect.bottom) {
      setHoveredCategory('All Products');
      setCurrentIndex(0);
      setActiveCategory(null);
      setHoveredItem(null);
      setHeading(null);
      setIsVisible(true);
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

  useEffect(() => {
    setCurrentIndex(0);
    setActiveCategory(null);
  }, [hoveredCategory]);

  return (
    <div
      ref={containerRef}
      className="w-full md:h-full p-4 border-b-2 rounded-b-xl flex flex-col justify-center items-center font-medium"
    >
      <div className=" w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex h-full justify-center items-center w-full md:w-3/4 relative px-4">
          {filteredMachines.length > 3 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-0 text-4xl ml-0 text-red h-10 w-10 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10"><MdKeyboardArrowLeft /></span>
            </button>
          )}
          <div className="flex overflow-hidden w-full justify-center">
            {filteredMachines.length <= 2 ? (
              filteredMachines.map((machine, index) => (
                <div key={`${machine.name}-${index}`} className="mt-4 group bg-transparent text-center p-2 w-1/2 relative">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="object-contain rounded-lg relative z-10 h-golden-h w-full"
                  />
                  <h3 className="text-lg text-black font-bold mt-2 relative z-20">{machine.name}</h3>
                  <div className="flex justify-center space-x-4 mt-2">
                    <a href={`${machine.link}/learn`} className="primary-button relative z-20">Book Now</a>
                  </div>
                </div>
              ))
            ) : (
              [...filteredMachines, ...filteredMachines].slice(currentIndex, currentIndex + 3).map((machine, index) => (
                <div key={`${machine.name}-${index}`} className="mt-4 group bg-transparent text-center p-2 w-1/3 relative">
                  <div className="slider-container">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className={`object-contain slider-item rounded-lg relative z-10 ${index === 1 ? ' zoomed-image h-golden-h w-full' : 'h-golden-h w-full'}`}
                    />
                  </div>
                  <h3 className="text-lg text-black font-bold pt-10 relative z-20">{machine.name}</h3>
                  <div className="flex justify-center pt-4 space-x-4 mt-2">
                    <a href={`${machine.link}/learn`} className="primary-button relative z-20">Book Now</a>
                  </div>
                </div>
              ))
            )}
          </div>
          {filteredMachines.length > 3 && (
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-0 text-4xl mr-1 text-red h-10 w-10 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10"><MdKeyboardArrowRight /></span>
            </button>
          )}
        </div>
        <div className="w-full md:w-1/4 pl-6 lg:space-y-3 border-l border-gray-300">
          {SidebarLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => {
                setHoveredCategory(link.name);
                setCurrentIndex(0);
              }}
              className={`flex items-center space-x-4 text-lg transition-colors duration-300 cursor-pointer ${hoveredCategory === 'All Products' && activeCategory === link.name ? 'font-montserrat font-bold text-16 text-[#483d73]' : 'font-montserrat text-14 '}`}
            >
              <div
                className={`flex items-center h-4 bg-fixed object-contain bg-no-repeat justify-center cursor-pointer w-4 ${hoveredCategory === 'All Products' && activeCategory === link.name ? 'h-8 w-6 text-[#483d73] font-bold' : 'text-black'}`}
              >
                <img className='rounded-full' src={link.icon} alt="machine icon" />
              </div>
              <span className={`transition duration-300 ${hoveredCategory === link.name ? 'font-semibold font-montserrat text-16 text-[#483d73] ' : ''}`}>{link.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex pt-4 justify-center w-full">
        <div className="flex justify-center items-center space-x-2" style={{ width: '75%', marginLeft: '-15rem' }}>
          {filteredMachines.map((machine, index) => (
            <div
              key={index}
              className={`flex items-center h-4 bg-fixed object-contain bg-no-repeat w-4 justify-center cursor-pointer ${index === (currentIndex + 1) % filteredMachines.length ? 'h-8 w-8' : 'text-black'}`}
              onClick={() => {
                setCurrentIndex(index - 1);
                setActiveCategory(filteredMachines[index].category.split(',')[0]);
              }}
            >
              <img className='rounded-full bg-transparent' src={machine.icon} alt="machine icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutLayOut;
