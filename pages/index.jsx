// modules
import Head from 'next/head'

// modules
import TopMenu from '../modules/TopMenu'
import HeroSection from '../modules/HeroSection'


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
      <TopMenu />
      <HeroSection />
        
    </>
  )
}

export default index