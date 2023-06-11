<<<<<<< HEAD
import { Box, ButtonGroup, Button, Unstable_Grid2 as Grid, Typography, Link } from "@mui/material"
import Image from "next/image"
import Logo from '../public/assets/images/fred-made-this-logo.webp'
=======
import { Box, Button, Unstable_Grid2 as Grid, Typography, Link } from "@mui/material"
>>>>>>> ebd59726561a063c522c2d2ecea4c3d58089377e



const TopMenu = () => {
  return (
<<<<<<< HEAD
    <Box sx={{minHeight: '1rem', my: 4, width: "100%"}}>
      <Grid container px={5} justifyContent="space-around">
        <Grid>
          <Typography variant="body1" textAlign="center" >
            <Link href="/" underline="none" py={4}>
              <Image 
                src={Logo} 
                alt="Logo and home button" 
                style
                height={50}
              />
=======
    <Box sx={{minHeight: '1rem', p: 1, width: "100%"}} my={5}>
      <Grid container px={5} justifyContent="space-around">
        <Grid>
          <Typography variant="body1" textAlign="center" >
            <Link href="/" underline="none">
              bigBlackDotHere FredMadeThis
>>>>>>> ebd59726561a063c522c2d2ecea4c3d58089377e
            </Link>
          </Typography>
        </Grid>
        <Grid>
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
            about me
          </Button>
<<<<<<< HEAD
          <Button variant='newButton'>
            <Link href="/projects" underline="none" color='black'>
              Projects
=======
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
          <Link href="/websites" >
              websites
>>>>>>> ebd59726561a063c522c2d2ecea4c3d58089377e
            </Link>
          </Button>
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
            <Link href="/projects" >
              Projects
            </Link>
          </Button>
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
            Contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopMenu