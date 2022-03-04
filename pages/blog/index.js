// Style
import style from '../../styles/underContruction.module.css'


// Assets
import underContructionImage from '../../public/underConstructionImage.png'

// Modules
import Image from 'next/image'

// Hook
const index = () => {
  return (
    <div className={style.underContructionContainer} >
      <Image src={underContructionImage} height={400} objectFit='contain' alt='under construction notification'/>
    </div>
  )
}

export default index