import {Box, Unstable_Grid2 as Grid, Link, Drawer , useMediaQuery, useTheme } from "@mui/material"
import { useState, useContext } from "react"
import UserMenu from "./UserMenu"
import MenuIcon from '@mui/icons-material/Menu'

import { UserInfo } from '../contexts/userContext'

const linkStyle = {
  fontSize: '3vw'
}

const TopMenu = () => {

  const theme = useTheme()
  const screenWidth = useMediaQuery( theme.breakpoints.up('sm') )

  const { userData: { userName } } = useContext( UserInfo )
  
  const showMenu = {
    display: screenWidth ? 'block' : 'none',
  }

  const showsideMenu = {
    display: screenWidth ? 'none' : 'block',
  } 

  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <Box sx={ { backgroundColor: "#0C101E", height: "100%" } } >

        {/* Larger Screen */}
        <Grid container sx={ showMenu } >

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
        
      <Box sx={showsideMenu}>
        <MenuIcon/>
        <Drawer >

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
          
        </Drawer>
      </Box>

    </>
  )

}

export default TopMenu