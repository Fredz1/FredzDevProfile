import { Button, Container, Unstable_Grid2 as Grid, Link, Typography } from "@mui/material"

const Footer = () => {

  const whatsAppMessage = "https://wa.me/27761349290?text=I%20am%20interested%20in%20working%20with%20a%20you."

  return (
    <Container>
      <Grid container direction='row'gap={4} py={5} justifyContent='space-around' >
        <Grid>
          <Grid container >
          {/* Quick Links */}
            <Button variant="newButton">
              <Typography variant="body2" >
                <Link underline="none" href="/" color='black'>Home</Link>
              </Typography>
            </Button>
            <Button variant="newButton">
              <Typography variant="body2">
                <Link underline="none" href="/projects" color='black' >Projects</Link>
              </Typography>
            </Button>
            <Button variant="newButton">
              <Typography variant="body2">
                <Link underline="none" href="/websites" color='black'>Websites</Link>
              </Typography>
            </Button>
            <Button variant="newButton">
              <Typography variant="body2">
                <Link underline="none" href="/contact" color='black'>Contact Me</Link>
              </Typography>
            </Button>
          </Grid>
        </Grid>

      </Grid>

      
    </Container>
  )
}

export default Footer