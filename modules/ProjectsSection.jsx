import { Container, Typography, Unstable_Grid2 as Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material"
import Link from "next/link"

import taskAppPic from '../public/assets/images/simpleTasksCover.png'


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
        </Grid>

          <Grid container>

            <Grid>
              <Card sx={ { maxWidth: 280 } }>
                <CardContent>
                <CardMedia sx={{ height: 280 }} image='/assets/images/simpleTasksCover.png' />
                  <Typography gutterBottom variant="h5" component="div">
                    Simple Task App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Set your tasks for the day and knock them down 1 by one.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Link href="/projects/tasker">
                      Goto App
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid md={6}>
              Project card 2
            </Grid>
            
          </Grid>

      </Container>
    </>
  )
}

export default ProjectsSection