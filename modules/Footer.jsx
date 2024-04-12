import style from '../app/style/footer.module.scss'
import Link from 'next/link'

const Footer = () => {

  const currentYear = new Date().getFullYear()

  const whatsAppMessage = "https://wa.me/27761349290?text=I%20am%20interested%20in%20working%20with%20a%20you."

  return (
    <footer className={style.footer}>
      <div className={style.copyDisclaimers}>
        <p>&copy; fredmadethis {currentYear}</p>
      </div>
      <div>
        logo here
      </div>
      <div className={style.links}>
        <Link href="/">
          Home
        </Link>
      </div>
    </footer>
  )
}

export default Footer