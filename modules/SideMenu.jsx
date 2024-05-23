import style from "../app/style/sideMenu.module.scss"
import { useState, useEffect } from "react"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia"

const SideMenu = () => {

  const sideMenuItemList = [
    {
      text: "ABOUT.Fred",
      link: "/"
    },
    {
      text: "Freds.SERVICES",
      link: "/services"
    },
    /* {
      text: "WORK.w/Fred",
      link: "/work"
    }, */
    {
      text: "CONTACT.Fred",
      link: "/contact"
    }
  ]

  const pathname = usePathname()

  const [iconSize, setIconSize] = useState(32)
  const [open, setOpen] = useState(false)
  const [showMenuIcon, setShowMenuIcon] = useState(false)
  const [menuVisibility, setMenuVisibility] = useState(false);


  
  const getWidth = () => {
    const windowWidth = window.innerWidth
    if(windowWidth < 768){
      setIconSize(24)
      setShowMenuIcon(true)
      setMenuVisibility(false)
    } else {
      setIconSize(32)
      setShowMenuIcon(false)
      setMenuVisibility(true)
    }
  }

  useEffect(() => {
    getWidth()
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [])

  const toggleMenu = () => {
    setMenuVisibility(!menuVisibility)
  }

  return (
    <div 
      className={
        menuVisibility ? 
          style.sideMenu : 
          style.sideMenuClosed
      }
    >
      <ToggleButton size={32} toggleMenu={toggleMenu}  
        className={style.toggleButton} 
      />
      <div 
        className={
          menuVisibility ? style.sideMenu : style.sideMenuClosed
        } 
        initial={{ x: 300 }}
        animate={{ x: menuVisibility ? 0 : 300 }}
        transition={{ duration: 0.5 }}
      >
        
        <div className={style.sideMenuText}>
          {
            sideMenuItemList.map((item, index) => {
              return (
                <Link href={item.link} key={ `sideMenu-${index}` } id='menuItem' className={style.menuItem} >
                  <Icon height={ iconSize } active={ pathname === item.link? true : false } />
                  <p>
                    {item.text}
                  </p>
                </Link>
              )
            })
          }
          <SocialMedia direction="row" iconsOnly={ true } />
        </div>
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
      whileHover={{ rotate: 360, repeatDuration: Infinity}}
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

const ToggleButton = ({toggleMenu, menuVisibility}) => {


  return (
    <svg 
      onClick={toggleMenu}
      width="60" 
      height="60" 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M44.875 28.3125H32.125V15.1875C32.125 14.6073 31.9011 14.0509 31.5026 13.6407C31.1041 13.2305 30.5636 13 30 13C29.4364 13 28.8959 13.2305 28.4974 13.6407C28.0989 14.0509 27.875 14.6073 27.875 15.1875V28.3125H15.125C14.5614 28.3125 14.0209 28.543 13.6224 28.9532C13.2239 29.3634 13 29.9198 13 30.5C13 31.0802 13.2239 31.6366 13.6224 32.0468C14.0209 32.457 14.5614 32.6875 15.125 32.6875H27.875V45.8125C27.875 46.3927 28.0989 46.9491 28.4974 47.3593C28.8959 47.7695 29.4364 48 30 48C30.5636 48 31.1041 47.7695 31.5026 47.3593C31.9011 46.9491 32.125 46.3927 32.125 45.8125V32.6875H44.875C45.4386 32.6875 45.9791 32.457 46.3776 32.0468C46.7761 31.6366 47 31.0802 47 30.5C47 29.9198 46.7761 29.3634 46.3776 28.9532C45.9791 28.543 45.4386 28.3125 44.875 28.3125Z" 
        fill="white"
      />
    </svg>
  )
}



export default SideMenu;