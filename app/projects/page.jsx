"use client"

import "../page.css"

import ProjectsSection from '../../modules/ProjectsSection'
import Footer from '../../modules/Footer' 

function Page() {
  return (
    <>
      <div className="mainBody">
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
}

export default Page