"use client"

import "../app/style/heroSection.css"
import logo from '../assets/dot-icon.png'
import Image from 'next/image'
import { motion, useInView  } from "framer-motion";
import SideMenu from "./SideMenu";
import { useRef } from "react";

const HeroSection = () => {

  const header = useRef(null)
  const isInView = useInView(header)
  
    return (
      <section className="heroSection">
        <div className="heroSection">
          <div className="logoText" ref={header}>
            <motion.div
              initial={{ x: -750 }}
              animate={{ x: 0, rotate: 1080 }}
              transition={{ 
                duration: 5 ,
                repeat: 0,
              }}
            >
              <Image className="logo" src={logo} alt="site logo" width={150} priority />
            </motion.div>
            <motion.h1
              initial={{ y: -150, rotate: -90 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                  duration: 2,
                  type: "spring",
              }}
              style={{transformOrigin: "left"}}
            >
              FredMadeThis.
            </motion.h1>
          </div>
          <div className="mainText">
            <h2>Hello There, I am Fred.</h2>
            <p>
              I&apos;m a passionate Fullstack Developer, UX architect, and JavaScript engineer, dedicated to crafting seamless digital experiences.
            </p>
            <h2>What I do:</h2>
            <p>
              As a Fullstack Developer, I specialize in both frontend and backend technologies, ensuring every aspect of a project works harmoniously. My expertise in UX architecture allows me to design intuitive interfaces that prioritize user satisfaction. From conceptualization to implementation, I am driven by the challenge of turning ideas into reality.
            </p>
            <h2>My Approach:</h2>
            <p>
              I believe in the power of innovation and creativity to drive meaningful change. By combining technical prowess with a keen eye for design, I create digital solutions that captivate audiences and deliver tangible results. Whether it is building dynamic web applications or optimizing user journeys, I thrive on pushing boundaries and exceeding expectations.
            </p>
            <h2>Let&apos;s Connect:</h2>
            <p>
              Feel free to explore my projects, browse my shop for curated tech products, check out my resume to learn more about my skills and experiences, or reach out to me directly.
            </p>
            <h2>Stay Tuned:</h2>
            <p>This site is continually evolving as I add more content and features. Keep checking back for updates and new insights into my work and interests.</p>
            <h2>Get in Touch:</h2>
            <p>While the site is under construction, you can contact me via LinkedIn or WhatsApp. I&apos;m always excited to connect with fellow enthusiasts, collaborators, and potential clients.</p>
          </div>

        </div>
        <motion.div 
          className="menuComp section-right"
          initial={{ x: 1000, opacity: 0}}
          animate={{ x: 0, opacity: 1}}  
          transition={{ 
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <SideMenu/>
        </motion.div>
      
    </section>
  );
}

const facebookSVG = () => {

  return (
    <svg width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_41_9)">
        <path d="M60.6184 122.498H85.8301V226.29C85.8301 228.34 87.4905 230 89.5398 230H132.287C134.336 230 135.997 228.34 135.997 226.29V122.987H164.98C166.864 122.987 168.45 121.573 168.665 119.701L173.067 81.4897C173.188 80.4384 172.855 79.3856 172.151 78.5969C171.447 77.8075 170.44 77.3557 169.382 77.3557H135.998V53.403C135.998 46.1825 139.886 42.5211 147.555 42.5211C148.648 42.5211 169.382 42.5211 169.382 42.5211C171.432 42.5211 173.092 40.8599 173.092 38.8114V3.73713C173.092 1.6879 171.432 0.0274516 169.382 0.0274516H139.301C139.088 0.0170645 138.617 0 137.923 0C132.703 0 114.561 1.02461 100.23 14.2088C84.3507 28.819 86.5579 46.3124 87.0854 49.3454V77.3549H60.6184C58.5691 77.3549 56.9087 79.0154 56.9087 81.0646V118.788C56.9087 120.837 58.5691 122.498 60.6184 122.498Z" fill="#E79518"/>
      </g>
      <defs>
      <clipPath id="clip0_41_9">
      <rect width="230" height="230" fill="white"/>
      </clipPath>
      </defs>
    </svg>

    )
}

export default HeroSection
