import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from '../index';
import { cars, SidebarLinks } from '../../constants';
import {
  paperBowlMachineImage,
  paperBagMachineImage,
  paperCupMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
} from "../../assets";
import BlobAnimation from '../Blobanimation';
import { gsap } from 'gsap';
import slideInAnimation from './SlideAnimation';
const AboutLayOut = ({ hoveredItem, setHoveredItem, open, heading, setHeading, isVisible, setIsVisible }) => {
  const [hoveredCategory, setHoveredCategory] = useState('All Products');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const containerRef = useRef(null);
  const images = {
    paperCupMachineImage,
    paperPlateMachineImage,
    paperBagMachineImage,
    paperBowlMachineImage,
    paperFlexoMachineImage,
    fullyAutomaticBagMachineImage,
  };

  const filteredCars = cars
    .filter((car) => car.category.includes(hoveredCategory))
    .map((car) => ({
      ...car,
      image: images[car.image],
    }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredCars.length);
    setActiveCategory(filteredCars[(currentIndex + 1) % filteredCars.length].category.split(',')[0]);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredCars.length) % filteredCars.length);
    setActiveCategory(filteredCars[(currentIndex - 1 + filteredCars.length) % filteredCars.length].category.split(',')[0]);
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
      slideInAnimation(containerElement); // Apply the animation
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

  useEffect(() => {
    const cars = document.querySelectorAll('.car-container');

    gsap.fromTo(
      cars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power4.out',
      }
    );
  }, [currentIndex, hoveredCategory]);

  return (
    <div
      ref={containerRef}
      className="w-full md:h-auto border-b-2 rounded-b-xl flex flex-col justify-center items-center font-medium"
    >
      <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex h-auto justify-center items-center w-full md:w-3/4 relative px-16">
          {filteredCars.length > 3 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-2 text-4xl ml-5"
            >
              <MdKeyboardArrowLeft />
            </button>
          )}
          <div className="flex overflow-hidden w-full">
            {filteredCars.slice(currentIndex, currentIndex + 3).map((car, index) => (
              <div key={car.name} className="car-container group mx-4 bg-black h-60 w-80 text-center">
                {index === 1 && (
                  <div className="absolute inset-0 z-0">
                    <BlobAnimation />
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="bg-transparent object-fit rounded-lg relative z-10"
                  />
                  <h3 className="text-lg text-black font-bold mt-2 relative z-20">{car.name}</h3>
                  <a
                    href={`${car.link}/learn`}
                    className="primary-button relative z-20 mt-4"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filteredCars.length > 3 && (
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-2 text-4xl mr-5"
            >
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
        <div className="w-full md:w-1/4 p-6 md:space-y-2 lg:space-y-4 border-l border-gray-300 ml-4">
          {SidebarLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => {
                setHoveredCategory(link.name);
                setCurrentIndex(0);
              }}
              className={`flex items-center space-x-4 text-lg text-gray-800 hover:text-black transition-colors duration-300 cursor-pointer ${hoveredCategory === 'All Products' && activeCategory === link.name ? 'font-semibold text-black' : 'font-normal'}`}
            >
              <div
                className={`flex items-center h-4 bg-fixed object-contain bg-no-repeat justify-center cursor-pointer w-4 ${hoveredCategory === 'All Products' && activeCategory === link.name ? 'h-6 w-6' : 'text-black'}`}
              >
                <img className='rounded-full' src={link.icon} alt="machine icon" />
              </div>
              <span className={`transition duration-300 ${hoveredCategory === link.name ? 'font-semibold text-lg' : ''}`}>{link.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mb-4 justify-center w-full">
        <div className="flex justify-center items-center space-x-2" style={{ width: '75%', marginLeft: '-15rem' }}>
          {filteredCars.map((machine, index) => (
            <div
              key={index}
              className={`flex items-center h-4 bg-fixed object-contain bg-no-repeat w-4 justify-center cursor-pointer ${currentIndex === index ? 'h-8 w-8' : 'text-black'}`}
              onClick={() => {
                setCurrentIndex(index);
                setActiveCategory(filteredCars[index].category.split(',')[0]);
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
import {
    FaLeaf,
    FaProjectDiagram,
    FaLightbulb,
    FaRecycle,
  } from "../components";
  import {
    papercup,
    paperplate2,
    paperbowl,
    paperlid,
    paperstraw,
    allproduct,
    paperbag1,
    missionImage,
    companyImage,
    strengthImage,
    pinkCityImage,
  } from "../assets";
  
  export const items = [
    {
      title: "Sustainability",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-green-100",
      icon: FaLeaf,
    },
    {
      title: "Featured Projects",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-purple-100",
      icon: FaProjectDiagram,
    },
    {
      title: "Innovation",
      description: "New technologies in paper manufacturing increase efficiency.",
      color: "bg-blue-100",
      icon: FaLightbulb,
    },
    {
      title: "Recycling",
      description:
        "Recycling initiatives in the paper industry have grown significantly.",
      color: "bg-yellow-100",
      icon: FaRecycle,
    },
  ];
  
  export const titlesWithImages = [
    { title: "Mission & Vision", image: missionImage },
    { title: "Our Company", image: companyImage },
    { title: "Our Strength", image: strengthImage },
    { title: "The Pink City", image: pinkCityImage },
  ];
  // links for navbar
  export const links = [
    {
      name: "AboutUs",
      comp: "AboutUs",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Products",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Application",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Solutions",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Mediaroom",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Other",
      submenu: false,
      sublinks: [],
    },
    // {
    //   name: "Other2",
    //   submenu: false,
    //   sublinks: [],
    // },
    // {
    //   name: "Other3",
    //   submenu: false,
    //   sublinks: [],
    // },
    // {
    //   name: "Other4",
    //   submenu: false,
    //   sublinks: [],
    // },
  ];
  // items for banners.jsx
  export const cars = [
    {
      name: "NS-015",
      image: "paperCupMachineImage",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-016",
      image: "paperCupMachineImage",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-017",
      image: "paperCupMachineImage",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-018",
      image: "paperCupMachineImage",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-019",
      image: "paperCupMachineImage",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-020",
      image: "paperCupMachineImage",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "paper Plate Machine",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "paper Plate Machine",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "paper Plate Machine",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "a",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "b",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "c",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "paperBowlMachine",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
  
    {
      name: "paper Flexo Machine",
      image: "paperFlexoMachineImage",
      category: "Paper Flexo Machine,All Products",
      icon: paperlid,
    },
    {
      name: "paper Bag Machine",
      image: "paperBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    },
    {
      name: "fully Automatic Bag Machine",
      image: "fullyAutomaticBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    },
    {
      name: "b",
      image: "fullyAutomaticBagMachineImage",
      category: "Paper Straw Machine,All Products",
      icon: paperstraw,
    },
  ];
  
  export const SidebarLinks = [
    {
      name: "All Products",
      link: "/all",
      icon: allproduct,
    },
  
    {
      name: "Paper Cup Machine",
      link: "/Paper Cup Machine",
      icon: papercup,
    },
  
    {
      name: "Paper Plate Machine",
      link: "/demo-drive",
      icon: paperplate2,
    },
    {
      name: "Paper Bowl Machine",
      link: "/used-cars",
      icon: paperbowl,
    },
    {
      name: "Paper Flexo Machine",
      link: "/paperFlexoMachine",
      icon: paperlid,
    },
    {
      name: "Paper Bag Machine",
      link: "/Paper Bag Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Straw Machine",
      link: "/help-me-charge",
      icon: paperstraw,
    },
  ];
  