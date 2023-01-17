
import { useEffect, useState } from 'react'

//mui imports
import { 
  Toolbar, 
  Link, 
  Button, 
  ButtonGroup,
  Grid, 
  useMediaQuery, 
  useTheme,
  SwipeableDrawer, 
  AppBar,
  Stack,
  IconButton,
} from '@mui/material'

//Icon imports
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

/**
 * HOOK
 */

const Header = () => {

  /* const whatsAppMessage = "https://wa.me/27849669558?text=I%20would%20like%20to%20inquiring%20about%20ae%20tattoo" */

  // hide header and display drawer when screen size is smaller than 600px

  const theme = useTheme()
  const screenWidth = useMediaQuery( theme.breakpoints.up('sm') )

  const showMenu = {
    display: screenWidth ? 'block' : 'none',
  }

  const showsideMenu = {
    display: screenWidth? 'none' : 'block'
  }

  useEffect(() => {
    
    screenWidth ? setSwipeArea(0) : setSwipeArea(150)
    
  }, [screenWidth]);



  // toggle drawer 
  const [drawer, setDrawer] = useState(false)
  const [swipeArea, setSwipeArea] = useState(0)

  return (
    <>
    
      <AppBar
        position="fixed"
        sx={ showMenu }
        elevation={ 0 }
      >
        <Toolbar 
          variant='dense'
        >
          <Grid 
            container 
            direction='row'
            justifyContent="space-between"
            alignItems="stretch"
            spacing={8}
          >
            {/* Left container */}
            <Grid item>
              <ButtonGroup 
                size='medium' 
                variant='contained' 
                disableElevation={ true }
              > 

                <Button variant='text'>
                  <Link href='#myServices' underline='none' >
                    My Services
                  </Link>
                </Button>

                <Button variant='text'>
                  <Link href='#portfolio' underline='none'>
                    Portfolio
                  </Link>
                </Button>

                <Button variant='text'>
                  <Link href='#aboutMe' underline='none'>
                    About Me
                  </Link>
                </Button>

              </ButtonGroup>
            </Grid>

            {/* Right Container */}

            <Grid item>

              <ButtonGroup 
                size='meduim' 
                variant='contained' 
                disableElevation={ true }
              >
                <Button variant='text'>
                  <Link href='#contact' underline='none'>
                    Contact
                  </Link>
                </Button>

                <Button variant='text'>
                  <Link href='#' underline='none'>
                    Message Me
                  </Link>
                </Button>
              </ButtonGroup>


            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>

      
        {/* Mobile Menu */}
      
      <SwipeableDrawer
        onClose={
          () => setDrawer(!drawer)
        }
        onOpen={
          () => setDrawer(!drawer)
        }
        swipeAreaWidth = { swipeArea }
        sx={ showsideMenu }
        open = {drawer}
        anchor='right'
        hysteresis={0.50}
        minFlingVelocity={300}
      >

        <Toolbar 
          variant='regular'
          sx={{
            height: "100vh",
            backgroundColor: "red"
          }}
        >
          
          <Grid 
            container 
            direction='column'
          >
            
            <Button variant='text'>
              <Link href='#' underline='none'>
                My Services
              </Link>
            </Button>

            <Button variant='text'>
              <Link href='#' underline='none'>
                Portfolio
              </Link>
            </Button>

            <Button variant='text'>
              <Link href='#' underline='none'>
                About Me
              </Link>
            </Button>

            <Button variant='text'>
              <Link href='#' underline='none'>
                Contact
              </Link>
            </Button>

            {/* <Button variant='outlined' >
              <Link href={whatsAppMessage} underline='none'>
                WhatsApp Me
              </Link>
            </Button> */}

            <Stack 
              direction="row"
              justifyContent='space-around'
            >
              <IconButton 
                aria-label="Facebook" 
                color="primary"
                href='https://www.facebook.com/Blackcrosstattoos/'
              >
                <FacebookIcon />
              </IconButton>

            <IconButton aria-label="Instagram" color="primary" href='https://www.instagram.com/myblackcross/'>
              <InstagramIcon />
            </IconButton>

            {/* <IconButton 
              aria-label="WhatsApp" 
              color="primary" 
              href={whatsAppMessage} 
              target="_blank"
            >
              <WhatsAppIcon />
            </IconButton> */}

            <IconButton 
              aria-label="Email" 
              color="primary" 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fredwil25@gmail.com&su=Tattoo Inquiry&body=Hi Fred %0D%0A%0D%0AI'm looking at getting a tattoo.  Can you help me?" 
              target="_blank"
            >
              <EmailIcon />

            </IconButton>

          </Stack>


          </Grid>
        </Toolbar>
      </SwipeableDrawer>
      

    </>
  )
}

export default Header;