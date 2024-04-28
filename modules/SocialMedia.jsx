import React, { useEffect } from 'react';
import Link from 'next/link';
import style from '../app/style/socialMedia.module.css'
import { WhatsappSVG, FacebookSVG, LinkedInSVG, MailSVG } from "../assets/icons/SocialMediaIcons";


const SocialMedia = ({direction, iconsOnly = false}) => {

  const iconSize = "32px";

  const whatsAppMessage = "https://wa.me/27761349290?text=I%20am%20interested%20in%20working%20with%20a%20you."

  return (
    <div className={ direction === "row" ? style.socialBlockRow : style.socialBlockColumn }>
      <Link href="https://www.facebook.com/fredmadethis/" className={style.socialLink} target="_blank">
        <FacebookSVG width={iconSize} height={iconSize} />
        {
          iconsOnly ? null : <p>Facebook</p>
        }
      </Link>

      <Link href="https://www.linkedin.com/in/frederick-williams-cpt/" className={style.socialLink} target="_blank">
        <LinkedInSVG width={iconSize} height={iconSize} />
        {
          iconsOnly ? null : <p>LinkedIn</p>
        }
        
      </Link>

      <Link href={whatsAppMessage} className={style.socialLink} target="_blank">
        <WhatsappSVG width={iconSize} height={iconSize} />
      {
        iconsOnly ? null : <p>Whatsapp</p>
      }
      </Link>

      <Link href="mailto:fredwil25@gmail.com" className={style.socialLink} target="_blank">
        <MailSVG width={iconSize} height={iconSize} />
        {
          iconsOnly ? null : <p>Mail</p>
        }
      </Link>
    </div>
  );
}

export default SocialMedia;