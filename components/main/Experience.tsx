"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import ExperienceCard from "@/components/sub/ExperienceCard";
import { jobExperiences } from "@/constants/index"

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-evenly gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      Work Experiences
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center md:flex-row gap-10 px-10">
        {jobExperiences.map((job, index) => (
          <ExperienceCard
            key={index}
            logo={job.logo}
            altText={job.altText}
            title={job.title}
            period={job.period}
            description={job.description}
            link={job.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
