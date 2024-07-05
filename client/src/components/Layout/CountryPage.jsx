import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const CountryPage = ({ isFlagOpen, setIsFlagOpen,setOpenSearch,setProfileOpen }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState({
        name: "India",
        flag: "https://flagcdn.com/in.svg",
    });

    const countries = [
        { name: "India", flag: "https://flagcdn.com/in.svg" },
        { name: "United States", flag: "https://flagcdn.com/us.svg" },
        { name: "European Union", flag: "https://flagcdn.com/eu.svg" },
        { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
        { name: "Australia", flag: "https://flagcdn.com/au.svg" },
        { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    ];

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleFlagOpen = () => {
        setIsFlagOpen(!isFlagOpen)
        setOpenSearch(false);
        setProfileOpen(false);
    }
    return (
        <div className="relative inline-block text-left">
            <div className="flex items-center space-x-4">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md text-sm font-medium text-gray-700 focus:outline-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => handleFlagOpen()}
                >
                    <img
                        src={selectedCountry.flag}
                        alt={`${selectedCountry.name} flag`}
                        className="h-8 w-8 mr-2 rounded-full border-2"
                    />
                    {selectedCountry.name}
                </button>
            </div>
            {isFlagOpen && <div className="py-0">
                <div
                    className="w-4 h-4 left-3 absolute  z-50
                    mt-1 bg-white rotate-45"
                ></div>
            </div>}
            {isFlagOpen && (

                <div
                    className="absolute right-[-12.5rem] mt-2 w-80 bg-white rounded-md shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="flex justify-between p-4 border-b border-gray-200">
                        <span className="text-gray-700 text-sm">
                            Choose a country or region to view content specific to your
                            location and shop online.
                        </span>
                        <button
                            onClick={() => setIsFlagOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <IoMdClose size={20} />
                        </button>
                    </div>
                    <div className="relative p-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-black" />
                        </div>
                        <input
                            type="text"
                            className="w-full px-8 py-2 pl-10 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="max-h-60 overflow-y-auto py-1" role="none">
                        {filteredCountries.map((country, index) => (
                            <button
                                key={index}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                role="menuitem"
                                onClick={() => {
                                    setSelectedCountry(country);
                                    setIsFlagOpen(false);
                                    setSearchTerm("");
                                }}
                            >
                                <img
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                    className="w-6 h-4 mr-2 rounded-sm"
                                />
                                {country.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryPage;
