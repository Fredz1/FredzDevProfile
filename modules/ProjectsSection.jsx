import Link from "next/link"
import {motion} from "framer-motion"
import Image from "next/image"
import SideMenu from "./SideMenu"
import logo from '../assets/dot-icon.png'
import style from "../app/projects/projectsSection.module.scss"

const ProjectsSection = () => {
  
  return (
    <>
      <section className={style.section}>
        <div className={style.heroSection}>
          <div className={style.logoText}>
            <motion.div
              initial={{ x: -750 }}
              animate={{ x: 0, rotate: 1080 }}
              transition={{
                duration: 2,
                repeat: 0,
                type: "spring",
                bounce: 0.5
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
                bounce: 0.5
              }}
              style={{ transformOrigin: "left" }}
            >
              FredMadeThis.
            </motion.h1>
          </div>
          <div className={style.mainText}>
            <p>I do not have many personal projects</p>
            <p>but here is 1</p>
          </div>
        </div>
        <motion.div
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
    </>
  )
}

export default ProjectsSection