// modules
import Head from 'next/head'

import { Unstable_Grid2 as Grid, Container } from '@mui/material'

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
      <Container direction="row"  maxWidth={false}>

        <Grid container>
          
          <Grid md={8}>
            <HeroSection />
          </Grid>

          <Grid>
            <TopMenu md={4}/>
          </Grid>

        </Grid>
        
      <Footer />
      </Container>
        
    </>
  )
}

export default index