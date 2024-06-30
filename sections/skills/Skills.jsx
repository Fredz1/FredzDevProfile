"use client";

import style from './style.module.scss'
import Curve from '../../modules/CurveAnimation/Curve';
import Bounce from '../../modules/Three/Bounce';
import SkillsBlurb from '../../modules/SkillsBlurb/SkillsBlurb';

const Skills = () => {
  

  return (
    <div className={ style.skills } >

      <div className={ style.blurb }>
        <SkillsBlurb />
      </div >

      <div className={style.curve}>
        <Curve />
      </div>

    </div>
  )
}

export default Skills;