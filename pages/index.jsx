// components
import Designer from "../components/Designer"
import Header from "../components/Header"

// modules
import Head from 'next/head'


const index = () => {
  return (
    <>
      <Head>
        <title>
          Fred Williams Dev Profile
        </title>
        <meta name="description" content="FullStack Web Developers Profile Of Frederick Williams" />
        <meta name="keywords" content="Developer, Profile, FullStack Web Development" />
        <meta name="author" content="Frederick Williams" />
      </Head>
      <Header />
      <Designer />
    </>
  )
}

export default index