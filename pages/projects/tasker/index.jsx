import {Link} from '@mui/material'

const Index = () => {

  return (
    <div className="homePage">

      <div className="homeContainer">

        <div className="homeHeading">
          <h1 className="rotate">Simple</h1><h1> Tasks</h1>
        </div>

        <p>If you have already logged in previously</p>
        <p>
        &rarr; <Link  underline='none' href='./tasker/maintasks'>Go to Dashboard</Link> &larr;
        </p>

        <p>
          or
        </p>
        
        <p>
        &rarr; <Link underline='none' href='./tasker/login'>Go to Login Page</Link> &larr;
        </p>

      </div>

    </div>
  )
}

export default Index