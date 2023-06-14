import { Button, Container, Unstable_Grid2 as Grid, Link, Typography } from "@mui/material"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Footer = () => {
  return (
    <Container>
      <Grid container direction='row'gap={4} py={5} >
        <Grid>
          {/* social media */}
          <Link href='www.facebook.com/fredmadethis'>
            <FacebookOutlinedIcon />
          </Link>
          <Link href='www.facebook.com/fredmadethis'>
            <WhatsAppIcon />
          </Link>
        </Grid>

        <Grid>
          <Grid container>
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