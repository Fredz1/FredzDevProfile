// components
import Designer from "../components/Designer"
import ProjectSample from "../components/ProjectSample"

// modules
import Head from 'next/'


const index = () => {
  return (
    <div lang="en">
      <Head>
        <title>
          Fred Williams Dev Profile
        </title>
      </Head>
      <Designer />
      <ProjectSample num={2}/>
    </div>
  )
}

export default index