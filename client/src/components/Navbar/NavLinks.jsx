import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Banners from "../Layout/Banner";
import { links } from "../../constants/index";
import Services from "../Layout/Service";
import Layout from "../Layout/Layout";
import gsap from "gsap";

const NavLinks = ({ hoveredItem, setHoveredItem, open, heading, setHeading, isVisible, setIsVisible }) => {
    const animateref = useRef(null);
    const listItemRefs = useRef([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (hoveredItem) {
            if (isVisible) {
                gsap.fromTo(
                    animateref.current,
                    { y: '-20%', opacity: 0 },
                    { y: '0%', opacity: 1, duration: 2, ease: 'power3.out', delay: 0.1 }
                );
                setShow(true);
                setIsVisible(false);
            }
        } else {
            gsap.to(animateref.current, { y: '-100%', opacity: 0, duration: 0.8, ease: 'power3.in' });
        }
    }, [hoveredItem]);


    const handleMouseEnternew = (linkName) => {
        setHeading(linkName);
    };

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
        setHeading(item);
    };

    return (
        <>
            {links.map((link, index) => (
                <div
                    key={link.name}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    className="text-left md:cursor-pointer group relative"
                >
                    <div className="hidden md:flex">
                        <h6
                            className={`z-30 flex justify-center items-center md:pr-1 pr-2`}
                            onMouseEnter={() => handleMouseEnternew(link.name)}
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                            }}
                        >
                            <p
                                ref={el => listItemRefs.current[index] = el}
                                className={`flex menuDrop item-center p-0 font-montserrat text-16 pl-2 pr-2 justify-center link-name ${hoveredItem
                                    ? heading === link.name
                                        ? "bg-black text-white rounded-full"
                                        : "text-black"
                                    : "text-black"
                                    } text-base rounded-full`}
                            >
                                {link.name}
                            </p>
                        </h6>

                        {hoveredItem === link.name && (
                            <div
                                ref={animateref}
                                className={`fixed left-0 right-0 mx-auto shadow-lg max-w-screen-2xl rounded-b-xl h-auto z-10 top-14 flex justify-center items-center`}
                            >
                                <div
                                    id="borderline"
                                    className="absolute top-0 left-0 w-full"
                                />
                                {link.comp === "AboutUs" && (
                                    <Layout
                                        hoveredItem={hoveredItem}
                                        setHoveredItem={setHoveredItem}
                                        heading={heading}
                                        setHeading={setHeading}
                                        isVisible={isVisible}
                                        setIsVisible={setIsVisible}
                                        show={show}
                                        setShow={setShow}
                                    />
                                )}
                                {link.name === "Products" && <Banners
                                    hoveredItem={hoveredItem}
                                    setHoveredItem={setHoveredItem}
                                    heading={heading}
                                    setHeading={setHeading}
                                    isVisible={isVisible}
                                    setIsVisible={setIsVisible}
                                />}
                                {link.name === "Application" && <Layout hoveredItem={hoveredItem}
                                    setHoveredItem={setHoveredItem}
                                    heading={heading}
                                    setHeading={setHeading}
                                    isVisible={isVisible}
                                    setIsVisible={setIsVisible} />}
                                {link.submenu &&
                                    link.comp !== "AboutUs" &&
                                    link.name !== "Products" &&
                                    link.name !== "Application" && (
                                        <div className="bg-white shadow-lg w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
                                            {link.sublinks.map((mysublinks) => (
                                                <div key={mysublinks.Head} className="text-center">
                                                    <h1 className="text-lg font-montserrat text-16">
                                                        {mysublinks.Head}
                                                    </h1>
                                                    <ul>
                                                        {mysublinks.sublink.map((slink) => (
                                                            <li
                                                                className="text-sm text-gray-600 my-2.5"
                                                                key={slink.name}
                                                            >
                                                                <Link
                                                                    to={slink.link}
                                                                    className="hover:text-primary"
                                                                >
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        )}
                    </div>
                    {open && (
                        <div className="md:hidden w-full bg-inherit">
                            <div
                                className={`py-2 pl-4 border-b border-gray-300 text-black flex justify-between items-center`}
                                onClick={() => {
                                    heading !== link.name
                                        ? setHeading(link.name)
                                        : setHeading("");
                                }}
                            >
                                <p className="text-lg">{link.name}</p>
                                <span>{heading === link.name ? "-" : "+"}</span>
                            </div>
                            {heading === link.name && (
                                <div className="pl-4 pb-2">
                                    {link.comp === "AboutUs" && <Services />}
                                    {link.name === "Products" && <Banners />}
                                    {link.name === "Application" && <Application />}
                                    {link.submenu &&
                                        link.comp !== "AboutUs" &&
                                        link.name !== "Products" &&
                                        link.name !== "Application" && (
                                            <div>
                                                {link.sublinks.map((mysublinks) => (
                                                    <div key={mysublinks.Head} className="text-center">
                                                        <h1 className="text-lg font-montserrat text-16">
                                                            {mysublinks.Head}
                                                        </h1>
                                                        <ul>
                                                            {mysublinks.sublink.map((slink) => (
                                                                <li
                                                                    className="text-sm text-gray-600 my-2.5"
                                                                    key={slink.name}
                                                                >
                                                                    <Link
                                                                        to={slink.link}
                                                                        className="hover:text-primary"
                                                                    >
                                                                        {slink.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default NavLinks;
