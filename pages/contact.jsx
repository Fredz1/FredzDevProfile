//Mui imports
import * as React from 'react'
import { TextField, Button } from '@mui/material'


// component
import ContactHead from '../components/ContactHead'

// modules
import Head from 'next/head'

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
    <div>
    <Head>
      <title>
        Contact Me
      </title>
      <meta name="description" content="Contact details of Fred Williams" />
      <meta name="keywords" content="Developer, Profile, FullStack Web Development, Contact" />
      <meta name="author" content="Frederick Williams" />
    </Head> 

      <ContactHead />

      <div>

        <TextField
          id="outlined"
          label="Your Name"
          defaultValue=""
          onChange={() => formDetails.name = this.value}
        />

        <TextField
          id="outlined"
          label="Email"
          defaultValue=""
          onChange={() => formDetails.email = this.value}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Your Message"
          defaultValue=""
          onChange={() => formDetails.message = this.value}
        />

        <Button
           variant='outlined'
           onClick={() => handleFormSubmition()}
        >

          Submit
        </Button>



      </div>
      
      
      
    </div>
  )
}

export default contact