// style
import style from '../styles/projectCard.module.css'

// modules
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

//assets
import placeholder        from '../public/projectThumbs/placeholder.png'
import companyTemplateImg from '../public/projectThumbs/companyTemplate.png'
import MinesweeperImg     from '../public/projectThumbs/mineSweeperImg.png'
import myDevProfileImg    from '../public/projectThumbs/myDevProfileImg.png'
import taskApp            from '../public/projectThumbs/taskappImg.png'
import worldStatsThumb    from '../public/projectThumbs/worldStatsThumb.png'
import iStoreSearcher     from '../public/projectThumbs/istoreSearcherImg.png'


// HOOK
const ProjectCard = ({projectInfo}) => {

  const [displayImage, setDisplayImage] = useState(placeholder)

  useEffect(() => {
    switch(projectInfo.Name){
      case 'My Dev Profile':
        setDisplayImage(myDevProfileImg)
        break
      case 'iStoreSearcher':
        setDisplayImage(iStoreSearcher)
        break
      case 'reactTaskApp':
        setDisplayImage(taskApp)
        break
      case 'Company Template':
        setDisplayImage(companyTemplateImg)
        break
      case 'Minesweeper':
        setDisplayImage(MinesweeperImg)
        break
      case 'World Stats':
        setDisplayImage(worldStatsThumb)
        break
      default:
        setDisplayImage(placeholder)
    }
  }, [projectInfo]);


  return (
    <div className={style.projectCardContainer}>
      <h4>
        {projectInfo.Name}
      </h4>
      
      <div className={style.imageContainer}>
        <Image quality={10} src={displayImage} objectFit='fill' alt={`${projectInfo.Name}`} />
      </div>
      <div className={style.projectCardButtons}>
        {
          projectInfo && projectInfo.URL ? 
            <button>
              <a href={projectInfo.URL} rel='noreferrer' target="_blank" aria-label='preview'>
                {`${projectInfo.Name}`}
              </a>
            </button> 
            : 
            <p>
              No Preview
            </p>
        }
        <button>
          <a href={projectInfo.githubLink} rel='noreferrer' target="_blank" aria-label='preview'>
            github
          </a>
        </button> 
        <button>
          <Link href={`/portfolio/${projectInfo.Name}`} aria-label='Project information'>
            <a>
              Details
            </a>
          </Link>
        </button>
      </div>
      
    </div>
  )
}

export default ProjectCard