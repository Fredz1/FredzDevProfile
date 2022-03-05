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
        <h3>
          Some of my work
        </h3>
        <p>
          I may not have the biggest or greatest portfolio, but, I can tell you that I can actually do this everyday.
        </p>
      </div>
      <div className={style.image}>
        <Image src={cartoonMe} quality={20} layout='intrinsic' alt='fred as a cartoon'/>
      </div>
    </div>
  )
}

export default PortfolioHead