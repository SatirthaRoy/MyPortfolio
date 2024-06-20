"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Project = ({ bg , img}) => {
  return (
    <div className={`w-11/12 mx-auto flex ${bg%2 ? "justify-start" : 'justify-end'}`}>
      <div className="relative space-y-4">
        <div className="relative">
          <Image className="absolute -z-10 w-full h-full object-cover rounded-3xl" src={`/unsplash-${bg}.jpg`} height={240} width={800} alt="unsplash"/>
          <div className="p-5 md:p-10">
            <Image className="w-full h-full object-cover" src={img} height={450} width={800} alt="preview"/>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold">FrontendTools</h1>
          <p className="text-sm md:text-lg font-semibold">Tailwind css | GSAP | React js</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = useRef();
  useGSAP(() => {
    const projectTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".skill-end",
        start: "bottom 80%",
        end: "bottom top",
        scrub: 1,
        markers: true
      },
    });
    projectTimeline.to(".projects", { y: -window.innerHeight/2 });

    gsap.to(".project-letter", {
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: ".projects",
        start: "top center"
      },
    });
  });
  const pArr = "PROJECTS_".split("");
  return (
    <>
      <div ref={projects} className="projects bg-themeWhite py-44 space-y-14">
        <div className="project-word flex items-center justify-center clippy text-5xl lg:text-[200px] font-bold text-[#77777780]">
          {pArr.map((l, i) => (
            <h1 className="project-letter translate-y-56" key={i}>
              {l}
            </h1>
          ))}
        </div>
        <div className="project-show space-y-20">
          <Project bg={1} img='/FrontendTools.png'/>
          <Project bg={2} img='/Health Heaven.png'/>
          <Project bg={3} img='/Touristopia.png'/>
        </div>
      </div>
    </>
  );
};

export default Projects;
