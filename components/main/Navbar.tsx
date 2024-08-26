import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full h-full flex flex-row items-center justify-around">
        <div className="w-[500px] h-full flex flex-row items-center justify-around">
          <div className="flex items-center justify-around w-full h-auto border border-[#7042f861] bg-[#0300145e] m-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-violet-400">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-violet-400">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer hover:text-violet-400">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer hover:text-violet-400">
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
