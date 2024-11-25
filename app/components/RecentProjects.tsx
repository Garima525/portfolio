"use client";
import React from "react";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = ({projectData}) => {
  const posts = projectData?.data?.posts || [];

  const cleanContent = (content) => {
    return content.replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "").replace(/<span[^>]*>/g, "").replace(/<\/span>/g, "");
  };
  return (
    <div className="py-20 px-5" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-orange-900">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {posts.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item._id}
          >
            <PinContainer
              title={item?.title}
              href={item?.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#fff" }}
                >
                  {/* <img src="/bg.svg" alt="bgimg" className="opacity-30" /> */}
                </div>
                <img
                  src={item.featuredImage.url}
                  alt={item.featuredImage.alt_text}
                  className="z-10 absolute max-w-60 "
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {cleanContent(item.content)}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.postMeta?.formData?.map((field) =>
                    field.value.map((imgUrl, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${index}px)`,
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={`Image ${index + 1}`}
                          className="p-2 w-full h-full object-cover rounded-full"
                        />
                      </div>
                    ))
                  )}
                </div>
                <div className="flex justify-center items-center">
                {item.postMeta.formData.map((field, fieldIndex) =>
                  field.name === "site_link" && field.value[0] ? (
                    <React.Fragment key={fieldIndex}>
                      <a
                        href={field.value[0]}
                        className="flex lg:text-xl md:text-xs text-sm text-orange-900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check Live Site
                      </a>
                      <FaLocationArrow className="ms-3" color="#F53838" />
                    </React.Fragment>
                  ) : null
                )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;