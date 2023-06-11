import { Container, Unstable_Grid2 as Grid, Link } from "@mui/material"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const Footer = () => {
  return (
    <Container>
      <Grid container direction='row'>
        <Grid>
          {/* social media */}
          <Link href='www.facebook.com/fredmadethis'>
            <FacebookOutlinedIcon />Facebook
          </Link>
          <Link href='www.facebook.com/fredmadethis'>
            <WhatsAppIcon /> WhatsApp
          </Link>
        </Grid>

        <Grid>
          {/* Quick Links */}
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/websites">Websites</Link>
        </Grid>

      </Grid>

      
    </Container>
  )
}

export default Footer