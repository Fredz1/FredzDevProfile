import {Box, Unstable_Grid2 as Grid, Link, Drawer , useMediaQuery, useTheme } from "@mui/material"
import { useState, useContext } from "react"
import UserMenu from "./UserMenu"

import { UserInfo } from '../contexts/userContext'

const TopMenu = () => {

  const theme = useTheme()
  const screenWidth = useMediaQuery( theme.breakpoints.up('sm') )

  const { userData: { userName } } = useContext( UserInfo )
  
  const showMenu = {
    display: screenWidth ? 'block' : 'none',
  }

  const showsideMenu = {
    display: screenWidth ? 'none' : 'block',
    margin: '0 auto'
  }

  const [drawer, setDrawer] = useState(false)

  return (
    <Box sx={ {backgroundColor: "#0C101E", width: "100%", height: "100vh", pl: 2} } >
      

      <Grid container justifyContent='center' sx={ showMenu } >

        <Grid>
            <Link href="/projects" underline="none" variant="inherit" style={{fontSize: '3vw'}}>
              ABOUT.Fred
            </Link>
        </Grid>

        <Grid>
          <Link href="/projects" underline="none" style={{fontSize: '3vw'}}>
            Freds.PROJECTS
          </Link>
        </Grid>

        <Grid>
            <Link href="/websites" underline="none" style={{fontSize: '3vw'}}>
              WORK.w/Fred
            </Link>
        </Grid>

        <Grid>
          
            <Link href="/contact" underline="none" style={{fontSize: '3vw'}}>
              CONTACT.Fred
            </Link>
        </Grid>

          <UserMenu />


      </Grid>
    </Box>
  )

}

export default TopMenu