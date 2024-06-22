"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  });

  const { contextSafe } = useGSAP(() => {
    // entering animation
    gsap.to(".banner-headers", {
      y: 0,
      stagger: 0.1,
      duration: 1.3,
      ease: "power4.inOut",
    });
    gsap.to(".banner", { scale: 1.3, duration: 1.3, ease: "power3.inOut"},0)
    gsap.to('.blob', {opacity: 1, scale: 1, duration: 1.3, ease: 'power3.inOut'})

    // exiting animation timeline scolltrigger
    const fontTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin",
        toggleActions: 'play none reverse none',
        start: "center top",
        end: "center top",
        // markers: true
      },
      defaults: { duration: 1 },
    });

    fontTl
      .to(".banner-headers", { y: 144, stagger: -0.1, ease: "power3.inOut" })
      .to(".banner", { scale: 1, ease: "power2.out" }, 0);

    // banner going to left animation timeline scrlltrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pin",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        // markers: true
      },
      defaults: { ease: "none" },
    });

    tl.to(".panel-1", { x: "-100%", duration: 1 })
      .to(".panel-2", { x: "-100%", duration: 0.75 }, "-=.75")
      .to(".panel-3", { x: "-100%", duration: 0.5 }, "-=.5");


  });

  const handleMove = contextSafe((e) => {
    const { clientX, clientY } = e;
    const { height, width, top, left } = e.target.getBoundingClientRect();
    const x = clientX - (left + width/2);
    const y = clientY -(top + height/2);
    gsap.to('.blob', { x: x, y: y, scale: 1.1});
  });

  const handleLeave = contextSafe((e) => {
    gsap.to('.blob', {x: 0, y: 0, scale: 1})
  });

  return (
    <div className="overflow-x-hidden">
      <div className="-z-10 pic w-full h-full fixed top-0 banner bg-cover bg-[url(/profile-mobile.jpg)] md:bg-[url(/profileCrop.png)] bg-no-repeat bg-fixed"></div>
      <div className="relative pin h-screen w-screen text-dark text-4xl md:text-7xl lg:text-9xl font-bold">
        
        <div className="panel-3 h-1/3 md:w-1/2 bg-theme flex pr-8 items-center justify-center md:justify-end">
          <div className="clippy overflow-hidden">
            <h1 className={`translate-y-32 banner-headers`}>FRONTEND</h1>
          </div>
        </div>
        <div className="panel-2 h-1/3 md:w-3/4 bg-theme flex pr-8 items-center justify-center md:justify-end">
          <div className="clippy overflow-hidden">
            <h1 className={`translate-y-32 banner-headers`}>DEVELOPER_</h1>
          </div>
        </div>
        <div className="panel-1 relative h-1/3 w-full bg-theme flex pr-8 items-center justify-center md:justify-end">
          <div className="clippy overflow-hidden">
            <h1 className={`translate-y-32 banner-headers`}>SATIRTHA ROY</h1>
          </div>
          {/* blobs */}
          <div
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="absolute left-4 md:left-24 -z-10"
          >
            <div className="size-36 relative">
              <Image
                alt="Blob"
                className="absolute opacity-0 scale-50 blob"
                src="/blob-sm.svg"
                width={116}
                height={116}
              />
              <Image
                alt="Blob"
                className="absolute blob opacity-0 scale-50 bottom-0 right-0 rotate-180"
                src="/blob-sm.svg"
                width={116}
                height={116}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
