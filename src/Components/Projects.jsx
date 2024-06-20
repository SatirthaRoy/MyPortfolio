"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Project = ({ bg , img}) => {
  return (
    <div className={`min-w-[90%] lg:min-w-[70%] h-4/5 md:mx-8 project`}>
      <div className="space-y-4">
        <div className="relative">
          <Image className="absolute w-full h-full object-cover rounded-3xl" src={`/unsplash-${bg}.jpg`} height={240} width={800} alt="unsplash"/>
          <div className="p-4 md:p-10">
            <Image className="w-full h-full object-cover rounded-2xl opacity-95" src={img} height={450} width={800} alt="preview"/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
          <h1 className="text-xl md:text-3xl font-bold">FrontendTools</h1>
          <p className="text-sm md:text-lg font-semibold">Tailwind css | GSAP | React js</p>
          <p className="text-sm md:hidden font-semibold underline">Visit Site</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = useRef();

  // gsap
  useGSAP(() => {

    const enterTl = gsap.timeline({scrollTrigger: {trigger: '.projects', start: 'top 20%', markers: true}})

    enterTl
    .to(".project-letter", {
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1
    })
    .to('.white-blob', {scale: 1, ease: 'power3.out', duration: 1}, 0)

    if(window.innerWidth > 766) {
      // project slider
      const projectSlideTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.project-show',
          start: 'top 10%',
          end: '200% top',
          pin: true,
          scrub: 1,
          // markers: true
        }
      })
      projectSlideTl.to('.project-show', {x: -window.innerWidth * .7 * 2, ease: 'none'})
    }

  });
  // projects letter splitting
  const pArr = "PROJECTS_".split("");
  return (
    <>
      <div ref={projects} className="projects bg-themeWhite pt-40 md:pt-[200px] space-y-14 overflow-x-hidden">
        {/* <Image className="absolute top-0 right-1/2 translate-x-1/2" alt="white blob" src='/blob-big-white.svg' height={450} width={800}/> */}
        <div className="project-word flex items-center justify-center clippy text-5xl lg:text-[200px] font-bold text-[#77777780]">
          {pArr.map((l, i) => (
            <h1 className="project-letter translate-y-56" key={i}>
              {l}
            </h1>
          ))}
        </div>
        <div className="w-11/12 mx-auto project-show flex flex-col md:flex-row gap-4">
          <Project bg={1} img='/FrontendTools.png'/>
          <Project bg={2} img='/Health Heaven.png'/>
          <Project bg={3} img='/Touristopia.png'/>
        </div>
      </div>
    </>
  );
};

export default Projects;
