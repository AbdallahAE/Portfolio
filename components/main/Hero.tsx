import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[-100] object-cover "
      >
        <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/blackhole.webm`} type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
