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
  paperBowlMachineImage,
  paperBagMachineImage,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  PCM110WithPLC,
  paperStrawMachine,
  BookServiceImage,
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
    name: "About Us",
    comp: "AboutUs",
  },
  {
    name: "Products",
  },
  {
    name: "Application",
  },
  {
    name: "Solutions",
  },
  {
    name: "Support",
  },

  {
    name: "Resources",
  },
  {
    name: "Videos",
  },
];
// images for about us
export const images = {
  paperBowlMachineImage,
  paperBagMachineImage,
  PCM110WithPLC,
  paperPlateMachineImage,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  paperStrawMachine,
};

// items for banners.jsx
export const Machines = [
  {
    name: "NS-015",
    image: "PCM110WithPLC",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-016",
    image: "PCM110WithPLC",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-017",
    image: "PCM110WithPLC",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-018",
    image: "PCM110WithPLC",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-019",
    image: "PCM110WithPLC",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "NS-020",
    image: "PCM110WithPLC",
    category: "Paper Cup Machine,All Products",
    icon: papercup,
  },
  {
    name: "Paper Bowl Machine 01",
    image: "paperBowlMachineImage",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "Paper Bowl Machine 02",
    image: "paperBowlMachineImage",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "Paper Bowl Machine 03",
    image: "paperBowlMachineImage",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },
  {
    name: "Paper Bowl Machine 04",
    image: "paperBowlMachineImage",
    category: "Paper Bowl Machine,All Products",
    icon: paperbowl,
  },

  {
    name: "NS-021",
    image: "paperPlateMachineImage",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "NS-022",
    image: "paperPlateMachineImage",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "Cybertruck",
    image: "paperPlateMachineImage",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },
  {
    name: "Cybertruck2",
    image: "paperPlateMachineImage",
    category: "Paper Plate Machine,All Products",
    icon: paperplate2,
  },

  {
    name: "Paper Flexo Machine",
    image: "paperFlexoMachineImage",
    category: "Paper Flexo Machine,All Products",
    icon: paperlid,
  },
  {
    name: "Paper Bag Machine",
    image: "paperBagMachineImage",
    category: "Paper Bag Machine,All Products",
    icon: paperbag1,
  },
  {
    name: "Paper Bag Machine new",
    image: "fullyAutomaticBagMachineImage",
    category: "Paper Bag Machine,All Products",
    icon: paperbag1,
  },

  {
    name: "Paper Straw Machine",
    image: "paperStrawMachine",
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
    name: "Paper Bowl Machine",
    link: "/used-Machine",
    icon: paperbowl,
  },

  {
    name: "Paper Plate Machine",
    link: "/demo-drive",
    icon: paperplate2,
  },

  {
    name: "Paper Flexo Machine",
    link: "/Paper Flexo Machine",
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
  {
    name: "Paper Lunch Box Machine",
    link: "/help-me-charge",
    icon: paperstraw,
  },
];
// support itemm
export const supporItem = [
  { title: "Book a Service", image: BookServiceImage },
  { title: "Genuine Parts", image: BookServiceImage },
  { title: "User Guide", image: BookServiceImage },
  { title: "Machine Warranty", image: BookServiceImage },
  { title: "Additional Item 1", image: BookServiceImage },
  { title: "Additional Item 2", image: BookServiceImage },
  { title: "Additional Item 3", image: BookServiceImage },
  { title: "Additional Item 4", image: BookServiceImage },
  { title: "Additional Item 5", image: BookServiceImage },
];
