// style
import style from '../styles/portfolioHead.module.css'

// components
import Image from 'next/image'

// Assets
import cartoonMe from '../public/cartoonMe.png'

const PortfolioHead = () => {
  return (
    <div className={style.portfolioHeadContainer}>
      <div className={style.textContainer}>
        <h2>
          portfolio.
        </h2>
        <h4>
          Some of my work
        </h4>
        <p>
          I may not have the biggest or greatest portfolio, but, I can tell you that I can actually do this everyday.
        </p>
      </div>
      <div className='image'>
        <Image src={cartoonMe} height={500} quality={30} objectFit='contain' alt='fred as a cartoon'/>
      </div>
    </div>
  )
}

export default PortfolioHead