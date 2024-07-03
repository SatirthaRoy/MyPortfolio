import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

const Mangnet = ({children}) => {
  const container = useRef();
  const {contextSafe} = useGSAP({scope: container});

  const handleMove = contextSafe((e) => {
    const { clientX, clientY } = e;
    const { height, width, top, left } = e.target.getBoundingClientRect();
    const x = clientX - (left + width/2);
    const y = clientY -(top + height/2);
    gsap.to('.blob', { x: x, y: y, scale: 1.1});
  })

  const handleLeave = contextSafe(() => {
    gsap.to('.blob', {x: 0, y: 0, scale: 1})
  });

  return (
    <div onMouseLeave={handleLeave} onMouseMove={handleMove} ref={container}>{children}</div>
  )
}

export default Mangnet