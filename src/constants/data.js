import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  // faJquery,
  faHtml5,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { images } from "./index";
import { faCube } from "@fortawesome/free-solid-svg-icons";

const Skills = [
  {
    name: "HTML5",
    icon: faHtml5,
  },
  {
    name: "CSS3",
    icon: faCss3Alt,
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
  },
  {
    name: "Tailwind",
    iconAlt: <SiTailwindcss />,
  },
  {
    name: "Sass",
    icon: faSass,
  },
  {
    name: "JavaScript",
    icon: faSquareJs,
  },
  {
    name: "TypeScript",
    iconAlt: <SiTypescript />,
  },
  {
    name: "React-js",
    icon: faReact,
  },
  {
    name: "Next-Js",
    iconAlt: <SiNextdotjs />,
  },
  {
    name: "Redux",
    iconAlt: <SiRedux />,
  },
  {
    name: "Three-js",
    icon: faCube,
  },
  {
    name: "Git",
    iconAlt: <FaGitAlt />,
  },
  {
    name: "Github",
    icon: faGithub,
  },
];

const projects = [
  {
    name: "AlbdahLaw",
    img: images.project13,
    github: "https://github.com/MostafaHosny97/Badah",
    website: "https://www.albdahlaw.com/",
  },
  {
    name: "Rkeen",
    img: images.project14,
    github: "https://github.com/MostafaHosny97/rkeen",
    website: "https://www.rkeen.org/",
  },
  {
    name: "Ecommerce-FreshCart",
    img: images.project15,
    github: "https://github.com/MostafaHosny97/Fresh-Cart",
    website: "https://mostafahosny97.github.io/Fresh-Cart/",
  },
  {
    name: "Popcornflix",
    img: images.project12,
    github: "https://github.com/MostafaHosny97/Popcornflix",
    website: "https://mostafahosny97.github.io/Popcornflix/",
  },
  {
    name: "PrayerBeads",
    img: images.project16,
    github: "https://github.com/MostafaHosny97/prayerbeads",
    website: "https://mostafahosny97.github.io/prayerbeads/",
  },
  {
    name: "CardReader",
    img: images.project2,
    github: "https://github.com/MostafaHosny97/Credit-Card-Reader",
    website: "https://mostafahosny97.github.io/Credit-Card-Reader/",
  },
  {
    name: "FurnitureStore",
    img: images.project9,
    github: "https://github.com/MostafaHosny97/furniture3D",
    website: "https://mostafahosny97.github.io/furniture3D/",
  },
  {
    name: "Yummy",
    img: images.project4,
    github: "https://github.com/MostafaHosny97/Yummy-Website",
    website: "https://mostafahosny97.github.io/Yummy-Website/",
  },
  {
    name: "Weather",
    img: images.project11,
    github: "https://github.com/MostafaHosny97/Weather-Website",
    website: "https://mostafahosny97.github.io/Weather-Website/",
  },
  {
    name: "CRUD",
    img: images.project7,
    github: "https://github.com/MostafaHosny97/CRUD-System",
    website: "https://mostafahosny97.github.io/CRUD-System/",
  },
  {
    name: "Portfolio",
    img: images.project1,
    github: "https://github.com/MostafaHosny97/Portfolio-Old",
    website: "https://mostafahosny97.github.io/Portfolio-Old/",
  },

  // {
  //   "name": "Weather App",
  //   "img": images.project11,
  //   "github": "https://github.com/zaki164/Weather",
  //   "website": "https://zaki164.github.io/Weather",
  //   "small": "small",
  // },
  // {
  //   "name": "Courselist App",
  //   "img": images.project1,
  //   "github": "https://github.com/zaki164/Courselist",
  //   "website": "https://zaki164.github.io/Courselist",
  //   "small": "small",
  // },
  // {
  //   "name": "Todolist App",
  //   "img": images.project10,
  //   "github": "https://github.com/zaki164/Todolist",
  //   "website": "https://zaki164.github.io/Todolist",
  //   "small": "small",
  // },
];

const data = {
  Skills,
  projects,
};

export default data;
