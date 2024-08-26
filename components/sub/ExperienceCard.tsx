import React from 'react';
import Image from 'next/image';

type ExperienceCardProps = {
  logo: string;
  altText: string;
  title: string;
  period: string;
  description: string;
  link: string;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ logo, altText, title, period, description, link }) => {
  return (
    <div className="hover:scale-110 transition relative md:w-1/3 lg:w-1/4 duration-200 ease-in-out flex-col flex items-center p-4 m-2 overflow-hidden rounded-lg shadow-lg border-2 border-[#2A0E61]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className='flex-col flex items-center'>
          <div className="mb-4">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${logo}`} alt={altText} width={220} height={220} className="rounded-lg" />
          </div>
          <div className="p-4 flex-col flex items-center text-center font-normal ">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-base italic text-gray-500 mb-2">{period}</p>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ExperienceCard;