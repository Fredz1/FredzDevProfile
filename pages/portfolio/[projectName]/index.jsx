// modules
import { useRouter } from "next/router"

// data
import {getOne}  from '../../../static/projectInfo.js'

// modules
import { useEffect, useState } from "react"

// HOOK
const index = () => {

  const router = useRouter()

  const [name, setName] = useState('waiting')

  
  useEffect(async () => {
    const projectData = await getOne(router.query.projectName)
    console.log(projectData)
    setName(projectData.Name)
    
  }, [router]);
  

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default index