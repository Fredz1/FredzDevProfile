import Header from '../../modules/Header/Header'
import style from './heroStyle.module.scss'

function Hero() {
  return (
    <div className={style.hero}>
      <Header />
      <div className={ style.mainText }>
        <div className={style.mainTopText}>
          <h1>Design a solution</h1>
          <h1>which works for you</h1>
        </div>
        <div className={ style.mainBottomText }>
          <h3>Let me plan, design and build</h3>
          <h3>web applications that are tailored to your needs.</h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;