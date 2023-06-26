import { Box, Unstable_Grid2 as Grid, Container, Typography, LinearProgress } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { skills } from '../Data/skills'

const HeroSection = () => {
  return (
    <Box my={4}>
      <Container>
          <Grid>
            <Typography variant="h4">
              <Typewriter words={['Fred','Made','This', 'FredMadeThis']} cursor loop={1} cursorBlinking={false} typeSpeed={250}/>            
            </Typography>
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

            <Grid container direction='column'>
              {
                skills.map(
                  (el, index) => (

                    <Grid key={index}>
                      <Typography variant="body1" ml={2} mt={1}>
                        {el.tech}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={el.value}
                        color="warning"
                      />
                    </Grid>
                  )
                )
              }
            </Grid>
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
