"use client"

import style from '../app/style/heroSection.module.scss'

//import sections
import Skills from '../sections/skills/Skills';
import Pitch from '../sections/pitch/Pitch';
import Facts from '../sections/facts/Facts';
import Header from './Header/Header';
import Contact from '../sections/contact/Contact';

const HeroSection = () => {

    return (
      <section className={ style.section }>
        <Header />
        {/* <Header /> */}
        <div className={ style.mainText }>
          <div className={style.mainTopText}>
            <h1>Design a solution</h1>
            <h1>which works for you</h1>
          </div>
          <div className={ style.mainBottomText }>
            <h3>Let me plan, design and build</h3>
            <h3>web applications that are tailored to your needs.</h3>
          </div>
        </div>
        <Skills />
        <Pitch />
        <Facts />
        <Contact />

    </section>
  );
}

export default HeroSection
