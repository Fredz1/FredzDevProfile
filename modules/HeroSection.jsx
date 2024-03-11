"use client"

import "../app/style/heroSection.css"

import logo from '../assets/dot-icon.png'

import Image from 'next/image'

import { motion } from "framer-motion";

import SideMenu from "./SideMenu";



const HeroSection = () => {
  
  
    return (
      <section >
        <div className="heroSection">
          <div className="logoText">
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
          </div>

          <div>
            **Add Social media icons here **
          </div>
        </div>
        <motion.div 
          className="menuComp"
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
