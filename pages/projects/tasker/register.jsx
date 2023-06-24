import { useState } from "react"
import { useRouter } from 'next/router'
import axios from 'axios'

const Register = () => {

  // useNavigate to push client to login page
  const router = useRouter()

  // State
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const register = async () => {

    const { data } = await axios.post(
      process.env.NODE_ENV === "development" ? 
      'http://localhost:3001/apiv2/taskApp/user/register' : 
      'https://www.fredmadethis.co.za/apiv2/taskApp/user/register',
      {
        name,
        surname,
        email,
        password
      }
    )
    console.log(data)
    data.success ? router.push('/projects/tasker/login') : alert('Probelm with you registration please try again or contact admin')
  }

  return (
    <div className="registerContainer"> 
      {/* 
        Heading
      */}
      <div className="homeHeading">
        <h1>
          Regi
        </h1>
        <h1 className="rotate">
          ster
        </h1>
      </div>

      {/* 
        Input fields
      */}
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="name"
      />
      <input 
        type="text" 
        value={surname} 
        autoComplete='none' 
        onChange={e => setSurname(e.target.value)} 
        placeholder="surname"
      />
      <input 
        type="email" 
        value={email} 
        autoComplete='email' 
        onChange={e => setEmail(e.target.value)} 
        placeholder="email"
      />
      <input 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="password"
      />

      {/* 
        Send details to server
      */}
      <button 
        className="buttonStyle" 
        onClick={() => register()}
      >
        Register
      </button>

    </div>
  )
}

export default Register