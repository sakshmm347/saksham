"use client";

import Carousel from "@/components/ui/carousel";

const CarouselDemo = () => {
  // Replace these with your own custom images (local or external URLs)
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/images/3.jpg", // Local image in public/images/
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/images/1.jpg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/images/5.jpg",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "/images/4.jpg",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
};

export default CarouselDemo;
