"use client"
import About from "@/Components/About";
import Banner from "@/Components/Banner";
import Footer from "@/Components/Footer";
import Mangnet from "@/Components/Mangnet";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [open, setOpen] = useState(false);

  let about = null;
  let skills = null;
  let projects = null;
  useEffect(() => {
    about = document.querySelector('#about');
    skills = document.querySelector('.skill-end');
    projects = document.querySelector('.projects');
  })


  const {contextSafe} = useGSAP(() => {

  })

  const handleClick = contextSafe(() => {
    if(!open) {
      gsap.to('.bar-1', {rotate: 45, y: 8, duration: .5, ease: "power3.inOut"})
      gsap.to('.bar-2', {rotate: -45, y: -8, duration: .5, ease: "power3.inOut"})
      gsap.to('.menu-pannel', {xPercent: -100, ease: 'power2.out', duration: 1})
      setOpen(true);
    } else {
      gsap.to('.bar-2', {rotate: 0, y: 0, duration: .5, ease: "power3.inOut"})
      gsap.to('.bar-1', {rotate: 0, y: 0, duration: .5, ease: "power3.inOut"})
      gsap.to('.menu-pannel', {xPercent: 100})
      setOpen(false);
    }
  })

  const mouseEnter = contextSafe((e) => {
    gsap.to(e.target, {x: 40})
  })

  const mouseLeave = contextSafe((e) => {
    gsap.to(e.target, {x: 0})
  })

  return (
   <>
    <Mangnet>
      <div onClick={handleClick} className="blob menu cursor-pointer fixed z-40 bg-[url(/blob-sm.svg)] bg-cover bg-no-repeat top-4 right-4 size-16 md:size-24 grid place-content-center gap-3">
        <div className="bar-1 h-1 w-10 md:w-16 bg-lightDark"></div>
        <div className="bar-2 h-1 w-10 md:w-16 bg-lightDark"></div>
      </div>
    </Mangnet>
    <div className="rounded-tl-3xl rounded-bl-3xl menu-pannel translate-x-full top-0 right-0 bg-theme pl-10 z-30 shadow-2xl fixed w-4/5 md:w-1/2 h-screen flex flex-col items-start justify-center gap-10">
      <div className="flex flex-col items-start text-dark text-4xl lg:text-7xl font-bold uppercase gap-10">
        <h1 onClick={() => scrollTo({top: 0, behavior: 'smooth'})} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className="cursor-pointer">HOME</h1>
        <h1 onClick={() => about.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className="cursor-pointer">About</h1>
        <h1 onClick={() => skills.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className="cursor-pointer">Skills</h1>
        <h1 onClick={() => projects.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })} onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className="cursor-pointer">Projects</h1>
      </div>
      <div className="space-y-4">
        <p className="font-medium lg:text-2xl md:text-xl text-sm">Email: <span className="underline">satirtharoy2003@gmail.com</span></p>
        <p className="font-medium lg:text-2xl md:text-xl text-sm">Phone: <span className="underline">+8801704339891</span></p>
        <div className="inline-block">
          <Mangnet>
            <button onClick={() => window.open("https://drive.google.com/file/d/1XlXqs2IqLR9G62xS9Nwa2gY9uwHE56WA/view?usp=drive_link", "_blank")} className="blob border border-dark rounded-full py-2 px-4 font-semibold">
                Resume
            </button>
          </Mangnet>
        </div>
      </div>
    </div>
    <Banner/>
    <div className="bg-themeWhite background">
      <About/>
      <Skills/>
      <div className="relative">
        <Image className="scale-0 pointer-events-none white-blob fixed top-0 right-1/2 translate-x-1/2" alt="white blob" src='/blob-big-white.svg' height={450} width={800}/>
        <Projects/>
        <Footer/>
      </div>
    </div>
   </>
  );
}
