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
  
  const updateUserInfo = field => {
    
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
          Login
        </Typography>
        <TextField 
          variant='standard'
          value={userInfo.userEmail}
          onChange={e => updateUserData({userEmail:e.target.value}) }
        />
        <TextField 
          variant='standard'
          value={ userInfo.userPassword }
          onChange={ e => updateUserData( { userPassword:e.target.value } ) }
        />
        <Button variant='medium' onClick={() =>loginRequest()}>
          Login
        </Button>
        <Link href="/register">
          <Typography variant="body1">
            register
          </Typography>
        </Link>
      </Grid>
    </Container>
  )
}

export default Register