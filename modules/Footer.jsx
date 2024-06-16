import style from '../app/style/footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import fmtLogo from '../assets/fmt-logo.png'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <footer className={style.footer}>
      <Image src={fmtLogo} alt='footer logo' className={style.logo} />
    </footer>
  )
}

export default Footer