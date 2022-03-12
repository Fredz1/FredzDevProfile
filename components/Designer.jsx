// style
import style from '../styles/designer.module.css'

// components
import Image from 'next/image'

// assets
import splitProfile from '../public/newSplitPortraitOfFred.png'

const Designer = () => {
  return (
    <div className={style.designerContainer}>

      <h2>Fred<p className={style.frontEndText}>Made</p>This</h2>
      <div className={style.image}>
        <Image src={splitProfile} objectFit='contain' quality={45} priority alt='Developer Profile Image'/>
      </div>
      
    </div>
  )
}

export default Designer