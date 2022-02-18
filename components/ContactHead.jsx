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
        <h4>
          I once drew a perfect circle.
        </h4>
        <div className={style.socialLinks}>
          <Link href='https://www.facebook.com/fredwil25/'>
            <a>
              <Image src={facebookIcon} width={48} height={48} quality={30}/>
              <p>facebook</p>
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/frederick-williams-b2215730/'>
            <a>
              <Image src={linkedInIcon} width={48} height={48} quality={30}/>
              <p>LinkedIn</p>
            </a>
          </Link>
          <Link href='https://github.com/Fredz1'>
            <a>
              <Image src={githubIcon} width={48} height={48} quality={30}/>
              <p>gitHub</p>
            </a>
          </Link>
        </div>
      </div>
      <div className='image'>
        <Image src={cartoonMe} height={600} width={600} quality={30} objectFit='contain'/>
      </div>
    </div>
  )
}

export default ContactHead