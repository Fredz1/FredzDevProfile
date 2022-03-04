// style
import style from '../../styles/projectDetails.module.css'

// modules
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

// data
import { projectList }  from '../../public/projectInfo.js'

// assets
import line from '../../public/line.svg'
import placeholder from '../../public/projectThumbs/placeholder.png'
import companyTemplateThumb from '../../public/projectThumbs/companyTemplate.png'
import mineSweeperImg from '../../public/projectThumbs/mineSweeperImg.png'
import myDevProfileImg from '../../public/projectThumbs/myDevProfileImg.png'
import taskappImg from '../../public/projectThumbs/taskappImg.png'
import worldStatsThumb from '../../public/projectThumbs/worldStatsThumb.png'
import iStoreSearcher from '../../public/projectThumbs/worldStatsThumb.png'

// components
import TechDisplay from '../../components/TechDisplay'

// HOOK
const Index = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState(placeholder)
  
  // get URL Params
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
      return setImage(iStoreSearcher)
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
        <meta name="description" content='Project' />
        <meta name="keywords" content="Developer, Profile, FullStack Web Development" />
        <meta name="author" content="Frederick Williams" />
      </Head>
      {/* Header */}
      <div className={style.projectDetailsContainer}>
        {/* Project Headbanner */}
        <div className={style.projectDetailsContainerTextArea}>
          <h2>
            {
              loading ? 'Loading' : data.Name
            }
          </h2>
          
        </div>

        <div className={style.headerImage}>
          <Image src={image} quality={20} objectFit='fill' alt={`Screen shot of ${projectDetails && projectDetails.Name}`} />
        </div>

      </div>
        {/* End of Project Headbanner */}
        
      <div>

        {/* project description section */}
        <div className={style.projectDetailsDiscription}>
          <div className={style.projectDetailsHeading}>
            <Image src={line} alt='line'/>
            <h4>Description</h4>
            <Image src={line} alt='line'/>
          </div>
          <div>
            {
              data && data.description ? 
                data.description.map(
                  (el, Index) => {
                    return(
                      <p key={Index}>
                        {el}
                      </p>
                    )
                  }
                )
                : 
                'Loading' 
            }
          </div>
        </div>
        {/* End of project description section */}
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
                  (el, Index) => {
                    return(
                      <TechDisplay data={el} key={Index}/>
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

export default Index