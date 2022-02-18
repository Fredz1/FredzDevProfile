// style
import style from '../styles/projectCard.module.css'

// modules
import Image from 'next/image'
import { useState } from 'react'

//assets
import placeholder from '../public/projectThumbs/placeholder.png'

const ProjectCard = ({projectInfo}) => {

  const [name, setName] = useState('projectName')

  return (
    <div className={style.projectCardContainer}>
      <h4>
        {projectInfo.Name}
      </h4>
      <div>
        {
          projectInfo.image ?
            <Image src={projectInfo.image} height={100} width={100}/>
            :
            <Image src={placeholder} height={100} width={100}/>
        }
      </div>
    </div>
  )
}

export default ProjectCard