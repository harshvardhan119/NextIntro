import { Button } from "@/components/ui/MovingBorders";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Proud to be a certified freelancer, bringing skills and expertise to deliver top-notch projects",
    description: "Certified from MTV",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/istockphoto.svg",
    spareImg: "",
    
    
  },
  {
    id: 2,
    title: " open to work from anywhere in the world",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Selected in GSSOC",
    description: "Open source contributor in Dev-geeks",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "With several hackathon experiences and multiple wins, I thrive on solving challenges and delivering innovative solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a application for finding maid ",
    description: "Founder of Maid App",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/maid.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Water Resources Management Dashboard",
    des: "The project involves analyzing the storage capabilities of reservoirs and providing a predictive model to forecast future water requirements",
    img: "/aurorus.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/gsap.svg"],
    link: "https://github.com/harshvardhan119/Aurorus",
  },
  {
    id: 2,
    title: "Wabi-Sabi App for Autistic People",
    des: "A app which help Autistic children and people to overcome from there autism and practice how to show emotion",
    img: "/wabisabi.png",
    iconLists: [],
    link: "https://github.com/harshvardhan119/Wabi-Sabi",
  },
  {
    id: 3,
    title: "Narrow Chat AI - Responsive Animated Landing Page",
    des: "This project features a modern, responsive, and animated landing page designed for NarrowChat AI, an advanced AI-driven communication tool.",
    img: "/narrow.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", ],
    link: "https://github.com/harshvardhan119/Narrowchatdashboard",
  },
  {
    id: 4,
    title: "JWT Authentication with Node.js",
    des: "This project demonstrates how to implement authentication using JSON Web Tokens (JWT) with Node.js and Express.js.",
    img: "/jwt.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg","/jwtlogo.svg"],
    link: "https://github.com/harshvardhan119/Authentication",
  },
];

export const testimonials = [
  {
    quote:
      "Hey everyone! I'm excited to share that we have started our very own Instagram page dedicated to coding and cyber knowledge. It's going to be a platform where we’ll be sharing our coding journey, tutorials, and tips to help fellow enthusiasts improve their programming skills.",
    name: "Amit Singh,Digvijay Dutt,Krishna Goswami",
    title: "Creating Coding website",
  },
  {
    quote:
      "Introducing Wabi-Sabi, an innovative project with a noble mission: to enhance the educational experience for autistic children. Our platform combines the power of quizzes and cutting-edge machine learning technology for emotion detection. But it's not just about functionality; it's about creating an environment that fosters growth and well-being.",
    name: "Amit Singh,Digvijay Dutt,Krishna Goswami,Atharv Verma,Insha Naseem",
    title: "Creating App for Autistic people",
  },
  {
    quote:
      "Scholr, the dynamic and vibrant social media app that redefines the landscape of collaborative learning. With unbridled enthusiasm, Scholr beckons students, scholars, and knowledge enthusiasts into a world where the pursuit of wisdom is not just encouraged but celebrated.",
    name: "Salilesh verma , Harish Singh , Ajey anand , Nilansh Srivastava ",
    title: "Starting own platform to provide Social ",
  },
  {
    quote:
      "I’m beyond excited to announce that Team Code Holic has stormed into the finals of the HackwithIndia Code4Cause2.0 Hackathon, competing against a staggering 400 teams! 🌟 After an intense 36-hour coding marathon, our project has risen to the top, and we couldn’t be more thrilled.",
    name: " Harish Singh, Salilesh Verma, Ajey anand,Ayush Srivastav",
    title: "",
  },
  {
    quote:
      "This project features a modern, responsive, and animated landing page designed for NarrowChat AI, an advanced AI-driven communication tool. The landing page is crafted to effectively showcase the product's features, engage visitors with captivating animations, and provide a seamless user experience across various devices.",
    name: "Karan Kulshreshta (CEO of Narrowchat AI)",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Developer (Marknox Technology)",
    desc: " I have gained a lot of experience of working in  production level and also experience of testing different tools to deploy any website in production level also learn how to use some tools of AWS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer(Narrowchat Al) ",
    desc: "Created A frontend Lading page of a startup Narrow chat AI and learn many thing while building my first frontend for prduction level",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance (TechDice)",
    desc: "I gained experience of creating a complete production level web app and deploying it in AWS , Created a project named Sadhna.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Flutter App Developer",
    desc: "Creating a dynamic and responsive app for ios as well as android to provide feature of finding maid.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/harshvardhan119",
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/HARSHVA03978117?t=niblnpeJZfVvV6yHg2P1cQ&s=09",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/harsh-vardhan-singh-083721257",
  },
];
