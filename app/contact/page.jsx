"use client"

import style from "../style/page.css"

import ContactBlock from '../../modules/contactBlock'
import Footer from '../../modules/Footer' 

function Page() {
  return (
    <>
      <div className={style.mainBody}>
        <ContactBlock />
        <Footer />
      </div>
    </>
  );
}

export default Page