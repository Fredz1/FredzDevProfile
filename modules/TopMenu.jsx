import { Container, Box, ButtonGroup, Button, Unstable_Grid2 as Grid, Typography, Link } from "@mui/material"
import Image from "next/image"
import Logo from '../public/assets/images/fred-made-this-logo.webp'

const TopMenu = () => {

  return (
    <Box sx={{minHeight: '1rem', my: 4, width: "100%"}} >
      <Container px={5} direction='row'>
        <Grid>
          <Typography variant="body1" textAlign="center" >
            <Link href="/" underline="none" py={2}>
              <Image 
                src={Logo} 
                alt="Logo and home button" 
                style
                priority
                height={50}
              />
            </Link>
          </Typography>
        </Grid>
    <Box sx={{minHeight: '1rem', p: 1, width: "100%"}} my={2} >
      <Grid container px={5} justifyContent='center'>
        <Grid>
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
            about me
          </Button>
          <Button variant='newButton'>
            <Link href="/projects" underline="none" color='black'>
              Projects
            </Link>
          </Button>
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
          <Link href="/websites" underline="none" color='black'>
              websites
            </Link>
          </Button>
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
            <Link href="/contact" underline="none" color='black'>
              Contact
            </Link>
          </Button>
        </Grid>
      </Grid>
      
    </Box>
      </Container>
    </Box>
  )

}

export default TopMenu