import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import profileImage from '@/assets/img-1.jpg'; // Replace with your image
import DarkVeil from './DarkVeli';
import Galaxy from './Galaxy';



const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden ">
      {/* Background Image Container */}
      <div
        className="w-full h-screen bg-cover bg-center relative "
        
      >
        {/* Dark overlay */}
        <div className="hidden md:block absolute inset-0 z-0 ">
          <DarkVeil />
        </div>
  

 <div className='block md:hidden absolute inset-0 z-0 bg-black' style={{ width: '100%', height: '100%', position: 'relative' }}>
  <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={0.4}
    glowIntensity={0.3}
    saturation={0.8}
    hueShift={220 }
  />
</div>


        

        {/* Centered Content */}
        <div className="absolute inset-0 flex  items-center justify-center z-10 top-11">
          <div className=" mx-auto px-6 ">
            <div className="flex flex-col relative items-stretch  justify-between gap-4   ">
               {/* Image Section */}
              <div  >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="rounded-full  shadow-lg w-36  h-36 md:w-48 md:h-48 max-w-sm mx-auto object-cover hover:scale-110 duration-300 "
                />
              </div>

              {/* Text Section */}
              <div className="text-center  flex-1   ">
                <p className='text-muted-foreground'>Hello, I'm</p>
                <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent ">
                    SAKSHAM
                  </span>
                </h1>
                <h2
                  className="text-2xl md:text-4xl text-muted-foreground mb-6 "
                  
                >
                  UI/UX Designer & Developer
                </h2>
                <p
                  className="text-sm text-muted-foreground mb-8 max-w-xl  leading-relaxed"
                  
                >
                  I craft meaningful digital experiences through innovative design solutions.
                  Passionate about creating user-centered designs that not only look beautiful
                  but also solve real-world problems.
                </p>

                {/* CTA Buttons */}
                <div
                  className=" flex flex-col  gap-4 justify-center md:justify-start items-center"
                  
                >
                  <Button size="lg" className="px-8 py-6 text-lg group shadow-medium  ">
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform " />
                    Get In Touch
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg group ">
                    <Download className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                    Download Resume
                  </Button>
                </div>

                {/* Scroll Indicator */}
                <div className="animate-float mt-16 hidden md:block">
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
