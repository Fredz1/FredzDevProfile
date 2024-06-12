"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const Curve = () => {

  const curve = useRef(null);
  const [elementProgress, setElementProgress] = useState(0);
  const [curvePath, setCurvePath] = useState("M450,450 C440,440 10,440 10,10")

  const { scrollYProgress } = useScroll(
    {
      target: curve,
      offset: [0.1, 0.9]
    }
  );

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      setElementProgress(latest)
    }
  )

  const circleSize = 10;

  const x = 10 + (440 - circleSize) * elementProgress;
  const y = 440 - (440 - circleSize) * elementProgress;

  useEffect(() => {
    //console.log(elementProgress)
    setCurvePath(`M450,450 C450,450 ${x},${y} 10,10`)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementProgress])

  return (
    <div ref={curve} >
      <svg
        width="460"
        height="460"
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={ {
          width: "auto",
          height: "100%",
          //max height should be height of parent
          maxHeight: "33vh",
        } }
      >
        {/* <path d="M450 10V450H10" stroke="black"/> */}
        <path
          d={curvePath}
          stroke="black"
          strokeWidth={ 5 }
        />
        <rect x="5" y="5" width={25} height={25} fill="#E79518" />
        <rect x="440" y="440" width={25} height={25} fill="#E79518" />
        <circle cx={x} cy={y} r={circleSize} fill="#E79518" />
      </svg>


    </div>
    
  );
}

export default Curve;