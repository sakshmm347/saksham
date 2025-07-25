import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css"

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sakshmm347@email.com',
      href: 'mailto:sakshmm347@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '7051896282',
      href: 'tel:7051896282'
    },
    {
      icon: MapPin,
      label: 'Jammu',
      value: 'Jammu & Kashmir, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];
    useEffect(()=>{
         AOS.init({duration:1200})
      })
  

  return (
    <section id="contact" className="py-20 md:h-screen ">
      <div className="container mx-auto px-6 relative top-10 " data-aos="fade-up">
        <div className="max-w-6xl mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12" data-aos="fade-up">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Talk About Your Project
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a specific project in mind or just want to chat about design, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="group hover:shadow-soft transition-all duration-300 animate-slide-up border-border/50" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4">
                      <a href={item.href} className="flex items-center space-x-4 group-hover:text-primary transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground font-medium">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="animate-slide-up border-border/50" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="Saksham" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="sakshmm347@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="Project inquiry" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full group shadow-medium">
                    <Send className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;