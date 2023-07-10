import { Container, Unstable_Grid2 as Grid, TextField, Typography, Button, Link } from '@mui/material'
import TopMenu from '../modules/TopMenu'
import { userLogin } from '../util/login'

import { useState } from 'react'

const INITIAL_STATE = {
  userEmail: 'Test@test.com',
  userPassword: 'testy'
}

const Login = () => {

  const [ userInfo, setUserInfo ] = useState(INITIAL_STATE)

  /* update user form information */
  const updateUserData = fields => {

    setUserInfo(prev => {
      
      return {...prev, ...fields}
    })
    
  }

  const loginRequest = async () => {

    let data = await userLogin(userInfo)

    console.log(data)

    if(data.success){
      console.log(data.data)
    }

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

export default Login