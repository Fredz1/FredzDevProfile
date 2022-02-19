// style
import style from '../styles/projectCard.module.css'

// modules
import Image from 'next/image'
import Link from 'next/link'

//assets
import placeholder from '../public/projectThumbs/placeholder.png'

// HOOK
const ProjectCard = ({projectInfo}) => {


  return (
    <div className={style.projectCardContainer}>
      <h4>
        {projectInfo.Name}
      </h4>
      
      <div className={style.imageContainer}>
        {
          projectInfo.image ?
            <Image quality={30} height={290} width={515} src={projectInfo.image}/>
            :
            <Image src={placeholder} height={361} width={642}/>
        }
      </div>
      <div className={style.projectCardButtons}>
        {
          projectInfo.URL ? 
            <button>
              <a href={projectInfo.URL} target="_blank">
                Preview
              </a>
            </button> 
            : 
            <p>
              No Preview
            </p>
        }
        <button>
          <Link href={`/portfolio/${projectInfo.Name}`}>
            <a>
              More Info
            </a>
          </Link>
        </button>
      </div>
      
    </div>
  )
}

export default ProjectCard