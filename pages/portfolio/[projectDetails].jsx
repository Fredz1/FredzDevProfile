// style
import style from '../../styles/projectDetails.module.css'

// modules
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'

// data
import { getOne }  from '../../static/projectInfo.js'

import placeholder from '../../public/projectThumbs/placeholder.png'

// modules
import { useEffect, useState } from "react"

// HOOK
const index = () => {

  const [data, setData] = useState({})
  
  const { query: { projectDetails } } = useRouter()

  useEffect(() => {
    const projectData = getOne(projectDetails)
    setData(projectData)
    
  }, [projectDetails])



  

  

  return (
    <div className={style.projectDetails}>
      {/* Header */}
      <div className={style.projectDetailsContainer}>
        <div className={style.projectDetailsContainerTextArea}>
          <h2>
            {
              !data ? 'Loading' : data.Name
            }
          </h2>
          <h4>
            {
              !data ? 'Loading' : data.description
            }
          </h4>
        </div>
        <div className={style.headerImage}>
          {
            !data ? 
              <Image src={placeholder} height={200} width={200} quality={30} objectFit='contain' />
              :
              <img src={data.image} layout='responsive'/>
          }
        </div>
      </div>
      <div>
        project Info
      </div>
    </div>
  )
}

export default index