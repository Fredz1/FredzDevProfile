import style from '../styles/header.module.css'
import Link from 'next/link'
import Image from 'next/image'

// assets
import facebookIcon from '../public/socialMediaIcons/facebook.png'
import linkedInIcon from '../public/socialMediaIcons/linkedin.png'
import github from '../public/socialMediaIcons/github.png'
import logo from '../public/fredLogo.png'

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.navLinks}>
        <Link href='/about' >
          <a>about</a>
        </Link>
        <Link href='/portfolio' >
          <a>portfolio</a>
        </Link>
        <Link href='/blog' >
          <a>blog</a>
        </Link>
        <Link href='/contact' >
          <a>contact</a>
        </Link>
      </div>
      <div className={style.socialMediaIcons}>
        <Image src={facebookIcon} />
        <Image src={linkedInIcon} />
        <Image src={github} />

      </div>

    </div>
  )
}

export default Header