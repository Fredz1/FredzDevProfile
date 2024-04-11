"use client"

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

import "./page.css"

import HeroSection from '../modules/HeroSection'
import Footer from '../modules/Footer'

const getRandomNumber = (min = 90, max = 360) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const animatedCircles = [
  {
    svg:{
      widthHeight: 250,
      viewBox:"0 0 250 250",
      fill:"none" ,
      xmlns:"http://www.w3.org/2000/svg"
    },
    animation: {
      initial:{ y: -750, rotate: 0, scale: 1.5 },
      animate:{ y: 0, rotate: getRandomNumber(45,720), scale: 1 },
      transition:{ 
        duration: getRandomNumber(2,4),
      }
    }
  },
  {
    svg:{
      widthHeight: 250,
      viewBox:"0 0 250 250",
      fill:"none" ,
      xmlns:"http://www.w3.org/2000/svg"
    },
    animation: {
      initial:{ x: 750, rotate: 0, scale: 1.5 },
      animate:{ x: 0, rotate: getRandomNumber(0,1080), scale: 1 },
      transition:{ 
        duration: getRandomNumber(2,3),
      }
    }
  },
  {
    svg:{
      widthHeight: 250,
      viewBox:"0 0 250 250",
      fill:"none" ,
      xmlns:"http://www.w3.org/2000/svg"
    },
    animation: {
      initial:{ x: -750, rotate: 0, scale: 1.25 },
      animate:{ x: 0, rotate: getRandomNumber(0,1080), scale: 1 },
      transition:{ 
        duration: getRandomNumber(2,3),
      }
    }
  },
]

