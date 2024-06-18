"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
const About = () => {

  useGSAP(() => {
    gsap.to('.about', {y: 0, stagger: .05, ease: 'power3.out', duration: 1, scrollTrigger: {trigger: '.about-pannel', start: 'top bottom'}})
    gsap.to('.word', {y: 0, stagger: .05, ease: 'power3.out', duration: 1, scrollTrigger: {trigger: '.about-para', start: 'top bottom'}})
  })

  const AboutArr = 'ABOUT_'.split('');
  const paraArr = "A self-driven and passionate frontend developer dedicated to crafting highly interactive and user-centric web applications.".split(' ')
  return (
    <div className='bg-theme py-36'>
      <div className='w-11/12 mx-auto space-y-20'>
        <div className='about-pannel flex items-center text-7xl lg:text-[200px] text-dark font-bold clippy overflow-y-hidden'>
          {AboutArr.map((l, i) => <div className='about translate-y-56' key={i}>{l}</div>)}
        </div>
        <div className='flex flex-wrap items-center justify-center gap-2 md:gap-4 text-2xl md:text-6xl font-bold uppercase about-para'>
          {
            paraArr.map((w,i) => {
              return(
                <div className='clippy' key={i}>
                  <p className='translate-y-16 word'>{w}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default About