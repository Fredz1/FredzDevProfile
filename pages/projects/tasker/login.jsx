import { useState } from "react"
import axios from 'axios'
import { Link } from "@mui/material"
import { useRouter } from 'next/router'

const Login = () => {
  // State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Router initialise
  const router = useRouter()

  /* 
    @desc: if user is valid send them to dashboard else alert them to incorrect details entered
  */
  const login = async () => {
    const data  = await axios.post(
      process.env.NODE_ENV === 'development' ? 
      'http://localhost:3001/apiv2/taskApp/user/login' : 
      'https://www.fredmadethis.co.za/apiv2/taskApp/user/login',
      {
        email,
        password,
      },
      {
        withCredentials: true
      }
    )
    // request returns truethy or falsey
    data.data.success ? router.push('/projects/tasker/maintasks') : alert(data.response || 'failed')
  }


  return (
    <div className="loginPage">
      <div className="loginContainer">

        <h1 className="loginPageHeading">Login</h1>

        <input 
          label='email' 
          type="text" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Email"
        />
        <input 
          label='password' 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Password"
        />

        <button className="buttonStyle" onClick={() => login()}>Login</button>

        <div className="loginLinks">
          &rarr;<Link underline="none" href='/projects/tasker/register/'>
            Register
          </Link>&larr; 
          &rarr;<Link underline="none" href='/projects/tasker/'>
            Home
          </Link>&larr;</div>

      </div>
    </div>
  )
}

export default Login