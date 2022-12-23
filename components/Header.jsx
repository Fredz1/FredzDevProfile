// style
import style from '../styles/header.module.css'

// modules
import Image from 'next/image'
import Link from 'next/link'

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

      <Link href={'https://www.facebook.com/fredwil25/'}>
        <Image src={facebookIcon} alt='facebook link'/>
      </Link>

      <Link href={'https://www.linkedin.com/in/frederick-williams-b2215730/'}>
        <Image src={linkedInIcon} alt='LinkedIn link'/>
      </Link>

      <Link href={'https://github.com/Fredz1'}>
        <Image src={github} alt='github link'/>
      </Link>

      </div>
    </div>
  )
}

export default Header