import { Container, Box, Link, Button, Grid } from "@mui/material"

const SidePanel = ( { logout } ) => {

   
  return (
    <Grid  >
      <Button 
        size="small" 
        className="buttonStyle"
      >
        <Link to='/'>
          Home
        </Link>
      </Button>
    
      <Button 
        size="small"
        className="buttonStyle" 
        onClick={() => logout()}
      >
        Logout
      </Button>
    </Grid>
  )
}

export default SidePanel