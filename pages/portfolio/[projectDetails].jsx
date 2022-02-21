// style
import style from '../../styles/projectDetails.module.css'

// modules
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'

// data
import {projectList}  from '../../static/projectInfo.js'

// assets
import line from '../../public/line.svg'
import placeholder from '../../public/projectThumbs/placeholder.png'

// components
import TechDisplay from '../../components/TechDisplay'

// HOOK
const index = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  const { query: { projectDetails } } = useRouter()

  useEffect(() => {
    const projectData = projectList.find(
      el => el.Name === projectDetails
    )
    if (projectData) {
      setLoading(false) 
      setData(projectData) 
    }
    return 
      
    
  }, [projectDetails])

  return (
    <div className={style.projectDetails}>
      {/* Header */}
      <div className={style.projectDetailsContainer}>
        <div className={style.projectDetailsContainerTextArea}>
          <h2>
            {
              loading ? 'Loading' : data.Name
            }
          </h2>
          
        </div>
        <div className={style.headerImage}>
          {
            loading ? 
              <Image src={placeholder} height={400} quality={30} objectFit='contain' />
              :
              <><img src={data.image}  width='100%' /></>
          }
        </div>
      </div>
      <div>
        <div className={style.projectDetailsDiscription}>
          <div className={style.projectDetailsHeading}>
            <Image src={line} /><h4>Description</h4><Image src={line}/>
          </div>
          <p>
            {
              loading ? 'Loading' : data.description
            }
          </p>
        </div>
        <div className={style.projectDetailsDiscription}>
          <div className={style.projectDetailsHeading}>
            <Image src={line} /><h4>Tech</h4><Image src={line}/>
          </div>
          <div>
            {
              loading? 
                'Loading' 
                : 
                data.tech.map(
                  (el, index) => {
                    return(
                      <TechDisplay list={el} key={index}/>
                    )
                  }
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default index