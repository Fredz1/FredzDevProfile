// style
import style from '../styles/designer.module.css'

// components
import Image from 'next/image'

// assets
import splitProfile from '../public/splitPortraitOfFred.png'

const Designer = () => {
  return (
    <div className={style.designerContainer}>
      <p className={style.frontEndText}>frontEnd</p>
      <div className={style.imgProfileAndText}>
        <div className={style.fullstackText}>
          <p className={style.frontEndText}>Full</p><p>Stack</p>
        </div>
        <div className={style.image}>
          <Image src={splitProfile} layout='responsive' priority/>
        </div>
      </div>
      <p>backEnd</p>
    </div>
  )
}

export default Designer