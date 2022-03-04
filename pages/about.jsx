// Style
import style from '../styles/underContruction.module.css'


// Assets
import underContructionImage from '../public/underConstructionImage.png'

// Modules
import Image from 'next/image'

const about = () => {
  return (
    <div className={style.underContructionContainer} >
      <Image src={underContructionImage} height={400} objectFit='contain' about='underConstruction notification' alt='under Contruction notification'/>
    </div>
  )
}

export default about