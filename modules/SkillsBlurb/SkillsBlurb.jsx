import style from './skillsBlurbStyle.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'framer-motion';

const SkillsBlurb = () => {

  const text = useRef(null);
  const [elementProgress, setElementProgress] = useState(0);
  const { scrollYProgress } = useScroll(
    {
      target: text,
      offset: [0.0, 0.65]
    }
  );

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      setElementProgress(latest)
    }
  )

  return (
    <div ref={text} className={style.container}>
      <p>Creating a great website is hard</p>
      <AnimatePresence mode='wait'>
        <motion.p
          layout layoutRoot
          key={elementProgress > 0.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {
            elementProgress > 0.5 ?  "I know" : "Let me help"
          }
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default SkillsBlurb;