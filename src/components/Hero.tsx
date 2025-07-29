import { ArrowDown, Download, Mail } from 'lucide-react';
import React, { useEffect } from "react";
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import profileImage from '@/assets/img-1.jpg';
import profileImage2 from '@/assets/ProfileP.jpg';
import DarkVeil from './DarkVeli';
import Galaxy from './Galaxy';

// AOS
import AOS from "aos";
import "aos/dist/aos.css"

const Hero = () => {
  useEffect(() => {
    AOS.init({duration: 1200})
  })

  return (
    <section id="home" className="relative min-h-screen w-full">
      {/* Background Image Container */}
      <div className="w-full min-h-screen bg-cover bg-center relative">
        
        {/* Galaxy Background for Mobile */}
        <div className='block md:hidden absolute inset-0 z-0 bg-black' 
             style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <Galaxy 
            mouseRepulsion={true}
            mouseInteraction={true}
            density={0.4}
            glowIntensity={0.3}
            saturation={0.8}
            hueShift={220}
          />
        </div>
{/* Dark overlay */}
        <div className="hidden md:block absolute inset-0 z-0 ">
          <DarkVeil />
        </div>
        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 py-8">
          <div className="w-full max-w-4xl mx-auto ">
            <div className="flex flex-col items-center justify-center gap-6 min-h-[calc(100vh-4rem)] py-24">
              
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="hidden md:block rounded-full shadow-lg w-36 h-36 md:w-48 md:h-48 mx-auto object-cover hover:scale-110 duration-300"
                  data-aos="fade-left"
                />
                <img
                  src={profileImage2}
                  alt="Profile"
                  className="block md:hidden rounded-full shadow-lg w-36 h-36 mx-auto object-cover hover:scale-110 duration-300"
                  data-aos="fade-left"
                />
              </div>

              {/* Text Section */}
              <div className="text-center flex-1 flex flex-col justify-center">
                <div data-aos="fade-right">
                  <p className='text-muted-foreground mb-2'>Hello, I'm</p>
                  <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-foreground mb-4 md:mb-6">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      SAKSHAM
                    </span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl md:text-4xl text-muted-foreground mb-4 md:mb-6">
                    UI/UX Designer & Developer
                  </h2>
                  <p className="text-sm sm:text-md text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed px-4">
                    I craft meaningful digital experiences through innovative design solutions.
                    Passionate about creating user-centered designs that not only look beautiful
                    but also solve real-world problems.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
                     data-aos="fade-left">
                  <Button size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group shadow-medium">
                    <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-125 transition-transform" />
                    Get In Touch
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group">
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-125 transition-transform" />
                    Download Resume
                  </Button>
                </div>

                {/* Scroll Indicator */}
                <div className="animate-float hidden md:block">
                  <a
                    href="#about"
                    className="inline-block text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowDown className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;