import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (<div>
    <h1 style={{color:"white",fontSize:"40px",position:"relative",textAlignLast:"center"}}>Some Of my Tech Skills</h1>
    <div className="max-w-5xl mx-auto px-8">
        
      <HoverEffect items={projects} />
    </div></div>
  );
}
export const projects = [
  {
    title: "Frontend",
    description:
      "HTML, CSS, JS, React, Next, TypeScript, MUI, Tailwind, Bootstrap,  UI/UX Libraries and Frameworks, Aceternity UI ",
    link: "",
  },
  {
    title: "Backend",
    description:
      " Node.js, Express.js, Django, Flask, Fastapi, Larvel, Firebase, Fastn",
    link: "",
  },
  {
    title: "Database",
    description:
      "MySQL, MongoDB, HeidlSQL, MariaDB, FireStore, Supabase",
    link: "",
  },
  {
    title: "Programming",
    description:
      "C, C++, python, Java Script, Type Script",
    link: "",
  },
  {
    title: "Tools",
    description:
      "Git, Github, Figma, VScode, Postman, Android Studio, Notion, Netlify, Vercel, Webpack  ",
    link: "",
  },
  {
    title: "App Development",
    description:
      "Dart Programming, Flutter Framework, User Interface Design, Backend Integration, Cross-Platform Development ",
    link: "",
  },
];
