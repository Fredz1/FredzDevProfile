//Mui imports
import { TextField, Button, Container, Unstable_Grid2 as Grid, Typography } from '@mui/material'

// modules
import Head from 'next/head'

//Components
import TopMenu from '../modules/TopMenu'
import Footer from '../modules/Footer'


const contact = () => {

  let formDetails = {
    name: '',
    email: '',
    message: ''
  }

  const handleFormSubmition = () => {
    console.log('submit button pressed')
  }

  return (
    <Container>
      <Head>
        <title>
          Contact Me
        </title>
        <meta name="description" content="Contact details of Fred Williams" />
        <meta name="keywords" content="Developer, Profile, FullStack Web Development, Contact" />
        <meta name="author" content="Frederick Williams" />
      </Head> 
      <TopMenu />

      <Grid container direction='column' md={6} rowGap={2}>

        <Grid>
          <Typography variant='button'>Name</Typography>
          <TextField
            id="outlined"
            fullWidth
            value={formDetails.name}
            onChange={e => formDetails.name = e.target.value}
            variant='standard'
          />
        </Grid>

        <Grid>
        <Typography variant='button'>Email</Typography>
        <TextField
          id="outlined"
          fullWidth
          value={formDetails.email}
          onChange={e => formDetails.email = e.target.value}
          variant='standard'
        />
        </Grid>

        <Grid>
        <Typography variant='button'>Message</Typography>
        <TextField
          fullWidth
          id="outlined-multiline-flexible"
          multiline
          value={formDetails.message}
          onChange={e => formDetails.message = e.target.value}
          variant='standard'
        />
        </Grid>

        <Button
           variant='outlined'
           onClick={() => handleFormSubmition()}
        >

          Submit
        </Button>



      </Grid>
      
      
      <Footer />
    </Container>
  )
}

export default contact