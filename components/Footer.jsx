// style
import style from '../styles/footer.module.css'

// components
import NavLinks from './NavLinks'

const Footer = () => {
  return (
    <div className={style.footerContainer} >
      <div className={style.copywrite}>
        &copy; www.fredmadethis.co.za
      </div>
      <NavLinks />
    </div>
  )
}

export default Footer