import { Box, Link, Button } from "@mui/material"

const SidePanel = ({ logout }) => {

   
  return (
    <Box>

      <Link to='/'>
        <Button  className="buttonStyle">
          Home
        </Button>
      </Link>
    
      <Button 
        className="buttonStyle" 
        onClick={() => logout()}
      >
        Logout
      </Button>

    </Box>
  )
}

export default SidePanel