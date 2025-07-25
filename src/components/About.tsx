import React, { useEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./draggable-card";
import experienceImage from '@/assets/img1.jpg';
import projectsImage from '@/assets/img2.jpg';
import clientsImage from '@/assets/img3.jpg';
import teamImage from '@/assets/img4.jpg';
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// AOS
import AOS from "aos";
import "aos/dist/aos.css"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



const About = () => {
  // const stats = [
  //   { image: experienceImage},
  //   { image: projectsImage },
  //   { image: clientsImage},
  //   { image: teamImage}, ]
  const items = [
    {
      title: "Tyler Durden",
      image: experienceImage,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
     image: projectsImage,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        clientsImage,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        teamImage,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  useEffect(()=>{
   AOS.init({duration:1200})
})
  return (
    <section id="about" className="py-20 bg-black  md:h-screen">
      <div className="container mx-auto px-6 relative top-10 ">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 " data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" >
              Passionate designer with a focus on creating exceptional user experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center" data-aos="fade-up">
            {/* Content */}
            <div className="space-y-6 relative md:bottom-40" >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Creating Digital Solutions That Matter
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate UI/UX designer with over 5 years of experience in creating 
                digital experiences that not only look stunning but also provide intuitive 
                and meaningful interactions for users.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My design philosophy centers around understanding user needs, business goals, 
                and technical constraints to create solutions that are both beautiful and functional. 
                I believe great design is invisible – it just works.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not designing, you can find me exploring the latest design trends, 
                learning new tools, or collaborating with amazing teams to bring ideas to life.
              </p>
            </div>

              <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip" >
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 " >
        Happy Memories
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
