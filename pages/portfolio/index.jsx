// components
import PortfolioHead from "../../components/PortfolioHead"
import ProjectSample from "../../components/ProjectSample"

// modules
import Head from 'next/head'

const portfolio = () => {
  return (
    <div>
      <Head>
        <title>
          Portfolio
        </title>
      </Head>
      <PortfolioHead />
      <ProjectSample num={'all'}/>
    </div>
  )
}

export default portfolio