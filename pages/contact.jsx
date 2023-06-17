import { useState } from 'react'
import axios from 'axios'

//Mui imports
import { TextField, Button, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material'

// modules
import Head from 'next/head'

//Components
import TopMenu from '../modules/TopMenu'
import Footer from '../modules/Footer'

const Contact = () => {

  let formDetails = {
    userName: 'fred',
    email: 'fred@fred.com',
    message: 'test message'
  }

  const [data, setData] = useState(formDetails)
  
  const handleInput = field => {
    setData(
      previous => {
        return {...previous, ...field}
      })
  }

  const handleFormSubmition = async () => {
    //create form
    const formData = new FormData()
    formData.set(data, data)

    //send form to api with axios
    const request = await axios.post(
      process.env.NODE_ENV === `development` ?
        `http://localhost:3001/api/contact`:
        `https://www.fredmadethis.co.za/api/contact`,
        {
          body: formData
        }
    )

    console.log(request.data)

  }

  return (
    <Container>
      <Head>
        <title>
          Contact Me
        </title>
        <meta name="description" content="Contact form for Fred Williams" />
        <meta name="keywords" content="Developer, Profile, FullStack Web Development, Contact" />
        <meta name="author" content="Frederick Williams" />
      </Head> 
      <TopMenu />

      <Grid container direction='column' md={6} rowGap={2}>

        <Grid>
          <Typography variant='button'>Name</Typography>
          <TextField
            fullWidth
            id="outlined"
            value={data.userName}
            onChange={e => handleInput({userName: e.target.value})}
            variant='standard'
          />
        </Grid>

        <Grid>
          <Typography variant='button'>Email</Typography>
          <TextField
            fullWidth
            id="outlined"
            value={data.email}
            onChange={e => handleInput({email: e.target.value})}
            variant='standard'
          />
        </Grid>

        <Grid>
          <Typography variant='button'>Message</Typography>
          <TextField
            fullWidth
            id="outlined-multiline-flexible"
            multiline
            rows={5}
            value={data.message}
            onChange={e => handleInput({message: e.target.value})}
            variant='standard'
          />
        </Grid>

        <Button
           variant='submitButton'
           onClick={() => handleFormSubmition()}
        >
          Submit
        </Button>



      </Grid>
      
      
      <Footer />
    </Container>
  )
}

export default Contact