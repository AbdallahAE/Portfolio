import {
  Backend_skill,
  Frontend_skill,
  Development_tools,
  Game_development,
  Devops_tools,
  Programming_langs,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.Image}`}
            name={image.skill_name}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.Image}`}
            name={image.skill_name}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Devops_tools.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.Image}`}
            name={image.skill_name}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Development_tools.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.Image}`}
            name={image.skill_name}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Game_development.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.Image}`}
            name={image.skill_name}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Programming_langs.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.Image}`}
            name={image.skill_name}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cards-video.webm`}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
