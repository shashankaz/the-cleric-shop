"use client";

import { useState, useEffect } from "react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const sliders = [
    <HeroSlider
      key={0}
      title="Discover Our Latest Collection"
      src={
        "https://images.pexels.com/photos/27035626/pexels-photo-27035626/free-photo-of-a-woman-wearing-heels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    />,
    <HeroSlider
      key={1}
      title="Fresh Styles Just Arrived!"
      src={
        "https://images.pexels.com/photos/27875083/pexels-photo-27875083/free-photo-of-a-woman-with-long-hair-and-a-brown-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    />,
    <HeroSlider
      key={2}
      title="New Products, New Trends"
      src={
        "https://images.pexels.com/photos/28155857/pexels-photo-28155857/free-photo-of-a-woman-in-a-pink-dress-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    />,
    <HeroSlider
      key={3}
      title="Be the First to Shop New Arrivals"
      src={
        "https://images.pexels.com/photos/19797382/pexels-photo-19797382/free-photo-of-beautiful-model-in-oregon-wearing-a-forest-green-linen-dress-portrait-taken-by-portland-photographer-lance-reis-on-my-sonya7iii-on-location.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    />,
    <HeroSlider
      key={4}
      title="Elevate Your Style with Us"
      src={
        "https://images.pexels.com/photos/27782341/pexels-photo-27782341/free-photo-of-https-www-thesungwoo-com-new-page-93.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    />,
    <HeroSlider
      key={5}
      title="Discover What's Trending"
      src={
        "https://images.pexels.com/photos/9736876/pexels-photo-9736876.jpeg?auto=compress&cs=tinysrgb&w=800"
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
