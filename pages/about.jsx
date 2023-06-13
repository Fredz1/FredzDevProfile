// Assets
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Grid'
import { Typography } from '@mui/material'


const about = () => {
  return (
    <Container 
      container
      direction='column' 
      spacing={10} 
      alignItems="center"
      marginTop={5}
      marginBottom={5}
    >

    <Grid item>

      <Typography variant='h2'>
        Hi, I am Fred.  Nice to meet you.
      </Typography>

    </Grid>
      
    <Grid item rowSpacing={6}>

      <Typography variant='h3' marginY={3}>
        Designer
      </Typography>
      <p>
        I value simple, clean designs and thoughtful interactions.
      </p>
      <Typography variant='h3' marginY={3}>
        Frontend Developer
      </Typography>
      <p>
        I like coding things from scratch and enjoy brining ideas to life in the browser.
      </p>
      <Typography variant='h3' marginY={3}>
        Backend Developer
      </Typography>
      <p>
        I enjoy the thought that goes into creating a good, clean and simple backend.
      </p>

      

    </Grid>
      
    
    </Container>
  
  
  )
}



export default about