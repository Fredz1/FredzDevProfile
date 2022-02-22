// style
import style from '../styles/techDisplay.module.css'

// assets
import techIcons from '../static/techIcons.js'

// modules
import Image from 'next/image'
import { useEffect, useState } from 'react'

const TechDisplay = ({data}) => {

  const [imgPath, setImgPath] = useState('')

  useEffect(() => {
    
    console.log(techIcons.data)
    console.log(techIcons)

  }, [data])

  return (
    <div>
      {data}
      <img src={imgPath} height={20} width={20} />
    </div>
  )
}

export default TechDisplay