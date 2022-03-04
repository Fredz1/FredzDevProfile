// style
import style from '../styles/techDisplay.module.css'

// assets
import placeholder from '../public/projectThumbs/placeholder.png'
import axios from '../public/techIcons/axiosIcon.png'
import css3 from '../public/techIcons/CSS3Icon.png'
import expressJS from '../public/techIcons/expressjsIcon.png'
import html5 from '../public/techIcons/HTML5Icon.png'
import jwt from '../public/techIcons/jwtIcon.png'
import mongoDB from '../public/techIcons/mongodbIcon.png'
import nextJS from '../public/techIcons/NextjsIcon.png'
import reactJS from '../public/techIcons/ReactIcon.png'

// modules
import Image from 'next/image'
import { useEffect, useState } from 'react'

// HOOK
const TechDisplay = ({data}) => {

  const [image, setImage] = useState(placeholder)


  useEffect(() => {
    switch(data){
      case 'axios':
        setImage(axios)
        break
      case 'css3':
        setImage(css3)
        break
      case 'expressJS':
        setImage(expressJS)
        break
      case 'html5':
        setImage(html5)
        break
      case 'jwt':
        setImage(jwt)
        break
      case 'mongoDB':
        setImage(mongoDB)
        break
      case 'nextJS':
        setImage(nextJS)
        break
      case 'reactJS':
        setImage(reactJS)
        break
    }
    
  }, [data]);
  

  return (
    <div className={style.techDisplayContainer} >
      <p>{data}</p>
      <Image src={image} height={28} width={28} alt={data}/>
    </div>
  )
}

export default TechDisplay