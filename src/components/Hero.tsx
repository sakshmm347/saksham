import { ArrowDown, Download, Mail } from 'lucide-react';
import React, { useEffect } from "react";
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/img-1.jpg';
import profileImage2 from '@/assets/ProfileP.jpg';
import DarkVeil from './DarkVeli';
import Galaxy from './Galaxy';

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <DarkVeil />
      </div>

      <div className="absolute inset-0 z-0 md:hidden bg-black ">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.4}
          glowIntensity={0.3}
          saturation={0.8}
          hueShift={220}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 0">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          
          {/* Responsive Profile Image */}
          <div className='pt-24'>
            <img
              src={profileImage}
              alt="Profile"
              className="hidden md:block rounded-full shadow-lg w-36 h-36 md:w-48 md:h-48 object-cover hover:scale-110 transition duration-300 mx-auto"
              data-aos="fade-left"
            />
            <img
              src={profileImage2}
              alt="Profile"
              className="block md:hidden rounded-full shadow-lg w-36 h-36 object-cover hover:scale-110 transition duration-300 mx-auto"
              data-aos="fade-left"
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-right">
            <p className="text-muted-foreground">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SAKSHAM
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-muted-foreground mb-4">
              UI/UX Designer & Developer
            </h2>
            <p className="text-md md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              I craft meaningful digital experiences through innovative design solutions. Passionate about creating user-centered designs that not only look beautiful but also solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col  gap-4 items-center justify-center mt-4"
            data-aos="fade-left"
          >
            <Button size="lg" className="px-8 py-6 text-lg group shadow-medium">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float mt-10 hidden md:block">
            <a
              href="#about"
              className="inline-block text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
