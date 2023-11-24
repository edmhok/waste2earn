import React from "react";
import HeroContent from "./sub/HeroContent";
import blackhole from ".././assets/blackhole.webm"

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute -top-[270px]  h-full w-full left-0 z-0 object-cover "
      >
        <source src={blackhole} type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
