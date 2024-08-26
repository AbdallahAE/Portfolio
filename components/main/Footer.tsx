import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed
} from "react-icons/rx";

const Footer = () => {
  return (
    
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <div className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://github.com/AbdallahAE" className="text-[15px] ml-[6px]">
                            Github
                        </a>
                    </div>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <div className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <a href="https://www.linkedin.com/in/abdallah-elsayed-2b6a5a23b/" className="text-[15px] ml-[6px]">
                            Linkedin
                        </a>
                    </div>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <div className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxEnvelopeClosed />
                        <a href="mailto:abdallahae15@gmail.com" className="text-[15px] ml-[6px]">
                            abdallahae15@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer