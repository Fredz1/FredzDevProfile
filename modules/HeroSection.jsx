"use client"

import "../app/style/heroSection.css"
import logo from '../assets/dot-icon.png'
import Image from 'next/image'
import { motion, useInView  } from "framer-motion";
import SideMenu from "./SideMenu";
import SocialMedia from "./SocialMedia";
import { useRef } from "react";



const HeroSection = () => {

  const header = useRef(null)
  const isInView = useInView(header)
  
    return (
      <section id="heroSection">
        <div className="heroSection section-left">
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
            <p>Hello There, I am Fred.</p>
            <p>Fullstack Developer, UX architect and JavaScript engineer.</p>
            <p>Pressing buttons with my fingers to make magic happen on the internet.</p>
            <p>You can view my projects, shop, resume, or contact me.</p>
            <p>This site is still very much under construction...</p>
            <p>Please contact me via linkedIn or Whatsapp for now. :)</p>
          </div>

          <div>
            <SocialMedia direction="row"/>
          </div>
        </div>
        <motion.div 
          className="menuComp section-right"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}  
          transition={{ 
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <SideMenu />
        </motion.div>
      
    </section>
  );
}

export default HeroSection
