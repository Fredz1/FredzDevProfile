"use client"

import style from "./style/page.css"
import HeroSection from '../modules/HeroSection'
import Footer from '../modules/Footer'

const Index = () => {

  return (
    <>
      <div className={style.mainBody} >
        <HeroSection/>
        <Footer />
      </div>
    </>
  )
}

export default Index