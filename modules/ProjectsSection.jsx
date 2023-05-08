import { Container, Typography, Unstable_Grid2 as Grid } from "@mui/material"

const ProjectsSection = () => {
  return (
    <>
      <Container>
        <Grid container direction='column'>
          <Grid>
            <Typography variant="h5">
              Projects.
            </Typography>
          </Grid>
          <Grid container>
            <Grid md={6}>
              Project card one
            </Grid>
            <Grid md={6}>
              Project card 2
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default ProjectsSection