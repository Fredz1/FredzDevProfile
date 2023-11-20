// modules
import Head from 'next/head'

import { Unstable_Grid2 as Grid, Container, Box } from '@mui/material'

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

        <Grid container columns={{sm: 12, md:12}}>

          <Grid sm={10} md={8}>
            <HeroSection />
          </Grid>
          
          <Grid md>
            <TopMenu />
          </Grid>

        </Grid>
        
      <Footer />
        
    </>
  )
}

export default index