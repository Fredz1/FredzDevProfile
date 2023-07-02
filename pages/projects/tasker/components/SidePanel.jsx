import { Box, Link, Button } from "@mui/material"

const SidePanel = ({ logout }) => {

   
  return (
    <Box alignContent='end'>
      <Link to='/'>
        <Button 
          size="small" 
          className="buttonStyle"
        >
          Home
        </Button>
      </Link>
    
      <Button 
        size="small"
        className="buttonStyle" 
        onClick={() => logout()}
      >
        Logout
      </Button>
    </Box>
  )
}

export default SidePanel