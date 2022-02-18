// style
import style from '../styles/projectCard.module.css'

// modules
import Image from 'next/image'

//assets
import placeholder from '../public/projectThumbs/placeholder.png'

// HOOK
const ProjectCard = ({projectInfo}) => {


  return (
    <div className={style.projectCardContainer}>
      <h4>
        {projectInfo.Name}
      </h4>
      
      <div className={style.imageConatainer}>
        {
          projectInfo.image ?
            <Image quality={30} height={290} width={515} src={projectInfo.image}/>
            :
            <Image src={placeholder} height={361} width={642}/>
        }
      </div>
      <div className={style.projectCardButtons}>
        <button>Goto site</button>
        <button>More Info</button>
      </div>
      
    </div>
  )
}

export default ProjectCard