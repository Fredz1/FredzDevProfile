import {Box, Unstable_Grid2 as Grid, Link, Drawer , useMediaQuery, useTheme } from "@mui/material"
import { ClickAwayListener } from '@mui/base'
import { useState, useContext } from "react"
import MenuIcon from '@mui/icons-material/Menu'

const linkStyle = {
  fontSize: '3vw'
}

const TopMenu = () => {

  const theme = useTheme()
  const screenWidth = useMediaQuery( theme.breakpoints.up('sm') )

  /* const { userData: { userName } } = useContext( UserInfo ) */
  
  const showMenu = {
    display: screenWidth ? 'block' : 'none',
  }

  const showSideMenu = {
    display: screenWidth ? 'none' : 'block',
  } 

  const [ openDrawer, setOpenDrawer ] = useState(false)

  return (
    <>
      <Box sx={ { backgroundColor: "#0C101E", height: "100%", ...showMenu } }>

        {/* Larger Screen */}
        <Grid container sx={ {...showMenu, mx: 2 }} >

          <Grid>
              <Link href="/projects" underline="none" variant="inherit" style={ linkStyle }>
                ABOUT.Fred
              </Link>
          </Grid>

          <Grid>
            <Link href="/projects" underline="none" style={ linkStyle }>
              Freds.PROJECTS
            </Link>
          </Grid>

          <Grid>
              <Link href="/websites" underline="none" style={ linkStyle }>
                WORK.w/Fred
              </Link>
          </Grid>

          <Grid>
              <Link href="/contact" underline="none" style={ linkStyle }>
                CONTACT.Fred
              </Link>
          </Grid>

            {/* <UserMenu /> Remove user login details for now*/} 


        </Grid>
      </Box>


        {/* 
          Mobile Screen: Show burger menu and hide menu until burger menu is clicked to slide from right.
        */}
        
      <Box sx={ { backgroundColor: "#0C101E"} } >
        <MenuIcon sx={{...showSideMenu, position: "fixed", top: "10", right: "5"}} onClick={() => setOpenDrawer(!openDrawer)}/>
          
          <Drawer open={openDrawer} anchor="right">
            <ClickAwayListener onClickAway={() => setOpenDrawer(!openDrawer)}>
                <Box px={2}>
              <MenuIcon sx={showSideMenu} onClick={() => setOpenDrawer(!openDrawer)}/>

                <Grid>
                  <Link href="/projects" underline="none" variant="inherit" style={ linkStyle }>
                    ABOUT.Fred
                  </Link>
                </Grid>

                <Grid>
                  <Link href="/projects" underline="none" style={ linkStyle }>
                    Freds.PROJECTS
                  </Link>
                </Grid>

                <Grid>
                    <Link href="/websites" underline="none" style={ linkStyle }>
                      WORK.w/Fred
                    </Link>
                </Grid>

                <Grid>
                    <Link href="/contact" underline="none" style={ linkStyle }>
                      CONTACT.Fred
                    </Link>
                </Grid>
                </Box>
            </ClickAwayListener>
          </Drawer>
      </Box>

    </>
  )

}

export default TopMenu