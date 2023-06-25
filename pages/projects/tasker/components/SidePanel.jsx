import { Box, Link } from "@mui/material"

const SidePanel = ({ logout }) => {

  const mainTaskSidePanel = {
    
  }
  
  return (
    <Box sx={mainTaskSidePanel}>

      <Link to='/'>
        <button  className="buttonStyle">
          Home
        </button>
      </Link>

      <button 
        className="buttonStyle" 
        onClick={() => logout()}
      >
        Logout
      </button>

    </Box>
  )
}

export default SidePanel