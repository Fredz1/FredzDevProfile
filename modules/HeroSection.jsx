"use client"

import logo from '../assets/dot-icon.png'
import Image from 'next/image'
import { useInView  } from "framer-motion";
import SideMenu from "./SideMenu";
import { useRef } from "react";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import style from '../app/style/heroSection.module.scss'
import Header from './Header/Header'
import Curve from './CurveAnimation/Curve'
import { useScroll, useSpring } from "framer-motion"
import uxImage from '../public/assets/images/ux-design.jpg'

gsap.registerPlugin(useGSAP);

const HeroSection = () => {

  const heroTopText = useRef()

  const header = useRef(null)
  const isInView = useInView(header)

  const animationContainer = useRef()

  useGSAP(
    () => {
      gsap.fromTo('.text', { y: 200, opacity: 0, duration: 1 }, { y: 0, opacity: 1, duration: 1 });
      /* gsap.to('.text', { y: 0 }); */
    },
    { scope: heroTopText }
  )

  const { scrollYProgress } = useScroll({
    target: animationContainer,
    offset: ["start end", "end start"]
  });

  const offsetSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  
  
    return (
      <section className={style.section}>
        <div className={ style.leftSide }>
          {/* <Header /> */}
          <div className={ style.mainText }>
            <div className={style.mainTopText} ref={heroTopText}>
              <h1>Design a solution</h1>
              <h1>which works for you</h1>
            </div>

            {/* <div className={style.heroVideo}>
              <video 
                autoPlay 
                loop 
                muted 
                controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
              >
                <source src="/assets/video/heroVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}

            <div className={ style.mainBottomText }>
              <h3>Let me plan, design and build</h3>
              <h3>web applications that are tailored to your needs.</h3>
            </div>
          </div>

          <div className={style.pitch}>
            <div className={ style.topBlock }>
              <div>
                <h2>Designing UX is hard</h2>
                <h2>Let me simplify it</h2>
              </div>
              <div className={style.leftBlock}>
                <Image src={ uxImage } alt="UX Image" width={200} height={150} />
                {/* Work on the curve curving */}
                {/* <Curve scrollYProgress={ scrollYProgress } forwardRef={ animationContainer } /> */}
              </div>
            </div>
            <div className={ style.bottomBlock }>
              <div>
                bottom left
              </div>
              <div>
                bottom right
              </div>
            </div>
          </div>
          <div className={ style.skills }>
            <div>
              <div className={style.blurb}>
                <p> Design skills that ensure your market success</p> 
              </div>
              <div className={style.skillsBlocks}>  
                <div className={ style.skillsBlockLeft }>

                  <div>Web Design</div>

                  <div>
                    {/* list */}
                  </div>
                  
                </div>
                <div className={ style.skillsBlockRight }>
                  <div>
                    Design
                  </div>
                  <div>
                    Webflow Development
                  </div>
                </div>
                
              </div>
            </div>

          </div>

          <div className={style.headline}>
            A reliable partner for your digital success
          </div>


        </div>
        <SideMenu/>
    </section>
  );
}

export default HeroSection
