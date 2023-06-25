import {Container, Link, Typography} from '@mui/material'

const Index = () => {

  return (
    <Container className="homePage">

      <div className="homeContainer">

        <div className="homeHeading">
          <h1 className="rotate">Simple</h1>
          <h1> Tasks</h1>
        </div>

        <Typography variant='body1'>If you have previously registered</Typography>
        <Typography variant='h6'>
        &rarr; <Link underline='none' href='./tasker/maintasks'>Go to Dashboard</Link> &larr;
        </Typography>

        <p>
          or
        </p>
        
        <Typography variant='h6'>
        &rarr; <Link underline='none' href='./tasker/login'>Go to Login Page</Link> &larr;
        </Typography>

      </div>

    </Container>
  )
}

export default Index