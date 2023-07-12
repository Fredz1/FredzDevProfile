import { useState } from "react"
import { useRouter } from 'next/router'
import axios from 'axios'

import { Container, Unstable_Grid2 as Grid, TextField, Typography, Button, Link } from '@mui/material'

import { userRegistration } from "../util/userActions"

import TopMenu from "../modules/TopMenu"

const INITIAL_DATA = {
  name: '',
  surname: '',
  email: '',
  password: '',
}

const Register = () => {

  // useNavigate to push client to login page
  const router = useRouter()

  // State
  const [ userInfo, setUserInfo] = useState(INITIAL_DATA)
  
  const updateUserData = fields => {

    setUserInfo(prev => {
      
      return {...prev, ...fields}
    })
    
  }


  const register = async () => {

    const request = await userRegistration()
    
    data.success ? router.push('/projects/tasker/login') : alert('Problem with you registration please try again or contact admin')
  }

  return (
    <Container>
      <TopMenu />
      <Grid container direction='column'>
        <Typography variant='h4'>
          Register
        </Typography>
        <TextField 
          variant='standard'
          label='Name'
          placeholder="Your Name"
          value={userInfo.name}
          onChange={e => updateUserData({name:e.target.value}) }
        />
        <TextField 
          label='Surname'
          variant='standard'
          placeholder="Your Surname"
          value={ userInfo.surname }
          onChange={ e => updateUserData( { surname:e.target.value } ) }
        />
        <TextField 
          label='Email'
          variant='standard'
          placeholder="email@email.com"
          type='email'
          value={ userInfo.email }
          onChange={ e => updateUserData( { email:e.target.value } ) }
        />
        <TextField 
          label='Password'
          variant='standard'
          type='password'
          value={ userInfo.password }
          onChange={ e => updateUserData( { password:e.target.value } ) }
        />
        <Button variant='medium' onClick={() =>loginRequest()}>
          Submit
        </Button>
        <Link href="/register" underline="none">
          <Typography variant="body1">
            Login
          </Typography>
        </Link>
      </Grid>
    </Container>
  )
}

export default Register