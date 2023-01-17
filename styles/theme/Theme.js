import { createTheme } from '@mui/material/styles'

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ff0000'
    },
    textColor:{
      primary: '#ffffff'
    }
  },
  typography:{
    h1:{
      letterSpacing: "0.18rem"
    },
    h2:{
      letterSpacing: "0.16rem"
    },
    h3:{
      letterSpacing: "0.14rem"
    },
    h4:{
      letterSpacing: "0.14rem"
    },
    h5:{
      letterSpacing: "0.12rem"
    },
    h6:{
      letterSpacing: "0.12rem"
    },
    paragraph:{
      letterSpacing: "0.12rem"
    }
  }
})

export default customTheme