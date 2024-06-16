import style from './contactStyle.module.scss';
import Link from 'next/link';
import DeptImage from '../../public/images/ellipse-1.svg'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className={style.section}>
      <div className={ style.left }>
        <div className={style.contactLinks}>
          <Link href="mailto:fred@fredmadethis.co.za" className={style.link}>
            fred@fredmadethis.co.za
          </Link>
          <Link href="tel:+27761349290" className={style.link}>
            076 134 9290
          </Link>
        </div>
        <div className={style.socialLinks}>
          <Link href="https://www.linkedin.com/in/fredmadethis/" className={style.link} target='_blank'>
            <p>LinkedIn</p>
          </Link>
          <Link href="https://www.facebook.com" className={style.link} target='_blank'>
            Facebook
          </Link>
        </div>
        
      </div>
      <div className={ style.right }>
        <div className={style.deptList}>
          <Department headline="Dev" description="Let's develop exceptional digital products & services" />
          <Department headline="Product" description="Get an awesome UI/UX designed" />
          <Department headline="Brand" description="Get a solution that just works" />
        </div>
        <div className={style.contact}>
          Get in touch
        </div>
      </div>
    </section>
  );
};


const Department = ({ headline, description }) => {
  
  return (
    <div className={ style.department }>
      <div>
        <Image src={DeptImage} alt="department" />
        <h3>{ headline }</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Contact;