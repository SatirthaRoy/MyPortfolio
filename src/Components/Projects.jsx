"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Project = ({ bg , project}) => {
  return (
    <div className={`min-w-[90%] lg:min-w-[70%] h-5/6 md:mx-8 project`}>
      <div className="space-y-4">
        <div className="relative">
          <Image className="absolute w-full h-full object-cover rounded-3xl" src={`/unsplash-${bg}.webp`} height={650} width={900} alt="unsplash"/>
          <div className="p-4 md:p-10">
            <Image className="w-full h-full object-cover rounded-2xl opacity-95" src={project?.ss} height={650} width={900} alt="preview"/>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row md:justify-between items-center gap-3">
          <h1 className="text-xl md:text-3xl font-bold">{project?.name}</h1>
          <p className="text-sm md:text-lg font-semibold">{project?.skills.join(' | ')}</p>
          <a href={project?.link} target="_blank">
            <p className="text-sm font-semibold underline">Visit Site</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = useRef();

  const projectsArray = [
    {
      name: 'FrontendTools',
      skills: ['React', 'Tailwind', 'Gsap'],
      ss: '/FrontendTools.png',
      link: 'https://toolsfrontend.netlify.app/'
    },
    {
      name: 'Health Heaven',
      skills: ['React', 'Tailwind', 'Node js', 'Express js', 'MongoDB'],
      ss: '/Health Heaven.png',
      link: 'https://health-heaven.web.app/'
    },
    {
      name: 'Touristopia',
      skills:  ['React', 'Tailwind', 'Node js', 'Express js', 'MongoDB'],
      ss: '/Touristopia.png',
      link: 'https://touristopia-781cc.web.app/'
    }
  ]


  // gsap
  useGSAP(() => {

    const enterTl = gsap.timeline({scrollTrigger: {trigger: '.projects', toggleActions: 'play none reset none', start: 'top center', end: 'top center'}})

    enterTl
    .to('.white-blob', {scale: 1, ease: 'power3.out', duration: 1})
    .to(".project-letter", {
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1
    }, 0)

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
      projectSlideTl.to('.project-show', {x: -window.innerWidth * .7 * (projectsArray.length-1), ease: 'none'})
    }

  });
  // projects letter splitting
  const pArr = "PROJECTS_".split("");



  return (
    <>
      <div ref={projects} className="projects bg-themeWhite pt-40 md:pt-[200px] space-y-14 overflow-hidden">
        {/* <Image className="absolute top-0 right-1/2 translate-x-1/2" alt="white blob" src='/blob-big-white.svg' height={450} width={800}/> */}
        <div className="project-word flex items-center justify-center clippy text-5xl lg:text-[200px] font-bold text-[#77777780]">
          {pArr.map((l, i) => (
            <h1 className="project-letter translate-y-56" key={i}>
              {l}
            </h1>
          ))}
        </div>
        <div className="w-11/12 mx-auto project-show flex flex-col md:flex-row gap-4">
          {projectsArray.map((project, i) => <Project key={i} bg={i+1} project={project}/>)}
        </div>
      </div>
    </>
  );
};

export default Projects;
