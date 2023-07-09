import { Container, Box, Button, Unstable_Grid2 as Grid, Typography, Link, Drawer , useMediaQuery, useTheme, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Image from "next/image"
import Logo from '../public/assets/images/fred-made-this-logo.webp'
import { useState } from "react"
import UserMenu from "./UserMenu"


const TopMenu = () => {

  const theme = useTheme()
  const screenWidth = useMediaQuery( theme.breakpoints.up('sm') )

  const showMenu = {
    display: screenWidth ? 'block' : 'none',
  }

  const showsideMenu = {
    display: screenWidth ? 'none' : 'block',
    margin: '0 auto'
  }

  const [drawer, setDrawer] = useState(false)

  return (
    <Box sx={{minHeight: '1rem', my: 4, width: "100%"}} >
      <Container px={5} direction='row'>
        <Grid>
          <Typography variant="body1" textAlign="center" >
            <Link href="/" underline="none" py={2}>
              <Image 
                src={Logo} 
                alt="Logo and Home button" 
                style
                priority
                height={50}
              />
            </Link>
          </Typography>
        </Grid>
    <Box my={ 2 } textAlign='center' >
      <Grid container px={5} justifyContent='center' sx={showMenu}>
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
          <UserMenu />
        </Grid>
      </Grid>

      {/* Swipeble drawer when mobile breakpoint is true */}
      <IconButton aria-label="toggleMenu" sx={showsideMenu} onClick={() =>setDrawer(!drawer)}>
        <MenuIcon />
      </IconButton>
      <Drawer 
        variant="temporary"
        elevation={0}
        hideBackdrop={false}
        anchor="top"
        open={drawer}
      >
        <Grid container direction='column' px={5} justifyContent='center'>
        <IconButton aria-label="toggleMenu" onClick={() =>setDrawer(!drawer)}>
          <MenuIcon />
        </IconButton>
        <Grid container direction='column'>
          <Grid>
            <Grid>
              <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
                about me
              </Button>
            </Grid>
            <Grid>
              <Button variant='newButton'>
                <Link href="/projects" underline="none" color='black'>
                  Projects
                </Link>
              </Button>
            </Grid>
            <Grid>
              <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
                <Link href="/websites" underline="none" color='black'>
                  websites
                </Link>
              </Button>
            </Grid>
            <Grid>
              <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
                <Link href="/contact" underline="none" color='black'>
                  Contact
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Drawer>
      
    </Box>
      </Container>
    </Box>
  )

}

export default TopMenu