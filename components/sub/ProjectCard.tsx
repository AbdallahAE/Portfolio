import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="hover:scale-110 transition relative md:w-1/3 lg:w-1/4 cursor-pointer duration-200 ease-in-out w-full md:w-1/3 lg:w-1/4 p-2 relative overflow-hidden rounded-lg shadow-lg border-2 border-[#2A0E61]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
