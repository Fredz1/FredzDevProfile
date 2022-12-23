// style
import style from '../styles/navLinks.module.css'

// Modules
import Link from 'next/link'

const NavLinks = () => {
  return (
    <div className={style.navLinks}>
      <Link href='/' >
        home
      </Link>
      <Link href='/about' >
        about
      </Link>
      <Link href='/portfolio' >
        portfolio
      </Link>
      <Link href='/blog' >
        blog
      </Link>
      <Link href='/contact' >
        contact
      </Link>
    </div>
  )
}

export default NavLinks