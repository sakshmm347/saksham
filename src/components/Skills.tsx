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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
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
        <div className="text-center mb-16">
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
  