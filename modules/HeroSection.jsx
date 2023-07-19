import { Box, Unstable_Grid2 as Grid, Container, Typography, LinearProgress } from "@mui/material";
import { skills } from '../Data/skills'

import logo from '../assets/dot-icon.png'

import Image from 'next/image'


const HeroSection = () => {
  return (
    <Box my={4}>
      <Container disableGutters>

        <Grid container>
          <Grid xs={4}>
            <Image src={logo} alt='site logo' objectFit="contain" priority width={175} />
          </Grid>
          <Grid xs={8}>
            <Typography variant='h2' fontWeight={650} alignSelf='center'>
              FredMadeThis.
            </Typography>
          </Grid>
        </Grid>

          <Grid>
            <Typography variant="body1">
              Im Fred
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="body1">
              Fullstack Developer, UX architect and JavaScript engineer
            </Typography>
          </Grid>
          <Grid mt={4}>
            <Typography variant="body1">
              Specialities:
            </Typography>
            
          </Grid>

          <Grid mt={4}>
            <Typography variant="body1">
              Pressing button with my hands to make magic happen on the internet.
            </Typography>
            <Typography variant="body1">
              You can view my projects, shop, resume, or contact me at fred@fredmadethis.co.za
            </Typography>
          </Grid>
          <Grid>
            Social media icons
          </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection
