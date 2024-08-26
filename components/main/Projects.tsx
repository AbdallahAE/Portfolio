import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projects_Info } from "@/constants";

const Projects = () => {
  return (
 
    <section
    id="projects"
    className="flex flex-col items-center justify-evenly gap-3 h-full relative overflow-hidden pb-80 py-20"
    style={{ transform: "scale(1.0" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full justify-center flex flex-wrap md:flex-row gap-10 px-10">
        {Projects_Info.map((job, index) => (
          <ProjectCard
            key={index}
            src={job.src}
            title={job.title}
            description={job.description}
            link={job.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
