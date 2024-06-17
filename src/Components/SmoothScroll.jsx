"use client"
import React from 'react'

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({children}) {

  return (
    <ReactLenis root options={{lerp: .06}}>
      { children }
    </ReactLenis>
  )
}

export default SmoothScroll