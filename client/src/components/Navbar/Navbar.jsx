import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, Link, motion, MdOutlineAccountCircle, NavLinks, ContactForm } from "../index";
import Logo from "../../assets/Logo.png";
import CountryLayout from "../Layout/CountryLayout";
import SearchBarLayout from "../Layout/SearchBarLayout";
import AccountLayout from "../Layout/AccountLayout";
import ProfileLayout from "../Layout/ProfileLayout";

const Navbar = ({ hoveredItem, setHoveredItem, heading, setHeading }) => {
    const [open, setOpen] = useState(false);
    const [isFlagOpen, setIsFlagOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [isContactFormVisible, setContactFormVisible] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const accountRef = useRef(null);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setHeading(null);
        setIsVisible(true);
    };

    const handleAccount = () => {
        setIsFlagOpen(false);
        setProfileOpen(false);
        setOpenSearch(false);
        setAccountOpen(!accountOpen);
    };

    const handleClickOutside = (event) => {
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setAccountOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isFlagOpen || openSearch || profileOpen || accountOpen) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, [isFlagOpen, openSearch, profileOpen, accountOpen]);

    useEffect(() => {
        console.log('isFlagOpen:', isFlagOpen);
        console.log('openSearch:', openSearch);
        console.log('profileOpen:', profileOpen);
        console.log('accountOpen:', accountOpen);
        console.log('isVisible:', isVisible);
    }, [isFlagOpen, openSearch, profileOpen, accountOpen, isVisible]);

    return (
        <motion.nav
            className={`navbar fixed top-2 left-2 right-2 z-50 mx-auto max-w-screen-2xl backdrop-blur-[4px] ${hoveredItem ? "rounded-t-lg" : "rounded-lg"}`}
        >
            <div className="flex items-center gap-4 justify-center h-14 px-4 md:px-4 lg:px-6">
                <span
                    className="text-2xl md:text-3xl cursor-pointer md:hidden"
                    onClick={toggleMenu}
                >
                    {open ? <FiX /> : <FiMenu />}
                </span>
                <Link
                    onMouseEnter={handleMouseLeave}
                    to={"/"}
                    className="w-1/4 z-30 hidden h-10 rounded-2xl md:flex md:pr-1 pr-2 justify-start items-center"
                >
                    <img
                        className={`z-30 ${hoveredItem ? "h-6" : "h-6"} w-16`}
                        src={Logo}
                        alt="Logo"
                    />
                </Link>
                <ul className="w-2/4 h-10 flex-wrap bg-white rounded-3xl md:flex hidden justify-center items-center font-montserrat text-16 font-thin relative">
                    <NavLinks
                        hoveredItem={hoveredItem}
                        setHoveredItem={setHoveredItem}
                        heading={heading}
                        setHeading={setHeading}
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                </ul>
                <span
                    onMouseEnter={handleMouseLeave}
                    className={`w-1/4 h-10 z-30 hidden md:flex justify-end items-center gap-2 ${hoveredItem ? "text-black" : "text-black"}`}
                >
                    <div className="flex items-center justify-center space-x-1">
                        <CountryLayout
                            isFlagOpen={isFlagOpen}
                            setIsFlagOpen={setIsFlagOpen}
                            setOpenSearch={setOpenSearch}
                            setProfileOpen={setProfileOpen}
                            setAccountOpen={setAccountOpen}
                        />
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                        <SearchBarLayout
                            isFlagOpen={isFlagOpen}
                            setIsFlagOpen={setIsFlagOpen}
                            openSearch={openSearch}
                            setOpenSearch={setOpenSearch}
                            setProfileOpen={setProfileOpen}
                            setAccountOpen={setAccountOpen}
                        />
                    </div>
                    <div className="flex items-center justify-center skew-x-1">
                        <ProfileLayout
                            profileOpen={profileOpen}
                            setIsFlagOpen={setIsFlagOpen}
                            openSearch={openSearch}
                            setOpenSearch={setOpenSearch}
                            setProfileOpen={setProfileOpen}
                            setAccountOpen={setAccountOpen}
                        />
                    </div>
                    <div className="relative">
                        <MdOutlineAccountCircle
                            onClick={handleAccount}
                            className="font-montserrat text-2xl cursor-pointer"
                        />
                        {accountOpen && (
                            <div ref={accountRef}>
                                <AccountLayout />
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                        <ContactForm
                            isContactFormVisible={isContactFormVisible}
                            setContactFormVisible={setContactFormVisible}
                            isVisible={isVisible}
                            setIsFlagOpen={setIsFlagOpen}
                            setOpenSearch={setOpenSearch}
                            setProfileOpen={setProfileOpen}
                            setAccountOpen={setAccountOpen}
                        />
                    </div>
                </span>
            </div>
            {open && (
                <div
                    className={`md:hidden fixed bg-white w-full top-20 overflow-y-auto bottom-0 py-20 transition-transform duration-300 transform ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <ul className="bg-white font-montserrat text-16 font-thin border-t-4 border-black h-screen text-center">
                        <NavLinks
                            hoveredItem={hoveredItem}
                            setHoveredItem={setHoveredItem}
                            heading={heading}
                            setHeading={setHeading}
                            isVisible={isVisible}
                            setIsVisible={setIsVisible}
                            open={open}
                            openSearch={openSearch}
                            setOpen={setOpen}
                        />
                    </ul>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
