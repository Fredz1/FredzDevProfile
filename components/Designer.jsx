// Components
import Image from 'next/image'

// MUI components
import { 
  Container, 
  Unstable_Grid2 as Grid, 
  Typography 
} from '@mui/material'

// Images
import cartoonMe from '../public/assets/images/cartoonMe.png'

//style
const style = {
  image: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    maxHeight: "100vh"
  }
}

const Designer = () => {
  return (
    <Container
    >
      <Grid 
        container
      >

        <Grid 
          item
          md={7}
          xs={6}
        >
          <Grid container direction='column' >

            <Grid item>

              <Typography variant='h1'>
                Fred 
              </Typography>
              <Typography variant='h1'>
                Made 
              </Typography>
              <Typography variant='h1'>
                This
              </Typography>

            </Grid>
            <Grid item>
              <Typography paragraph={true} align='right' gutterBottom={false}>
                Clean, simple, and user-friendly web designs for your business. 
              </Typography>
              <Typography paragraph={true} align='right' gutterBottom={false}>
                Let Fred take your online presence to the next level.
              </Typography>
            </Grid>



          </Grid>

          

        </Grid>

        <Grid 
          item 
          md={5}
          xs={6}
          sx={{backgroundColor: 'black'}}          
        >
          <Image 
            src={cartoonMe} 
            alt='my avatar' 
            style={style.image}
          />

        </Grid>

      </Grid>

      
    </Container>
  )
}

export default Designer