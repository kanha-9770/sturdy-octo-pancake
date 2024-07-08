import React, { useEffect, useRef } from 'react';
import { ImLab } from "react-icons/im";
import { HiOutlineCloudDownload } from "react-icons/hi";

const ProfileLayout = ({
    profileOpen,
    setIsFlagOpen,
    setOpenSearch,
    setProfileOpen,
    setAccountOpen
}) => {
    const toggleProfile = () => {
        setOpenSearch(false);
        setIsFlagOpen(false);
        setAccountOpen(false);
        setProfileOpen(!profileOpen);
    };

    const profileRef = useRef(null);

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setProfileOpen(false);  // Close profile when clicking outside
        }
    };

    useEffect(() => {
        if (profileOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileOpen]);

    return (
        <div ref={profileRef} className="relative flex items-center justify-normal text-left">
            <svg
                onClick={toggleProfile}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-5 w-6 cursor-pointer font-montserrat text-16 font-thin"
            >
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="60" cy="60" r="18" fill="black"></circle>
                <circle cx="128" cy="60" r="18" fill="black"></circle>
                <circle cx="196" cy="60" r="18" fill="black"></circle>
                <circle cx="60" cy="128" r="18" fill="black"></circle>
                <circle cx="128" cy="128" r="18" fill="black"></circle>
                <circle cx="196" cy="128" r="18" fill="black"></circle>
                <circle cx="60" cy="196" r="18" fill="black"></circle>
                <circle cx="128" cy="196" r="18" fill="black"></circle>
                <circle cx="196" cy="196" r="18" fill="black"></circle>
            </svg>
            {profileOpen && (
                <div className="mt-7">
                    <div className="w-4 h-4 left-1 absolute z-50 mt-1 bg-white rotate-45"></div>
                </div>
            )}
            {profileOpen && (
                <div className="absolute top-10 right-[-5rem] h-auto w-80 bg-white text-black p-2 rounded-2xl shadow-lg font-montserrat text-16 font-thin z-10">
                    <div className="grid grid-cols-3 p-4 rounded-2xl font-montserrat bg-[#f4f4f4] justify-center items-center text-16 font-thin gap-4">
                        <div className="flex rounded-lg flex-col justify-center items-center p-4 h-18 w-18 bg-[#fff9f5]">
                            <ImLab className="w-10 h-10 object-contain rounded-full" />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                                alt="Search"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZRwOEqf22XIzYboMCyerdrVp92C_pOU3Qg&s"
                                alt="Business"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                                alt="News"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                                alt="News"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                                alt="News"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                                alt="Search"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                                alt="Search"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                                alt="Search"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                                alt="Search"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <img
                                src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                                alt="Search"
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                        <div className="rounded-lg flex flex-col justify-center items-center p-4 h-18 w-18 bg-[#f9f4f0]">
                            <HiOutlineCloudDownload className="h-10 w-10 rounded-full" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileLayout;
