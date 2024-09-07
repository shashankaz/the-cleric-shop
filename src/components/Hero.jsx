"use client";

import { useState, useEffect } from "react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const sliders = [
    <HeroSlider
      key={0}
      src={
        "https://images.pexels.com/photos/27035626/pexels-photo-27035626/free-photo-of-a-woman-wearing-heels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    />,
    <HeroSlider
      key={1}
      src={
        "https://images.pexels.com/photos/27875083/pexels-photo-27875083/free-photo-of-a-woman-with-long-hair-and-a-brown-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    />,
    <HeroSlider
      key={2}
      src={
        "https://images.pexels.com/photos/28155857/pexels-photo-28155857/free-photo-of-a-woman-in-a-pink-dress-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [sliders.length]);

  return (
    <div className="h-[452px] w-full overflow-hidden">
      {sliders[currentIndex]}
    </div>
  );
};

export default Hero;
