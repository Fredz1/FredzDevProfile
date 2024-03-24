import React from 'react';
import Link from 'next/link';
import style from '../app/style/socialMedia.module.css'


const SocialMedia = ({direction}) => {

  const iconSize = "32px";

  

  return (
    <div className={direction === "row" ? style.socialBlockRow :style.socialBlockColumn }>
      <Link href="https://www.facebook.com/fredmadethis/" className={style.socialLink}>
        <svg
          fill="#000000"
          height={iconSize}
          width={iconSize}
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310 310"
        >
          <g id="XMLID_834_">
            <path 
              id="XMLID_835_" 
              d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
              c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
              V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
              C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
              c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
              fill='#0F0F0F'
            />
          </g>
        </svg>
        <p>Facebook</p>
      </Link>
      <Link href="https://www.linkedin.com/in/frederick-williams-cpt/" className={style.socialLink}>
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"/>
          <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"/>
          <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
        </svg>
        <p>LinkedIn</p>
      </Link>
      <Link href="https://www.whatsapp.com" className={style.socialLink}>
        <svg width={iconSize} height={iconSize} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="#000000">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path id="whatsappIcon" d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" />
                  </g>
              </g>
          </g>
      </svg>
      <p>Whatsapp</p>
      </Link>
      <Link href="mailto:fredwil25@gmail.com" className={style.socialLink}>
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      <p>Mail</p>
      </Link>
    </div>
  );
}

export default SocialMedia;