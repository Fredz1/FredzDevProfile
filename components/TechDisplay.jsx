// style
import style from '../styles/techDisplay.module.css'

// assets
import pathToIcons from '/static/techIcons.js'

// modules
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TechDisplay = ({tech}) => {

  const [imgPath, setImgPath] = useState('')

  useEffect(() => {
    const path = pathToIcons.tech
    setImgPath(path)
  }, [tech])


  return (
    <div>
      {tech}
      <img src={imgPath} height={20} alt={`${tech} logo`} />
    </div>
  )
}

export default TechDisplay