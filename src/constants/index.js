
import {
  logo,
  curetime,
  forever,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,

  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  mittalalliance,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Sover",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  // {
  //   name: "framer",
  //   icon: framer,
  // },


  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },


  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },

  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "React.js",
    company_name: "Mittal Alliance",
    icon: tekisky,
    iconBg: "#383E56",
    date: "March 2025 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "You worked perfectly as a frontend developer, delivering enhanced work always on time. Truly reliable and skilled!",
    name: "Dipesh",
    designation: "Frontend Developer",
    company: "Mittal Alliance",
    image: mittalalliance, // Add your image import
  },
  {
    testimonial:
      "During our college hackathon, you built a flawless backend. We doubted it could be done — but you proved us wrong!",
    name: "Daksh",
    designation: "Backend Lead",
    company: "College Hackathon Team",
    image: firstTestimonial, // Add your image import
  },
];

const projects = [
  {
    name: "Forever E-commerce Platform",
    description:
      "Forever is a full-featured e-commerce platform offering a variety of clothing collections for kids, men, and women. It supports multiple payment methods including Stripe, Razorpay, and Cash on Delivery (COD) for a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: forever, // update this to your actual image import for Forever
    source_code_link: "https://github.com/hustlers9720/Forever-e-commerce",
  },
  {
    name: "Cure Time – Doctor Appointment App",
    description:
      "Cure Time is a modern web app that allows users to book doctor appointments online and make payments digitally. It streamlines the healthcare booking process for both doctors and patients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: curetime, // make sure this variable is correctly imported
    source_code_link: "https://github.com/hustlers9720/cure-time",
  },
];


export { services, technologies, experiences, testimonials, projects };
