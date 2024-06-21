import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

const HoverEffect = ({children}) => {

  const letters = useRef();
  const {contextSafe} = useGSAP(() => {},{scope: letters});

  const handleEnter = contextSafe(() => {
    gsap.to('.letter', {x: '50px'})
  })

  const handleLeave = contextSafe(() => {
    gsap.to('.letter', {x: 0})
  })
  return (
    <div onMouseLeave={handleLeave} onMouseEnter={handleEnter} ref={letters} className={`flex items-center text-2xl md:text-4xl font-medium`}>
      {children.split('').map((l, i) => <div className='letter' key={i}>{l}</div>)}
    </div>
  )
}

export default HoverEffect