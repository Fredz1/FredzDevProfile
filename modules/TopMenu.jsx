import { Box, ButtonGroup, Button, Unstable_Grid2 as Grid, Typography } from "@mui/material"



const TopMenu = () => {
  return (
    <Box sx={{minHeight: '1rem', border: '1px solid blue', p: 1, width: "100%"}}>
      <Grid container px={5} justifyContent="space-around">
        <Grid>
          <Typography variant="body1" textAlign="center" >
            FredMadeThis
          </Typography>
        </Grid>
        <ButtonGroup>
          <Button variant='newButton'>
            about me
          </Button>
          <Button variant='contained'>
            Projects
          </Button>
          <Button variant='contained'>
            Resume
          </Button>
          <Button variant='contained'>
            Contact
          </Button>
        </ButtonGroup>
        
      </Grid>
    </Box>
  );
}

export default TopMenu