const Index = () => {

  const [intro, animate] = useAnimate()

  const hideAnimation = () => {
    setCookeie()
    animate(
      "svg",
      {
        height: 0,
        padding: 0,
        transition: {
          duration: 2,
        },
      }
    )
    animate(
      intro.current,
      {
        height: 0,
        padding: 0,
        transition: {
          duration: 2,
        },
      }
    )
  }

  const setCookeie = () => {
    window.sessionStorage.setItem("playAnimation", false)
  }

  useEffect(() => {
    if(window.sessionStorage.getItem("playAnimation")){
      hideAnimation()
    } else {
      setTimeout(() => {
        hideAnimation()
        setCookeie()
      }, 12000);
    }
  }, [])

  return (
    <>
      <div className="mainBody" >
        <div 
          ref={intro}
          className="introAnimation" 
        >
          {
            animatedCircles.map((circle, index) => {
              return (
                <motion.svg 
                  layout
                  key={index}
                  width={circle.svg.widthHeight} 
                  height={circle.svg.widthHeight} 
                  viewBox={circle.svg.viewBox} 
                  fill={circle.svg.fill} 
                  xmlns={circle.svg.xmlns}
                  initial={circle.animation.initial}
                  animate={circle.animation.animate}
                  transition={circle.animation.transition}
                >
                  <circle cx="125" cy="125" r="125" fill="#0C101E"/>
                  <motion.circle 
                    onClick={
                      () => {
                        document.getElementById("heroSection").scrollIntoView({ behavior: "smooth" });
                      }
                    }
                    whileHover={{ scale: 1.5 }}
                    initial={{ scale: 1 }}
                    transition={{ duration: 1}}
                    id="circle1" 
                    cx="175" 
                    cy="175" 
                    r="25" 
                    fill="#E79518"
                  />
                </motion.svg>
              )
            })
          }
          <motion.div
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            transition={{ 
              delay: 3.5,
              duration: 1.5,
              repeat: 0,
              type: "spring"
            }}
          >
            <svg className="fmtwords" width="125" height="130" viewBox="0 0 125 130" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M9.936 6.36V14.232H21.168V19.608H9.936V33H3.36V0.983997H21.168V6.36H9.936ZM25.2896 10.776H31.3856V14.04C32.0096 12.408 32.4416 11.736 33.3536 11.064C34.3136 10.392 35.6096 10.008 36.9536 10.008C37.0976 10.008 37.3376 10.008 37.6736 10.056V16.296C37.1936 16.248 36.7136 16.2 36.3776 16.2C34.6976 16.2 33.1616 16.968 32.2976 18.216C31.5776 19.224 31.3856 20.184 31.3856 22.296V33H25.2896V10.776ZM63.546 23.352H46.17C46.698 26.424 48.954 28.344 51.978 28.344C54.234 28.344 56.154 27.24 57.114 25.464L62.73 27C60.522 31.32 56.634 33.768 51.93 33.768C44.874 33.768 39.834 28.776 39.834 21.864C39.834 14.904 44.682 10.008 51.546 10.008C58.65 10.008 63.594 15 63.594 22.152L63.546 23.352ZM46.17 19.848H57.306C56.778 16.92 54.666 15.144 51.642 15.144C48.714 15.144 46.746 16.824 46.17 19.848ZM84.9859 13.224V0.983997H91.0819V33H84.9859V30.072C83.0659 32.712 80.9539 33.768 77.5459 33.768C70.9699 33.768 66.5539 29.064 66.5539 22.104C66.5539 18.36 67.8019 15.24 70.1059 13.08C72.2179 11.112 74.9059 10.008 77.6419 10.008C80.6659 10.008 82.8259 10.968 84.9859 13.224ZM79.0819 15.144C75.5779 15.144 73.0339 18.072 73.0339 22.152C73.0339 25.992 75.5779 28.872 79.0339 28.872C82.3939 28.872 84.9859 25.944 84.9859 22.104C84.9859 18.072 82.4899 15.144 79.0819 15.144ZM9.936 61.032V81H3.36V48.984H10.8L20.352 68.424L29.952 48.984H37.392V81H30.816V61.032L20.352 81.96L9.936 61.032ZM60.7515 61.608V58.776H66.8475V81H60.7515V77.928C58.6875 80.568 56.2875 81.768 53.0235 81.768C46.7835 81.768 42.3195 76.92 42.3195 70.152C42.3195 63.144 47.0235 58.008 53.5035 58.008C56.5275 58.008 58.5915 59.064 60.7515 61.608ZM54.7515 63.144C51.2955 63.144 48.8475 65.976 48.8475 70.056C48.8475 73.944 51.3915 76.872 54.7035 76.872C58.1115 76.872 60.8475 73.704 60.8475 69.864C60.8475 65.928 58.3515 63.144 54.7515 63.144ZM89.9078 61.224V48.984H96.0038V81H89.9078V78.072C87.9878 80.712 85.8758 81.768 82.4678 81.768C75.8918 81.768 71.4758 77.064 71.4758 70.104C71.4758 66.36 72.7238 63.24 75.0278 61.08C77.1398 59.112 79.8278 58.008 82.5638 58.008C85.5878 58.008 87.7478 58.968 89.9078 61.224ZM84.0038 63.144C80.4998 63.144 77.9558 66.072 77.9558 70.152C77.9558 73.992 80.4998 76.872 83.9557 76.872C87.3158 76.872 89.9078 73.944 89.9078 70.104C89.9078 66.072 87.4118 63.144 84.0038 63.144ZM124.296 71.352H106.92C107.448 74.424 109.704 76.344 112.728 76.344C114.984 76.344 116.904 75.24 117.864 73.464L123.48 75C121.272 79.32 117.384 81.768 112.68 81.768C105.624 81.768 100.584 76.776 100.584 69.864C100.584 62.904 105.432 58.008 112.296 58.008C119.4 58.008 124.344 63 124.344 70.152L124.296 71.352ZM106.92 67.848H118.056C117.528 64.92 115.416 63.144 112.392 63.144C109.464 63.144 107.496 64.824 106.92 67.848ZM14.352 102.36V129H7.776V102.36H0.144V96.984H21.936V102.36H14.352ZM31.245 96.984V109.176C33.117 106.968 34.941 106.008 37.341 106.008C39.261 106.008 41.373 106.824 42.669 108.072C44.109 109.416 44.637 111.144 44.637 114.36V129H38.541V115.224C38.541 112.728 37.245 111.144 35.229 111.144C34.173 111.144 33.213 111.528 32.493 112.248C31.533 113.16 31.245 114.024 31.245 115.752V129H25.149V96.984H31.245ZM56.6513 106.776V129H50.5553V106.776H56.6513ZM53.6273 97.032C55.5953 97.032 56.9873 98.472 56.9873 100.488C56.9873 102.36 55.5473 103.8 53.6273 103.8C51.6593 103.8 50.2193 102.36 50.2193 100.44C50.2193 98.472 51.6593 97.032 53.6273 97.032ZM77.9599 113.208H72.1999V112.824C72.1999 111.48 70.9999 110.52 69.3679 110.52C67.8799 110.52 66.9199 111.336 66.9199 112.536C66.9199 113.112 67.1599 113.688 67.5439 113.976C68.2159 114.504 68.2639 114.504 71.3359 115.464C76.3279 117 78.2959 118.968 78.2959 122.568C78.2959 126.888 74.8399 129.768 69.6559 129.768C64.3759 129.768 61.1599 127.08 60.9199 122.472H66.7759C67.0639 124.392 67.9279 125.256 69.7039 125.256C71.1439 125.256 72.1519 124.392 72.1519 123.144C72.1519 121.8 71.2879 121.176 68.0239 120.168C63.2239 118.728 61.0639 116.568 61.0639 113.064C61.0639 108.84 64.4719 106.008 69.6559 106.008C74.7439 106.008 77.8159 108.696 77.9599 113.208Z" 
                fill="#ffffff"
              />
            </svg>
          </motion.div>
          <motion.svg
            id="nextpage"
            initial={{ rotate: 180, scale: 0, x: "-50%", y: 0, z:50}}
            animate={{ rotate: 0, scale: 1, x: "-50%", y: 0, z: 0 }}
            transition={{ duration: 1, delay:5}}
            className="nextpage"
            width="250"
            height="250"
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              hideAnimation()
            }}
          >
            <circle cx="125" cy="125" r="125" fill="#0C101E"/>
            <path d="M78 114L130 162L180 114" stroke="#E79518" strokeWidth="10" strokeLinecap="round"/>
            <path d="M78 162L130 210L180 162" stroke="#E79518" strokeWidth="10" strokeLinecap="round"/>
            <path d="M78 66L130 114L180 66" stroke="#E79518" strokeWidth="10" strokeLinecap="round"/>
          </motion.svg>
        </div>
        <HeroSection/>
        <Footer />
      </div>
    </>
  )
}

export default Index