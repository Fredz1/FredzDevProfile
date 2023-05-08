import { Box, Unstable_Grid2 as Grid, Container, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <Box my={10}>
      <Container>
        <Grid container direction='column'>
          <Grid>
            <Typography variant="h3">
              <Typewriter words={['Fred','Made','This', 'FredMadeThis']} cursor loop={1} cursorBlinking={false} typeSpeed={250}/>            
            </Typography>
          </Grid>
          <Grid>
            Im Fred
          </Grid>
          <Grid>
            Fullstack Developer, UX architect and javascript engineer
          </Grid>
          <Grid>
            List specialities here
          </Grid>
          <Grid>
            Pressing button with my hands to make magic happen on the internet.
            You can view my projects, articles, resume, or contact me at fred@fredmadethis.co.za
          </Grid>
          <Grid>
            Social media icons
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection
