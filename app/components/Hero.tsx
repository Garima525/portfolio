"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { useState, useEffect } from "react";

const Hero = ({data}) => {
  
  let url = data?.data?.post?.featuredImage?.url;
  return (
    <div className="pb-20 pt-36">
      <div className="flex gap-4 flex-col md:flex-row lg:flex-row">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="green"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10"
            fill="white"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="orange" />
        </div>
        <div
          className="h-screen w-full bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
          absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black-100"
          />
        </div>
        <div className="flex justify-center relative my-0 md:my-20 lg:my-20 z-10">
          <div className="max-w-[85vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-cyan-900 dark:text-blue-100 max-w-90 font-bold">
            {data?.data?.metaData[0]?.value[0]}
            </p>
            <TextGenerateEffect
              words= {data?.data?.metaData[0]?.value[1]}
              className="text-center text-[40px] md:text-3xl lg:text-4xl"
            />
            <span className=" justify-center relative my-20 z-10 block md:hidden lg-hidden">
              <img src="hero.svg" alt="" />
            </span>
            <div className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl flex items-center gap-2 mb-12">
            {data?.data?.metaData[0]?.value[2]}
            </div>
            <a href="#about">
              <MagicButton
                title={data?.data?.metaData[0]?.value[4]}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="orange" />
        </div>
        <div className="justify-center relative my-20 z-10 hidden md:flex lg-flex">
          <img src={url} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
