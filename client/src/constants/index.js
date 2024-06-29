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
} from "../assets";
import {
  missionImage,
  companyImage,
  strengthImage,
  pinkCityImage,
} from "../Assests";
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
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-016",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-017",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-018",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-019",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-020",
    image: "first",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-021",
    image: "first",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "NS-022",
    image: "first",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "Cybertruck",
    image: "first",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "a",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "b",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "c",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "d",
    image: "second",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },

  {
    name: "Help Me Choose",
    image: "second",
    category: "Paper Lid Machine,All Products",
    icon: paperlid,
  },
  {
    name: "a",
    image: "second",
    category: "Paper Bag Machine,All Products",
    icon: paperbag1,
  },
  {
    name: "b",
    image: "second",
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
    name: "Paper Lid Machine",
    link: "/Paper Lid Machine",
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
