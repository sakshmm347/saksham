import { ArrowDown, Download, Mail } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/ProfileP.jpg";
import profileImage2 from "@/assets/SakshamPF.png";
import DarkVeil from "./DarkVeli";
import Galaxy from "./Galaxy";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-x-hidden"
    >
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
      <div className="relative z-10 flex items-center justify-center md:h-[110vh] h-[120vh] px-6 ">
        <div className="w-full mx-auto flex flex-col items-center text-center gap-6">
          {/* Mobile Profile Image */}
          <img
            src={profileImage}
            height="1000"
            width="1000"
            className="h-36 w-36 md:hidden block rounded-full object-cover bg-slate-400 group-hover/card:shadow-xl"
            alt="Saksham Basson profile photo"
            data-aos="fade-left"
          />

          {/* Heading */}
          <h1
            className="font-bold text-foreground md:mt-0 md:mb-10
                       text-5xl sm:text-6xl lg:text-[120px] xl:text-[120px] 2xl:text-[180px]"
          >
            <span
              className="hidden md:block outline-text"
              data-aos="fade-down"
            >
              HI, I'M SAKSHAM
            </span>
            <span
              className="block text-primary md:hidden"
              data-aos="fade-right"
            >
              HI, I'M SAKSHAM
            </span>
          </h1>

          {/* Flex container for text + image */}
          <div className="w-full flex flex-col md:flex-row items-center 
                          md:gap-20 lg:gap-28 xl:gap-40 2xl:gap-52 
                          max-w-[1400px] mx-auto">
            {/* Text Section */}
            <div
              className="px-6 md:px-10 text-center "
              data-aos="fade-right"
            >
              <h2
                className="font-semibold text-muted-foreground mb-4
                           text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
              >
                UI/UX Designer & Developer
              </h2>
              <p className="text-md sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
                I craft meaningful digital experiences through innovative design
                solutions. Passionate about creating user-centered designs that
                not only look beautiful but also solve real-world problems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-3 justify-center items-center mt-6">
                <Button
                  size="lg"
                  className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg group shadow-medium"
                  onClick={() =>
                    (window.location.href = "mailto:youremail@example.com")
                  }
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg group"
                  onClick={() => window.open("/resume.pdf")}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                  Download Resume
                </Button>
              </div>

              {/* Scroll Down Indicator */}
              <div className="animate-float mt-10 hidden md:block">
                <a
                  href="#about"
                  className="inline-block text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowDown className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Profile Image (Right Side) */}
           {/* Profile Image (Right Side) */}
<div className="relative scale-110 2xl:scale-125 transition duration-500">
  <img
    src={profileImage2}
    alt="Saksham Basson - UI/UX Designer & Developer"
    className="hidden md:block w-48 sm:w-60 lg:w-72 xl:w-96 object-cover mx-auto 
                md:-mt-6 2xl:-mt-10 relative z-20"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
