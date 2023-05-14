import { Box, Button, Unstable_Grid2 as Grid, Typography, Link } from "@mui/material"



const TopMenu = () => {
  return (
    <Box sx={{minHeight: '1rem', p: 1, width: "100%"}} my={5}>
      <Grid container px={5} justifyContent="space-around">
        <Grid>
          <Typography variant="body1" textAlign="center" >
            <Link href="/" underline="none">
              bigBlackDotHere FredMadeThis
            </Link>
          </Typography>
        </Grid>
        <Grid>
          <Button variant='newButton' disableElevation disableRipple disableTouchRipple>
            about me
          </Button>
          <Button variant='newButton'>
            Projects
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