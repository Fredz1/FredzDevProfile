"use client"

import "../page.css"

import ContactBlock from '../../modules/contactBlock'
import Footer from '../../modules/Footer' 

function Page() {
  return (
    <>
      <div className="mainBody">
        <ContactBlock />
        <Footer />
      </div>
    </>
  );
}

export default Page