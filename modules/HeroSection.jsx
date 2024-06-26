"use client"

import style from '../app/style/heroSection.module.scss'

//import sections
import Skills from '../sections/skills/Skills';
import Pitch from '../sections/pitch/Pitch';
import Facts from '../sections/facts/Facts';
import Contact from '../sections/contact/Contact';
import Hero from '../sections/hero/Hero';
import CookiePopup from './CookiePopup/CookiePopup';

const HeroSection = () => {

    return (
      <section className={ style.section }>
        <CookiePopup />
        <Hero />
        <Skills />
        <Pitch />
        <Facts />
        <Contact />

    </section>
  );
}

export default HeroSection
