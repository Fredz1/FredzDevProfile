// modules
import PortfolioHead from "../../components/PortfolioHead"
import ProjectSample from "../../components/ProjectSample"

const portfolio = () => {
  return (
    <div>
      <PortfolioHead />
      <ProjectSample num={'all'}/>
    </div>
  )
}

export default portfolio