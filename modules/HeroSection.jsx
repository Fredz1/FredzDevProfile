import { Box, Unstable_Grid2 as Grid, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { skills } from '../Data/skills'

const HeroSection = () => {
  return (
    <Box my={10}>
      <Container>
          <Grid>
            <Typography variant="h3">
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
          <Grid width='50%'>
            <Typography variant="body1">
              Specialities:
            </Typography>

            {
              skills.map(
                (el, index) => (
                  <Container direction='row' key={index}>
                    <Typography variant="body1">
                      {el.tech}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={el.value}
                    />
                  </Container>
                )
              )
            }
          </Grid>

          <Grid>
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
