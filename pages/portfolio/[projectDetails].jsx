// style
import style from '../../styles/projectDetails.module.css'

// modules
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

// data
import {projectList}  from '../../static/projectInfo.js'

// assets
import line from '../../public/line.svg'
import placeholder from '../../public/projectThumbs/placeholder.png'
import companyTemplateThumb from '../../public/projectThumbs/companyTemplate.png'
import mineSweeperImg from '../../public/projectThumbs/mineSweeperImg.png'
import myDevProfileImg from '../../public/projectThumbs/myDevProfileImg.png'
import taskappImg from '../../public/projectThumbs/taskappImg.png'
import worldStatsThumb from '../../public/projectThumbs/worldStatsThumb.png'


// components
import TechDisplay from '../../components/TechDisplay'

// HOOK
const index = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState(placeholder)
  
  const { query: { projectDetails } } = useRouter()

  useEffect(() => {
    const projectData = projectList.find(
      el => el.Name === projectDetails
    )
    if (projectData) {
      setLoading(false) 
      setData(projectData) 
    }

    switch(projectDetails){
      case 'My Dev Profile':
      return setImage(myDevProfileImg)
      case 'iStoreSearcher':
      return setImage(placeholder)
      case 'reactTaskApp':
      return setImage(taskappImg)
      case 'Company Template':
      return setImage(companyTemplateThumb)
      case 'Minesweeper':
      return setImage(mineSweeperImg)
      case 'World Stats':
      return setImage(worldStatsThumb)
      default:
      return setImage(placeholder)
    }
  }, [projectDetails])

  return (
    <div className={style.projectDetails}>
      {/* Head Data */}
      <Head>
        <title>{loading ? 'Loading' : data.Name}</title>
        <meta name="description" content={`${loading ? 'Loading' : data.Name} Project`} />
        <meta name="keywords" content="Developer, Profile, FullStack Web Development" />
        <meta name="author" content="Frederick Williams" />
      </Head>
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
          <Image src={image} height={900} quality={30} alt={`Screen shot of ${projectDetails && projectDetails.Name}`} />
        </div>
      </div>
      <div>
        <div className={style.projectDetailsDiscription}>
          <div className={style.projectDetailsHeading}>
            <Image src={line} alt='line'/><h4>Description</h4><Image src={line} alt='line'/>
          </div>
          <p>
            {
              loading ? 'Loading' : data.description
            }
          </p>
        </div>
        <div className={style.projectDetailsDiscription}>
          <div className={style.projectDetailsHeading}>
            <Image src={line} alt='line' /><h4>Tech</h4><Image src={line} alt='line' />
          </div>
          <div className={style.projectDetailsTechArea}>
            {
              loading? 
                'Loading' 
                : 
                data.tech.map(
                  (el, index) => {
                    return(
                      <TechDisplay data={el} key={index}/>
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