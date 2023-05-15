import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material"

import Image from 'next/image'

import TopMenu from '../../modules/TopMenu'

const Basic = () => {
  return (
    <Box>
      <TopMenu />
      <Grid container direction='column'>
        {/* Top Container */}
        <Grid container direction='row'>
          {/* image here */}
          <Grid>
            <Image src="https://picsum.photos/200/300" alt="test" height={400} width={400}/> 
          </Grid>
          <Grid>
            <Typography variant="h5">
              Basic website
            </Typography>
            <Typography variant="h5">
              R2000 - R5000
            </Typography>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  );
}

export default Basic;
