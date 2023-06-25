import { Container, Typography, Unstable_Grid2 as Grid, Card, CardMedia } from "@mui/material"
import Link from "next/link"


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
            <Grid>
              <Card  sx={{ maxWidth: 345 }}>
                <CardMedia image={'../public/assets/images/simpleTasksCover.png'} title="TaskApp" />
              </Card>
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