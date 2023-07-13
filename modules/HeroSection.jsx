import { Box, Unstable_Grid2 as Grid, Container, Typography, LinearProgress } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { skills } from '../Data/skills'

const HeroSection = () => {
  return (
    <Box my={4}>
      <Container disableGutters>
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
