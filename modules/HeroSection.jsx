import { Box, Unstable_Grid2 as Grid, Container, Typography, LinearProgress } from "@mui/material";
import { skills } from '../Data/skills'

import logo from '../assets/dot-icon.png'

import Image from 'next/image'


const HeroSection = () => {
  return (
    <Container>
      

        <Grid container>
          <Grid md={4} sx={{ display: "grid", placeItems: "center", overflow: 'hidden' }}>
            <Image src={ logo } alt='site logo' sx={ { objectFit: 'contain' } } priority width={ 150 } />
          </Grid>
          <Grid md style={ { display: "grid", placeItems: "center", overflow: 'hidden' } }>
            <Typography variant='h2' fontWeight={ 850 } sx={ { color: 'white', fontSize: '5vmin' } } >
              FredMadeThis.
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Typography variant="body1">
            Hello There, I am Fred.
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="body1">
            Fullstack Developer, UX architect and JavaScript engineer.
          </Typography>
        </Grid>

        <Grid mt={4}>
          <Typography variant="body1">
            Specialities:
          </Typography>
        </Grid>

        <Grid mt={4}>
          <Typography variant="body1">
            Pressing buttons with my fingers to make magic happen on the internet.
          </Typography>
          <Typography variant="body1">
            You can view my projects, shop, resume, or contact me.
          </Typography>
        </Grid>

        <Grid>
          **Add Social media icons here **
        </Grid>
      
    </Container>
  );
}

export default HeroSection
