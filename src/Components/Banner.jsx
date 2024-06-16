'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Banner = () => {

  useGSAP(() => {
    const tl = gsap.timeline({scrollTrigger: {
      trigger: 'panel-3',
      markers: true
    },defaults: { ease: 'none'}});
    gsap.to('.banner-headers', {y: 0, stagger: .05, duration: 1.3, ease: 'power3.inOut'});
    tl.to('.panel-1', {x: '-100%', duration: 1, delay: 1})
    .to('.panel-2', {x: '-100%', duration: .75}, '-=.75')
    .to('.panel-3', {x: '-100%', duration: .5}, '-=.5')
  })

  return (
    <div className="h-screen w-screen bg-[url(/profileCrop.png)] bg-no-repeat bg-cover text-9xl font-bold">
      <div className="panel-3 h-1/3 w-1/2 bg-theme flex pr-8 items-center justify-end">
        <div className="clippy overflow-hidden">
          <h1 className={`translate-y-36 banner-headers`}>FRONTEND</h1>
        </div>
      </div>
      <div className="panel-2 h-1/3 w-3/4 bg-theme flex pr-8 items-center justify-end">
        <div className="clippy overflow-hidden">
          <h1 className={`translate-y-36 banner-headers`}>DEVELOPER_</h1>
        </div>
      </div>
      <div className="panel-1 h-1/3 w-full bg-theme flex pr-8 items-center justify-end">
        <div className="clippy overflow-hidden">
          <h1 className={`translate-y-36 banner-headers`}>SATIRTHA ROY</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
