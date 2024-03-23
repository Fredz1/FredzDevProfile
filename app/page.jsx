"use client"

import "./page.css"

import HeroSection from '../modules/HeroSection'
import Footer from '../modules/Footer' 

const index = () => {

  return (
    <>
      <div className="mainBody">
        <HeroSection />
        <Footer />
      </div>
    </>
  )
}

export default index