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

  const iconSize = 44
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
            <a aria-label='LinkedIn'>
              <Image src={facebookIcon} width={iconSize} height={iconSize} quality={30} alt={'Facebook Profile Icon'}/>
              <p>facebook</p>
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/frederick-williams-b2215730/'>
            <a aria-label='LinkedIn'>
              <Image src={linkedInIcon} width={iconSize} height={iconSize} quality={30} alt={'Linkedin profile Icon'} />
              <p>LinkedIn</p>
            </a>
          </Link>
          <Link href='https://github.com/Fredz1'>
            <a aria-label='LinkedIn'>
              <Image src={githubIcon} width={iconSize} height={iconSize} quality={30} alt={'Github profile Icon'}/>
              <p>gitHub</p>
            </a>
          </Link>
        </div>
      </div>
      <div className='image'>
        <Image src={cartoonMe} height={600} width={600} quality={30} alt={'Linkedin profile Icon'} />
      </div>
    </div>
  )
}

export default ContactHead