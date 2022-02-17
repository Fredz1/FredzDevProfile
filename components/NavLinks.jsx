// style
import style from '../styles/navLinks.module.css'

// Modules
import Link from 'next/link'

const NavLinks = () => {
  return (
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
  )
}

export default NavLinks