import React, { useEffect } from "react";
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

// AOS
import AOS from "aos";
import "aos/dist/aos.css"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      description: 'A modern e-commerce mobile application with intuitive user experience and seamless checkout process.',
      image: project1,
      tags: ['Mobile Design', 'UI/UX', 'Figma', 'Prototyping'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Comprehensive data visualization dashboard for business analytics with interactive charts and insights.',
      image: project2,
      tags: ['Web Design', 'Dashboard', 'Data Viz', 'React'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      image: project3,
      tags: ['Branding', 'Logo Design', 'Identity', 'Adobe CC'],
      demoLink: '#',
      codeLink: '#'
    }
  ];
  useEffect(()=>{
       AOS.init({duration:1200})
    })

  return (
    <section id="portfolio" className="py-20  md:h-screen " >
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
              <Card key={project.id} className="group overflow-hidden hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                    
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Tags */}
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
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg group">
              View More Projects
              <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;