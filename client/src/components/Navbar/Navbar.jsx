import {
    React,
    useState,
    FiMenu,
    FiX,
    ImSearch,
    Link,
    NavLinks,
    motion,
    MdOutlineAccountCircle,
    ContactForm
} from "../index";
import Logo from "../../assets/Logo.png"
import CountryLayout from "../Layout/CountryLayout";
import SearchBarLayout from "../Layout/SearchBarLayout";
import AccountLayout from "../Layout/AccountLayout";
import ProfileLayout from "../Layout/ProfileLayout";




const Navbar = ({ hoveredItem, setHoveredItem, heading, setHeading, isVisible, setIsVisible, show, setShow }) => {
    const [open, setOpen] = useState(false);
    const [isFlagOpen, setIsFlagOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [isContactFormVisible, setContactFormVisible] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)
    const [accountOpen, setAccountOpen] = useState(false);
    const toggleContactForm = () => {
        setContactFormVisible(!isContactFormVisible);
        isFlagOpen(false);
        setOpenSearch(false);
        setProfileOpen(false);
    };
    const toggleMenu = () => {
        setOpen(!open);

    };
    const toggleProfile = () => {
        setOpenSearch(false);
        setIsFlagOpen(false);
        setAccountOpen(false)
        setProfileOpen(!profileOpen);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
        setHeading(null);
        setIsVisible(true);
    };
    const handleSearchBar = () => {
        setIsFlagOpen(false)
        setProfileOpen(false)
        setAccountOpen(false)
        setOpenSearch(!openSearch);
    }
    const handleAccount = () => {
        setIsFlagOpen(false)
        setProfileOpen(false)
        setOpenSearch(false);
        setAccountOpen(!accountOpen);
    }
    return (
        <motion.nav
            className={`fixed top-2 left-2 right-2 z-50 mx-auto max-w-screen-2xl  backdrop-blur-[4px] ${hoveredItem ? "rounded-t-lg" : "rounded-lg"
                }`}
        >
            <div className="flex items-center gap-4 justify-center h-14 px-4 md:px-4 lg:px-6 " >
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
                        src={
                            hoveredItem
                                ? Logo
                                : Logo
                        }
                        alt="Logo"
                    />
                </Link>
                <ul className="w-2/4 h-10 flex-wrap bg-white rounded-3xl md:flex hidden justify-center  items-center font-montserrat text-16 font-thin relative">
                    <NavLinks hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} heading={heading} setHeading={setHeading} isVisible={isVisible} setIsVisible={setIsVisible} />
                </ul>
                <span
                    onMouseEnter={handleMouseLeave}
                    className={`w-1/4 h-10 z-30 hidden md:flex justify-end items-center gap-2 ${hoveredItem ? "text-black" : "text-black"
                        }`}
                >
                    <div className="flex items-center justify-center space-x-1">
                        <CountryLayout isFlagOpen={isFlagOpen} setIsFlagOpen={setIsFlagOpen} setOpenSearch={setOpenSearch} setProfileOpen={setProfileOpen} setAccountOpen={setAccountOpen} />
                    </div>
                    <ImSearch onClick={() => handleSearchBar()} className="font-montserrat text-16 font-thin stroke-0 cursor-pointer" />

                    {

                        openSearch && (
                            <>
                                <div>
                                    <div className=" mt-5 w-4 right-[12.5rem] h-6 absolute z-50 bg-white rotate-45"></div>
                                </div>
                                <div className={`fixed left-0 right-0 mx-auto shadow-lg max-w-screen-2xl rounded-b-xl h-auto z-10 top-14 flex justify-center items-center`}
                                >

                                    <SearchBarLayout />
                                </div>
                            </>
                        )
                    }
                    <svg
                        onClick={() => toggleProfile()}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="h-5 w-6 cursor-pointer font-montserrat text-16 font-thin"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <circle
                            cx="60"
                            cy="60"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="128"
                            cy="60"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="196"
                            cy="60"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="60"
                            cy="128"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="128"
                            cy="128"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="196"
                            cy="128"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="60"
                            cy="196"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="128"
                            cy="196"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                        <circle
                            cx="196"
                            cy="196"
                            r="18"
                            fill={hoveredItem ? "black" : "black"}
                        ></circle>
                    </svg>
                    {
                        profileOpen && <div>
                            <div className=" mt-5  w-4 right-[10.8rem] h-4 absolute z-50 bg-white rotate-45"></div>
                        </div>
                    }
                    <div className="relative">
                        <MdOutlineAccountCircle
                            onClick={() => handleAccount()}
                            className="font-montserrat text-2xl cursor-pointer"
                        />
                        {accountOpen && (
                            <AccountLayout />
                        )}
                    </div>
                    <span
                        className={`cursor-pointer font-montserrat text-16 font-thin rounded-full p-0 pl-4 pr-4
                            text-white bg-black`}
                        onClick={() => toggleContactForm()}
                    >
                        Contact
                    </span>
                </span>
                {isContactFormVisible && (
                    <ContactForm
                        isVisible={isContactFormVisible}
                        onClose={() => toggleContactForm()}
                    />
                )}
            </div>
            {profileOpen && <ProfileLayout/>}
            {/* Mobile nav */}
            <div
                className={`md:hidden fixed bg-white w-full top-20 overflow-y-auto bottom-0 py-20 transition-transform duration-300 transform ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <ul className="bg-white font-montserrat text-16 font-thin border-t-4 border-black h-screen text-center">
                    <NavLinks
                        hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} heading={heading} setHeading={setHeading} isVisible={isVisible} setIsVisible={setIsVisible}
                        open={open}
                        openSearch={openSearch}
                        setOpen={setOpen}
                    />
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
