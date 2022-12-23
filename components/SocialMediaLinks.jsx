// style
import style from '../styles/socialMediaLink.module.css'

//Modules
import { Link } from 'next/link'
import { Image } from 'next/image'

//Assets
import facebookIcon from '../public/socialMediaIcons/facebook.png'
import linkedInIcon from '../public/socialMediaIcons/linkedin.png' 
import github from '../public/socialMediaIcons/github.png'


const SocialMediaLinks = () => {
  return (
    <div className={style.socialMediaIcons}>

        <Link href={'https://www.facebook.com/fredwil25/'}>
          <Image src={facebookIcon} alt='facebook link'/>
        </Link>

        <Link href={'https://www.linkedin.com/in/frederick-williams-b2215730/'}>
          <Image src={linkedInIcon} alt='LinkedIn link'/>
        </Link>

        <Link href={'https://github.com/Fredz1'}>
          <Image src={github} alt='github link'/>
        </Link>

      </div>
  );
}

export default SocialMediaLinks
