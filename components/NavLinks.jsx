// style
import style from '../styles/navLinks.module.css'

// Modules
import Link from 'next/link'

const NavLinks = () => {
  return (
    <div className={style.navLinks}>
      <Link href='/' >
        <a aria-label='home'>home</a>
      </Link>
      <Link href='/about' >
        <a aria-label='about'>about</a>
      </Link>
      <Link href='/portfolio' >
        <a aria-label='portfolio'>portfolio</a>
      </Link>
      <Link href='/blog' >
        <a aria-label='blog'>blog</a>
      </Link>
      <Link href='/contact' >
        <a aria-label='contact'>contact</a>
      </Link>
    </div>
  )
}

export default NavLinks