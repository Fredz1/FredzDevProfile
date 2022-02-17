// style
import style from '../styles/projectSample.module.css'

// modules
import Image from 'next/image'
import { useEffect, useState } from 'react'
// assets
import line from '../public/line.svg'

// static data
import { randomiser } from '../static/projectInfo'

// component
import ProjectCard from './ProjectCard'

// HOOK
const ProjectSample = () => {

  const [list, setList] = useState(null)


  useEffect(
    async () => {
      const items = randomiser(2)
      setList(items)
    }
  )


  


  return (
    <div className={style.projectSampleContainer} >
      <div className={style.headline} >
        <Image src={line} /><p>Some of my work</p><Image src={line} />
      </div>
      {/* project area */}
      <div>
      {
        !list ? 
        null
        :
        list.map(
          el => {
            return(
              <ProjectCard projectInfo={el} key={el.URL} />
            )
          }
        )
      }
      </div>
    </div>
  )
}

export default ProjectSample