import React, { useEffect } from "react";
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import omni from '@/assets/omnifood.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'YP Gold Spices',
      description: 'A fully functional online spices store with features like bulking order, navigation to online stores and whatsapp integration',
      image: 'https://www.weularity.com/img/ypgold.png',
      tags: ['UI/UX', 'Dashboard', 'Spices' , 'Mobile Responsive'],
      demoLink: 'https://www.ypgoldspices.com/', // update with actual link
      codeLink: '#'
    },
    {
      id: 2,
      title: 'OmniFood ',
      description: 'The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.',
      image: omni,
      tags: ['Web Design', 'Figma', 'Mobile Responsive', 'Food'],
      demoLink: 'https://omni-food-project-sable.vercel.app/', // update with actual link
      codeLink: '#'
    },
    {
      id: 3,
      title: 'The Aesthetic Trove',
      description: 'A sleek modern Jewelry Website for The Aesthetic Trove. Fully functional online store with advanced features like product filtering, cart, and payment integration.',
      image: 'https://www.weularity.com/img/aesthetic.png',
      tags: ['Branding', 'Jewellery', 'WhatsApp Integration', 'E-commerce'],
      demoLink: 'https://www.theaesthetictrove.com/', // update with actual link
      codeLink: '#'
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="portfolio" className="py-20 md:min-h-screen">
      <div className="container mx-auto px-6 relative top-10" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent design projects and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Clickable Image Section */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {/* Optional: Add icons or buttons */}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => window.open("https://www.weularity.com/previouswork", "_blank")}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg group  duration-300"
            >
              View More Projects
              <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
