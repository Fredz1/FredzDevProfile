// components
import PortfolioHead from "../../components/PortfolioHead"
import ProjectSample from "../../components/ProjectSample"

// modules
import Head from 'next/head'

const portfolio = () => {
  return (
    <div lang='en'>
      <Head>
        <title>
          Portfolio
        </title>
        <meta name="description" content="FullStack Web Developers Portfolio Of Frederick Williams" />
        <meta name="keywords" content="Developer, Portfolio, FullStack Web Development" />
        <meta name="author" content="Frederick Williams" />
      </Head>
      <PortfolioHead />
      <ProjectSample num={'all'}/>
    </div>
  )
}

export default portfolio