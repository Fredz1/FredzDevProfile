import { Box, ButtonGroup, Button, Unstable_Grid2 as Grid, Typography, Link } from "@mui/material"
import Image from "next/image"
import Logo from '../public/assets/images/fred-made-this-logo.webp'



const TopMenu = () => {
  return (
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
            </Link>
          </Typography>
        </Grid>
        <Grid>
          <Button variant='newButton'>
            about me
          </Button>
          <Button variant='newButton'>
            <Link href="/projects" underline="none" color='black'>
              Projects
            </Link>
          </Button>
          <Button variant='newButton'>
            Contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopMenu