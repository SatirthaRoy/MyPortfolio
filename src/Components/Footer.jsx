"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import HoverEffect from "./HoverEffect";

const Footer = () => {

  let about = null;
  let skills = null;
  let projects = null;
  useEffect(() => {
    about = document.querySelector('#about');
    skills = document.querySelector('.skill-end');
    projects = document.querySelector('.projects');
  }, [])
  
  const { contextSafe } = useGSAP(() => {
    gsap.to(".footer-word", {
      y: 0,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: { trigger: ".foot-heading", start: "center bottom" },
    });
  });

  // get in touch animation
  const handleEnter = contextSafe(() => {
    gsap.to(".under", {
      transformOrigin: "left",
      scaleX: 1,
      ease: "power3.inOut",
    });
  });

  const handleLeave = contextSafe(() => {
    gsap.to(".under", {
      transformOrigin: "right",
      scaleX: 0,
      ease: "power3.inOut",
    });
  });

  // send email
  const sendEmail = (e) => {
    e.preventDefault();
    location.href = 'mailTo:satirtharoy2003@gmail.com';
  }

  return (
    <footer className="mt-20 text-dark space-y-8 py-10">
      <div
        onClick={sendEmail}
        className="foot-heading cursor-pointer"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
          <div className="flex items-center clippy justify-evenly text-5xl md:text-7xl lg:text-[180px] font-bold">
            {"GET IN TOUCH".split(" ").map((l, i) => (
              <h1 className="footer-word translate-y-52" key={i}>
                {l}
              </h1>
            ))}
          </div>
        <div className="w-[98%] origin-left h-3 scale-x-0 under bg-dark mx-auto"></div>
      </div>
      {/* footer contents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto relative gap-10 lg:gap-32">
        {/* navigation */}
        <div className="space-y-2">
          <h1 className="uppercase md:text-6xl text-3xl font-bold">
            Navigation
          </h1>
          <div onClick={() => scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer">
            <HoverEffect key={1}>Home</HoverEffect>
          </div>
          <div onClick={() => about.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })} className="cursor-pointer">
            <HoverEffect key={1}>About</HoverEffect>
          </div>
          <div onClick={() => skills.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })} className="cursor-pointer">
            <HoverEffect key={1}>Skills</HoverEffect>
          </div>
          <div onClick={() => projects.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })} className="cursor-pointer">
            <HoverEffect key={1}>Projects</HoverEffect>
          </div>
        </div>
        {/* connect */}
        <div className="space-y-2">
          <h1 className="uppercase md:text-6xl text-3xl font-bold">Connect</h1>
          <a
            href="https://www.linkedin.com/in/satirtha-roy/"
            target="_blank"
            className="cursor-pointer"
          >
            <HoverEffect key={1}>Linkedin</HoverEffect>
          </a>
          <a
            href="https://github.com/SatirthaRoy"
            target="_blank"
            className="cursor-pointer"
          >
            <HoverEffect key={1}>Github</HoverEffect>
          </a>
          <a
            href="https://www.facebook.com/satirtha.royhimu/"
            target="_blank"
            className="cursor-pointer"
          >
            <HoverEffect key={1}>Facebook</HoverEffect>
          </a>
        </div>
        {/* projects */}
        <div className="space-y-2">
          <h1 className="uppercase md:text-6xl text-3xl font-bold">Projects</h1>
          <a
            href="https://toolsfrontend.netlify.app/"
            target="_blank"
            className="cursor-pointer"
          >
            <HoverEffect key={1}>FrontendTools</HoverEffect>
          </a>
          <a
            href="https://health-heaven.web.app/"
            target="_blank"
            className="cursor-pointer"
          >
            <HoverEffect key={1}>Health Heaven</HoverEffect>
          </a>
          <a
            href="https://touristopia-781cc.web.app/"
            target="_blank"
            className="cursor-pointer"
          >
            <HoverEffect key={1}>Touristopia</HoverEffect>
          </a>
        </div>
      </div>
      {/* name and email */}
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto relative">
        <h1 className="uppercase text-3xl md:text-6xl font-bold">
          satirtha roy
        </h1>
        
          <p onClick={sendEmail} className="underline text-xl md:text-3xl lg:text-4xl font-medium cursor-pointer">
            satirtharoy2003@gmail.com
          </p>
      </div>
    </footer>
  );
};

export default Footer;
