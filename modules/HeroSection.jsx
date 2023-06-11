<<<<<<< HEAD
import { Box, Unstable_Grid2 as Grid, Container, Typography, LinearProgress } from "@mui/material";
=======
import { Box, Unstable_Grid2 as Grid, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress } from "@mui/material";
>>>>>>> ebd59726561a063c522c2d2ecea4c3d58089377e
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <Box my={20}>
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
            Fullstack Developer, UX architect and JavaScript engineer
          </Grid>
<<<<<<< HEAD
          <Grid width='50%'>
            List specialities here:
            Reactjs <LinearProgress variant='determinate' value={85} />
            NextJS <LinearProgress variant='determinate' value={90} />
            NODE <LinearProgress variant='determinate' value={80} />
            HTML <LinearProgress variant='determinate' value={85} />
            CSS <LinearProgress variant='determinate' value={79} />
            JavaScript <LinearProgress variant='determinate' value={95} />
            GIT <LinearProgress variant='determinate' value={70} />
            RESTful Services/APIs <LinearProgress variant='determinate' value={83} />
            Responsive/Mobile Design <LinearProgress variant='determinate' value={90} />
            Python <LinearProgress variant='determinate' value={60} />


=======
          <Grid md={4}>
            {/* List specialities here */}
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Tech</strong></TableCell>
                    <TableCell><strong>How Good?</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* List of techs and proficiency */}
                  <TableRow>
                    <TableCell>
                      ReactJS
                    </TableCell>
                    <TableCell>
                      <LinearProgress
                        variant="determinate"
                        value={90}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      NodeJS
                    </TableCell>
                    <TableCell>
                      <LinearProgress
                        variant="determinate"
                        value={80}
                      />
                    </TableCell>
                  </TableRow>

                  {/* END: List of techs and proficiency */}
                </TableBody>
              </Table>
            </TableContainer>
>>>>>>> ebd59726561a063c522c2d2ecea4c3d58089377e
          </Grid>
          <Grid>
            <Typography variant="body1">
              Pressing button with my hands to make magic happen on the internet.
            </Typography>
            <Typography variant="body1">
              You can view my projects, articles, resume, or contact me at fred@fredmadethis.co.za
            </Typography>
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
