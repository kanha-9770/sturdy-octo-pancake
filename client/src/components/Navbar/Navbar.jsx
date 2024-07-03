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
const ProfilePage = () => {
    return (
        <div className="absolute top-16 right-0 w-64 bg-white text-black p-4 rounded-lg shadow-lg font-montserrat text-16 font-thin z-50">
            <div className="grid grid-cols-3 font-montserrat text-16 font-thin gap-2">
                <div className="flex flex-col  items-center">
                    <img
                        src="https://i.pinimg.com/originals/96/41/d6/9641d6b5aa4c60eee46459b4274f68b4.png"
                        alt="Account"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Account</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                        alt="Search"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Search</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZRwOEqf22XIzYboMCyerdrVp92C_pOU3Qg&s"
                        alt="Business"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Business</span>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="https://i.pinimg.com/originals/96/41/d6/9641d6b5aa4c60eee46459b4274f68b4.png"
                        alt="Account"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Account</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                        alt="Search"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Search</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZRwOEqf22XIzYboMCyerdrVp92C_pOU3Qg&s"
                        alt="Business"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Business</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                        alt="Account"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Account</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://i.pinimg.com/originals/96/41/d6/9641d6b5aa4c60eee46459b4274f68b4.png"
                        alt="Account"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Account</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://i.pinimg.com/564x/17/f4/e0/17f4e08a32dd227581ed630d3051081c.jpg"
                        alt="Search"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Search</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZRwOEqf22XIzYboMCyerdrVp92C_pOU3Qg&s"
                        alt="Business"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Business</span>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/649/768/original/news-icon-symbol-sign-vector.jpg"
                        alt="Account"
                        className="w-8 h-8 rounded-full"
                    />
                    <span>Account</span>
                </div>
            </div>
        </div>
    );
};

const Navbar = ({ hoveredItem, setHoveredItem, heading, setHeading, isVisible, setIsVisible, show, setShow }) => {
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [isContactFormVisible, setContactFormVisible] = useState(false);

    const toggleContactForm = () => {
        setContactFormVisible(!isContactFormVisible);
    };

    const toggleMenu = () => {
        setOpen(!open);
    };

    const toggleProfile = () => {
        setProfileOpen(!profileOpen);
    };
    const handleMouseLeave = () => {
        setHoveredItem(null);
        setHeading(null);
        setIsVisible(true);
    };
    return (
        <motion.nav
            className={`fixed top-2 left-2 right-2 z-50 mx-auto max-w-screen-2xl  backdrop-blur-[4px] ${hoveredItem ? "rounded-t-lg bg-white" : "rounded-lg"
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
                    className="w-1/5 z-30 hidden h-10 rounded-2xl md:flex md:pr-1 pr-2 justify-start items-center"
                >
                    <img
                        className={`z-30 ${hoveredItem ? "h-8" : "h-8"} w-12`}
                        src={
                            hoveredItem
                                ? "https://www.nesscoindia.com/Assets/images/logo.webp"
                                : "https://www.nesscoindia.com/Assets/images/logo.webp"
                        }
                        alt="Logo"
                    />
                </Link>
                <ul className="w-3/5 h-10 flex-wrap rounded-lg md:flex hidden justify-center  items-center font-montserrat text-16 font-thin relative">
                    <NavLinks hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} heading={heading} setHeading={setHeading} isVisible={isVisible} setIsVisible={setIsVisible} />
                </ul>
                <span
                    onMouseEnter={handleMouseLeave}
                    className={`w-1/5 h-10 z-30 hidden md:flex justify-end items-center gap-2 ${hoveredItem ? "text-black" : "text-black"
                        }`}
                >
                    <div className="flex items-center space-x-1">
                        <img
                            src="https://flagcdn.com/in.svg"
                            alt="India Flag"
                            className="w-4 h-4 object-cover rounded-full border-1"
                        />
                        <div
                            className={`flex items-center justify-center font-montserrat text-16 font-thin cursor-pointer ${hoveredItem ? " text-black " : "text-black"
                                }`}
                        >
                            EN
                        </div>
                    </div>
                    <ImSearch className="font-montserrat text-16 font-thin stroke-0 cursor-pointer" />
                    <svg
                        onClick={toggleProfile}
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
                    <MdOutlineAccountCircle className="font-montserrat text-2xl cursor-pointer" />
                    <span
                        className={`cursor-pointer font-montserrat text-16 font-thin rounded-full p-0 pl-4 pr-4
                            text-white bg-black`}
                        onClick={toggleContactForm}
                    >
                        Contact
                    </span>
                </span>
                {/* {isContactFormVisible && (
            <ContactForm
              isVisible={isContactFormVisible}
              onClose={toggleContactForm}
            />
          )} */}
            </div>
            {profileOpen && <ProfilePage />}
            {/* Mobile nav */}
            <div
                className={`md:hidden fixed bg-white w-full top-20 overflow-y-auto bottom-0 py-20 transition-transform duration-300 transform ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <ul className="bg-white font-montserrat text-16 font-thin border-t-4 border-black h-screen text-center">
                    <NavLinks
                        hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} heading={heading} setHeading={setHeading} isVisible={isVisible} setIsVisible={setIsVisible}
                        open={open}
                        setOpen={setOpen}
                    />
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
