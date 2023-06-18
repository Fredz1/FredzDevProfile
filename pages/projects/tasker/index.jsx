import { Container, Unstable_Grid2 as Grid, Box, Typography, Link} from '@mui/material'

const homeContainer = {
  backgroundColor: 'red',
  border: '1px solid black',
  margin: '0 auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  display: 'grid',
  gridAutoFlow: 'row',
  padding: '1em',
  fontSize: '1.5em',
}

const Index = () => {

  return (
    <div className="homePage">

      <div className="homeContainer">

        <div className="homeHeading">
          <h1 className="rotate">Simple</h1><h1> Tasks</h1>
        </div>

        <p>If you have already logged in previously</p>
        <p>
        &rarr; <Link to='/taskDashboard'>Go to Dashboard</Link> &larr;
        </p>

        <p>
          or
        </p>
        
        <p>
        &rarr; <Link to='/login'>Go to Login Page</Link> &larr;
        </p>

      </div>

    </div>
  )
}

export default Index