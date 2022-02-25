// style
import style from '../styles/designer.module.css'

// components
import Image from 'next/image'

// assets
import splitProfile from '../public/newSplitPortraitOfFred.png'

const Designer = () => {
  return (
    <div className={style.designerContainer}>
      <p className={style.frontEndText}>Full</p>
      <p>Stack</p>
      <div className={style.image}>
        <Image src={splitProfile} objectFit='responsive' quality={10} priority alt='Dev Profile Image'/>
      </div>
      
    </div>
  )
}

export default Designer