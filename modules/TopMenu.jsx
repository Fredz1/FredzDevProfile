import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material"



const TopMenu = () => {
  return (
    <Box sx={{minHeight: '1rem', border: '1px solid blue', p: 1, width: "100%"}}>
      <Grid container px={5} justifyContent="space-around">
        <Grid>
          <Typography variant="body1" textAlign="center" >
            FredMadeThis
          </Typography>
        </Grid>
        <Grid>
          box for nav items
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopMenu