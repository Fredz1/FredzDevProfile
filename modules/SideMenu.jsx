import style from "../app/style/sideMenu.module.scss"

import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"

import { motion, useMotionValue, AnimatePresence } from "framer-motion";

import SocialMedia from "./SocialMedia"

const SideMenu = () => {

  const sideMenuItemList = [
    {
      text: "ABOUT.Fred",
      link: "/"
    },
    {
      text: "Freds.PROJECTS",
      link: "/projects"
    },
    {
      text: "WORK.w/Fred",
      link: "/work"
    },
    {
      text: "CONTACT.Fred",
      link: "/contact"
    }
  ]

  const pathname = usePathname()

  const [iconSize, setIconSize] = useState(32)
  const [open, setOpen] = useState(false)
  
  const getHeight = () => {
    const menuItem = document.querySelector('#menuItem')
    const height = menuItem?.offsetHeight
    setIconSize(height)
  }

  useEffect(() => {
    getHeight()
    window.addEventListener('resize', getHeight)
    return () => {
      window.removeEventListener('resize', getHeight)
    }
  }, [])


  return (
    <div className={style.sideMenu} >
      <ToggleButton open={open}/>
      <div className={style.sideMenuText}>
        {
          sideMenuItemList.map((item, index) => {
            return (
              <Link href={item.link} key={ `sideMenu-${index}` } id='menuItem' className={style.menuItem} >
                <Icon height={ iconSize } active={ pathname === item.link? true : false } />
                <h3>
                  {item.text}
                </h3>
              </Link>
            )
          })
        }
      </div>
      {/* <SocialMedia direction="column" iconsOnly={ true }/> */}
    </div>
  )
}

const Icon = ({height, active}) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.svg
      width={height}
      height={height}
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 360 }}
      initial={{ rotate: 0 }}
      animate={{
        rotate: isHovered ? 360 : 0,
        repeat: "Infinity",
        ease: "linear",
        duration: 2,
      }}
    >
      <g id="bigDot">
        <path
          d="M250 125C250 194.036 194.036 250 125 250C55.9644 250 0 194.036 0 125C0 55.9644 55.9644 0 125 0C194.036 0 250 55.9644 250 125Z"
          fill="#E79518"
        />
      </g>
      <g id="smallDot">
        {
          active ?
          <circle cx="125" cy="125" r="80" fill="#0C101E" />
          :
          <circle
            cx="150"
            cy="150"
            r="40"
            fill="#0C101E"
          />
        
        }
      </g>
    </motion.svg>
  );
}

const ToggleButton = () => {

  const toggleMenu = () => {
    setOpen(!open)
    
  }

  const [open, setOpen] = useState(false);
  const motionValue  =  useMotionValue(0);

  useEffect(() => {
    motionValue.set(open ? 1 : 0)
  }, [motionValue, open])

  const pathVariants = {
    open: {
      d: "M78 114L130 162L180 114M78 162L130 210L180 162M78 66L130 114L180 66",
      transition: { duration: 2 }
    },
    closed: {
      d: "M62 63L187 188M187 63L62 188",
      transition: { duration: 2 }
    }
  };

  return (
    <svg
      onClick={() => toggleMenu()}
      className={style.toggle}
      width="250"
      height="250"
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="125" cy="125" r="125" fill="#0C101E"/>
      <AnimatePresence mode="wait">
        <motion.path
          d={open ? pathVariants.open.d : pathVariants.closed.d}
          stroke="#E79518"
          strokeWidth="10"
          strokeLinecap="round"
          variants={
            {
              open: {
                transition: { duration: 2 }
              },
              closed: {
                transition: { duration: 2 }
              }
            }
          }
          initial="closed"
          animate={open ? 'open' : 'closed'}
        />
      </AnimatePresence>
    </svg>
  )
}



export default SideMenu;