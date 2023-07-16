import {Container, Box, Button, Unstable_Grid2 as Grid, Typography, Link, Drawer , useMediaQuery, useTheme, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Image from "next/image"
import Logo from '../public/assets/images/fred-made-this-logo.webp'
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
    <Box sx={ {backgroundColor: "#0C101E", width: "100%", height: "100vh"} } >

      <Grid container justifyContent='center' sx={ showMenu }>

        <Grid>
          
            <Link href="/projects" underline="none" variant="inherit">
              ABOUT.Fred
            </Link>
        </Grid>

        <Grid>
          <Link href="/projects" underline="none">
            Freds.PROJECTS
          </Link>
        </Grid>

        <Grid>
          
            <Link href="/websites" underline="none">
              WORK.w/Fred
            </Link>
        </Grid>

        <Grid>
          
            <Link href="/contact" underline="none">
              CONTACT.Fred
            </Link>
        </Grid>

          <UserMenu />


      </Grid>
    </Box>
  )

}

export default TopMenu