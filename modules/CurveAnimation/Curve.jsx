"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useSpring } from "framer-motion"


function Curve({scrollYProgress}) {

  //register gsap
  const [p1x, setp1x] = useState(0)
  const [p1y, setp1y] = useState(0)
  const [p2x, setp2x] = useState(200)
  const [p2y, setp2y] = useState(200)
  const [c1x, setc1x] = useState(100)
  const [c1y, setc1y] = useState(100)
  const [curveD, setcurveD] = useState("")
  const [scroll, setScroll] = useState(0)
  const animationContainer = useRef()

  /* const { scrollYProgress } = useScroll({
    target: animationContainer,
    offset: ["start end", "end start"]
  }); */

  const offsetSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // position -140 to 140

  useEffect(() => {

    // mid-point of line:
    let mpx = (p2x + p1x) * 0.5
    let mpy = (p2y + p1y) * 0.5

    // angle of perpendicular to line:
    let theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2

    // distance of control point from mid-point of line:
    let offset = offsetSpring.get() * 280 - 140

    // location of control point:
    setc1x(mpx + offset * Math.cos(theta))
    setc1y(mpy + offset * Math.sin(theta))

    // construct the command to draw a quadratic curve
    let curve = "M" + p1x + " " + p1y + " Q " + c1x + " " + c1y + " " + p2x + " " + p2y;
    setcurveD(curve)
    
    return () => {
      setcurveD(0)
    };
  }, [scroll]);
  
  return (
    <>
      <svg ref={animationContainer} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3_2)">
          <path d="M0 200H200V0" stroke="black"/>
        </g>
    		<path id="curve" d={curveD} stroke="black" strokeWidth="1" strokeLinecap="round" fill="transparent"></path>
    	</svg>
    </>
    
  );
}

export default Curve;