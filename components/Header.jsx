// style
import style from '../styles/header.module.css'

// modules
import Image from 'next/image'

// components
import NavLinks from './NavLinks'

// assets
import facebookIcon from '../public/socialMediaIcons/facebook.png'
import linkedInIcon from '../public/socialMediaIcons/linkedin.png'
import github from '../public/socialMediaIcons/github.png'


const Header = () => {
  return (
    <div className={style.headerContainer}>
      <NavLinks />
      <div className={style.socialMediaIcons}>

        <Image src={facebookIcon} />
        <Image src={linkedInIcon} />
        <Image src={github} />

      </div>

    </div>
  )
}

export default Header