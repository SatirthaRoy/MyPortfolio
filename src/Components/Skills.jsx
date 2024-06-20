"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SingleSkill = ({ skill, i }) => {
  useGSAP(() => {
    gsap.to(`.letter-${i}`, {
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: `.skill-${i}`,
        start: "top 70%",
        // markers: true
      },
    });
  })

  return (
    <div
      key={i}
      className={`text-dark font-bold text-5xl md:text-7xl lg:text-[200px] skill-${i} clippy overflow-hidden flex items-center ${
        i % 2 ? "justify-end" : "justify-start"
      }`}
    >
      {skill.split("").map((l, j) => (
        <h1 className={`translate-y-56 letter-${i}`} key={j}>
          {l}
        </h1>
      ))}
    </div>
  );
};

const Skills = () => {
  const container = useRef();
  useGSAP(() => {
    gsap.to(".skill-headings", {
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: { trigger: ".skill-pannel", start: "top center" },
    });

    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skill-pannel',
        start: '.skill-pannel',
        start: 'bottom bottom',
        endTrigger: container.current,
        end: 'bottom bottom',
        scrub: true,
        // markers: true
      }
    });
    const {height } = container.current.getBoundingClientRect();
    const yToGo = height - window.innerHeight;
    skillsTl.to('.skill-pannel', {y: yToGo, ease: 'none'});
  });

  const skillArr = "SKILLS_".split("");
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT JS",
    "NEXT JS",
    "NODE JS",
    "EXPRESS JS",
    "MONGO DB",
    "GSAP",
  ];

  return (
    <div  className="bg-theme skill-end overflow x-hidden">
      
      <div ref={container} className="w-11/12 mx-auto py-20">
          <div className="relative skill-pannel">
            <Image className="absolute right-1/2 top-1/2  -translate-y-1/2 translate-x-1/2" src='/blob-sm.svg' height={900} width={900}/>
            <div className="z-10 overflow-hidden clippy flex items-center justify-center text-7xl lg:text-[200px] text-lightDark font-bold">
              
              {skillArr.map((l, i) => (
                <h1 className="skill-headings translate-y-56" key={i}>
                  {l}
                </h1>
              ))}
            </div>
          </div>
        <div className="space-y-20 md:space-y-40">
          {skills.map((skill, i) => {
            return <SingleSkill i={i} skill={skill} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
