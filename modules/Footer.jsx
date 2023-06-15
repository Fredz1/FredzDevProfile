import { Button, Container, Unstable_Grid2 as Grid, Link, Typography } from "@mui/material"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Footer = () => {

  const whatsAppMessage = "https://wa.me/27761349290?text=I%20am%20interested%20in%20working%20with%20a%20you."

  return (
    <Container>
      <Grid container direction='row'gap={4} py={5} justifyContent='space-around'>
        <Grid alignItems="center">
          {/* social media */}
          <Link href='www.facebook.com/fredmadethis' rel="noopener" target="_blank">
            <FacebookOutlinedIcon />
          </Link>
          <Link href={whatsAppMessage} >
            <WhatsAppIcon />
          </Link>
        </Grid>

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