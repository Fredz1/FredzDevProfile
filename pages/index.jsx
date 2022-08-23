// components
import Designer from "../components/Designer"
import ProjectSample from "../components/ProjectSample"
import DownloadCV from "../components/DownloadCV"

// modules
import Head from 'next/head'


const index = () => {
  return (
    <div>
      <Head>
        <title>
          Fred Williams Dev Profile
        </title>
        <meta name="description" content="FullStack Web Developers Profile Of Frederick Williams" />
        <meta name="keywords" content="Developer, Profile, FullStack Web Development" />
        <meta name="author" content="Frederick Williams" />
      </Head>
      <Designer />
      <DownloadCV />
      <ProjectSample num={2}/>
    </div>
  )
}

export default index