import style from './factsStyle.module.scss'
import SEOGraph from './SEOGraph'

const Facts = () => {


  return (
    <div className={style.section}>
      <div className={style.left}>
        <h2>Some facts are just that,facts.</h2>
      </div>
      <div className={style.right}>
        <h2>SEO can boost organic traffic by 50%</h2>
        <div className={style.visualContainer}>
          <div className={ style.legend }>
            legend here
          </div>
          <div className={ style.graphBox }>
            <SEOGraph />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;