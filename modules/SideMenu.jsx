import "../app/style/sideMenu.css"

import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"

import { motion } from "framer-motion";

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
  
  const getHeight = () => {
    const menuItem = document.querySelector('.menuItem')
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
    <div className="sideMenu">
      <div className="sideMenuText">
        {
          sideMenuItemList.map((item, index) => {
            return (
              <Link href={item.link} key={`sideMenu - ${index}`} className="menuItem" >
                <Icon height={iconSize} active={pathname === item.link? true : false}/>
                <h3>
                  {item.text}
                </h3>
              </Link>
            )
          })
        }
      </div>
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
        repeat: Infinity,
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
          <circle cx="125" cy="125" r="60" fill="#0C101E" />
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

export default SideMenu;