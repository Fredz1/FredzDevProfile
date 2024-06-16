import { useState } from "react";
import style from "./style.module.scss"
import { AnimatePresence, motion } from 'framer-motion';

import tags from '../../Data/pitchTags'

const Pitch = () => {

  const [box1Switch, setBox1Switch] = useState(false);
  const [box2Switch, setBox2Switch] = useState(false);
  const [box3Switch, setBox3Switch] = useState(false);

  return (
    <div className={style.pitch}>
      <div className={style.heroText}>
        <h1>
          Designs that ensure
        </h1>
        <h1>
          your market success.
        </h1>
      </div>
      <div className={ style.pitchBox } >
        <div
          className={ style.leftBox }
          onMouseEnter={ () => setBox1Switch(true) }
          onMouseLeave={ () => setBox1Switch(false) }
        >
          <h2>Web Development</h2>
          <AnimatePresence
            mode='popLayout'
            initial={ false }
            presenceAffectsLayout={ false }
          >
            <motion.div
              layout 
              key={box1Switch}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={ { duration: 0.2 } }
              className={ style.leftAnimationText }
            >
              <div className={ style.leftAnimationText } >
              {
                box1Switch ?
                  <Marquee text="Web Development" />
                : 
                <Tags list={tags.webflowDev}  />
              }
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className={ style.rightTop }
          onMouseEnter={ () => setBox2Switch(!box2Switch) }
          onMouseLeave={ () => setBox2Switch(!box2Switch) }
        >
          <h2>UX/UI Design</h2>
          <AnimatePresence
            mode='popLayout'
            initial={ false }
            presenceAffectsLayout={ false }
          >
            <motion.div
              layout
                key={box2Switch}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={ { duration: 0.25 } }
            >
              <div className={ style.leftAnimationText } >
                {
                  box2Switch ?
                    <Marquee text="UX/UI Design" />
                    :
                    <div >
                      <Tags list={tags.ux}  />
                    </div>
                }
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          className={ style.rightBottom }
          onMouseEnter={ () => setBox3Switch(!box3Switch) }
          onMouseLeave={ () => setBox3Switch(!box3Switch) }
        >
          <h2>SEO</h2>
          <AnimatePresence
            mode='popLayout'
            initial={ false }
            presenceAffectsLayout={ false }
          >
            <motion.div
              key={box3Switch}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={ { duration: 0.25 } }
            >
              <div className={ style.leftAnimationText } >
                {
                  box3Switch ?
                  <Marquee text="SEO" />
                  :
                  <div >
                    <Tags list={tags.seo}  />
                  </div>
                  }
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Pitch;

const Tags = ({ list }) => {
  
  return (
    <div className={style.taglist}>
      {
        list.map(
          (tag, index) => {
            return <div className={ style.tag } key={`${index}-${tag}`}>{tag}</div>
          }
          )
      }
    </div>
  )
}

const Marquee = ({ text }) => {
  
  return (
    <div className={style.marquee}>
      <motion.div
        className="marquee"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        {text}
      </motion.div>
    </div>
  )
}