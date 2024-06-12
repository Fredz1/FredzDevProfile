import Image from 'next/image';
import Link from 'next/link';
import style from './header.module.scss';
import logo from '../../assets/dot-icon.png'

function Header() {
  return (
    <div className={ style.header }>
      <div className={ style.links }>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={style.logoContainer}>
        <div>
          <Image className={style.logo} src={logo} alt="site logo" width={50} priority />
        </div>
        <h1>
          FredMadeThis.
        </h1>
      </div>
      <div className={style.contactMe}>
        <p>get in touch</p>
      </div>
    </div>
  );
}

export default Header;