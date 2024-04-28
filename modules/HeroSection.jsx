"use client"

import logo from '../assets/dot-icon.png'
import Image from 'next/image'
import { motion, useInView  } from "framer-motion";
import SideMenu from "./SideMenu";
import { useRef } from "react";
import SkillsCard from "./SkillsCard";
import style from '../app/style/heroSection.module.scss'

const skills = [
  {
    name: "ReactJs",
    level: 10
  },
  {
    name: "NextJs",
    level: 10
  },
  {
    name: "HTML",
    level: 10
  },
  {
    name: "JavaScript",
    level: 10
  },
  {
    name: "GIT",
    level: 10
  },
  {
    name: "RESTful Services/APIs",
    level: 10
  },
  {
    name: "Responsive/Mobile Design",
    level: 10
  },
  {
    name: "Python",
    level: 10
  },
]

const HeroSection = () => {

  const header = useRef(null)
  const isInView = useInView(header)
  
    return (
      <section className={style.section}>
        <div >
          <div className={style.logoText} ref={header}>
            <motion.div
              initial={{ x: -750 }}
              animate={{ x: 0, rotate: 1080 }}
              transition={{ 
                duration: 5 ,
                repeat: 0,
              }}
            >
              <Image className={style.logo} src={logo} alt="site logo" width={150} priority />
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
          <div className={style.mainText}>
            <div className={style.discText}>
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
            <div>
              {
                skills.map((skill, index) => {
                  return (
                    <SkillsCard skills={skill} key={`skill-${index}`} />
                  )
                })
              }
          </div>
        </div>
        </div>
        <div 
          className={style.menuComp}
        >
          <SideMenu/>
        </div>
      
    </section>
  );
}

export default HeroSection
