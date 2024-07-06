import React from 'react';

const SearchBarLayout = () => {
    return (
        <div className="bg-white w-full h-[60vh] p-6 rounded-xl shadow-lg">
            <div className="w-full max-w-2xl mx-auto">
                <form className="flex items-center space-x-1">
                    <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-montserrat text-16 text-sm font-medium text-black bg-gray-100  rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100"
                        type="button"
                    >
                        All categories
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div className="relative w-full border-gray-300">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm   bg-gray-100 rounded-r-lg border-slate-100 focus:ring-blue-500 focus:border-blue-500 font-montserrat text-16 placeholder-black"
                            placeholder="Search Product Name ... "
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-black rounded-r-lg border border-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </form>
                <div className="mt-4 w-full border-t border-black"></div>
            </div>
        </div>
    );
}

export default SearchBarLayout;
