// style
import style from '../styles/contactHead.module.css'

// components
import Image from 'next/image'
import Link from 'next/link'

// Assets
import cartoonMe from '../public/cartoonMe.png'
import facebookIcon from '../public/socialMediaIcons/facebookSocialMediaColor.png'
import linkedInIcon from '../public/socialMediaIcons/linkedinSocialMediaColor.png'
import githubIcon from '../public/socialMediaIcons/githubSocialMediaColor.png'

const ContactHead = () => {

  return (
    <div className={style.contactHeadContainer}>
      <div className={style.textContainer}>
        <h2>
          contact me.
        </h2>
        <h3>
          I once drew a perfect circle.
        </h3>
        <div className={style.socialLinks}>
          <Link href='https://www.facebook.com/fredwil25/'>
            <Image src={facebookIcon} quality={30} alt={'Facebook Profile Icon'}/>
            <p>facebook</p>
          </Link>
          <Link href='https://www.linkedin.com/in/frederick-williams-b2215730/'>
            <Image src={linkedInIcon} quality={30} alt={'Linkedin profile Icon'} />
            <p>LinkedIn</p>
          </Link>
          <Link href='https://github.com/Fredz1'>
            <Image src={githubIcon} quality={30} alt={'Github profile Icon'}/>
            <p>gitHub</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactHead
