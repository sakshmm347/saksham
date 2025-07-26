"use client";
 

import { HoverEffect } from "./card-hover-effect";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { useEffect } from "react";
// AOS
import AOS from "aos";
import "aos/dist/aos.css"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
  }


export const projects = [
  {
    title: "VS Code (Visual Studio Code)",
    description:
      "My primary code editor—lightweight, highly customizable, and packed with extensions that boost productivity and streamline development workflows.",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "React.js",
    description:
      "A powerful JavaScript library for building dynamic and responsive user interfaces. I use React to create modular, high-performance web applications with reusable components.",
    link: "https://react.dev/",
  },
  {
    title: "Next.js",
    description:
      "A full-stack React framework that enables server-side rendering, routing, and API development. It enhances performance and SEO for modern web apps.",
    link: "https://nextjs.org/",
  },
  {
    title: "Canva",
    description:
      "A user-friendly design tool I leverage for creating quick and visually appealing graphics, social media posts, and branding assets.",
    link: "https://www.canva.com/",
  },
  {
    title: "Figma",
    description:
      "My go-to tool for UI/UX design and prototyping. I use Figma for designing layouts, creating design systems, and collaborating with teams in real-time.",
    link: "https://www.figma.com/",
  },
  {
    title: "GSAP (GreenSock Animation Platform)",
    description:
      "An industry-leading animation library I use to bring interfaces to life with smooth, performant, and interactive animations that enhance user engagement.",
    link: "https://gsap.com/",
  },
  
];




// Main Section Component
const SkillsSection = () => {
   
   useEffect(()=>{
     AOS.init({duration:1200})
  })
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-6xl relative top-10"   >
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>
 <div className="max-w-5xl mx-auto px-8" data-aos="fade-up">
      <HoverEffect items={projects} />
    </div>
     
      </div>
    </section>
  );
};

export default SkillsSection;
  