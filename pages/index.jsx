// modules
import Head from 'next/head'

import { Unstable_Grid2 as Grid, Container, Typography } from '@mui/material'
// modules
import TopMenu from '../modules/TopMenu'
import HeroSection from '../modules/HeroSection'
import Footer from '../modules/Footer' 



const index = () => {
  return (
    <>
      <Head>
        <title>
          FredMadeThis
        </title>
        <meta name="description" content="FullStack Web Developers Profile Of Frederick Williams" />
        <meta name="keywords" content="Developer, Profile, FullStack Web Development" />
        <meta name="author" content="Frederick Williams" />
      </Head>
      <Container direction="row" disableGutters sx={{minWidth: "100vw"}}>

        

        <Grid container direction='row'>
          <Grid>

        

        </Grid>

          <Grid xs={9} md={8}>
            <HeroSection />
          </Grid>

          <Grid xs={3} md={4}>
            <TopMenu />
          </Grid>

        </Grid>
      </Container>
        
    </>
  )
}

export default index