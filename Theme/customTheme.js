import { createTheme, ThemeProvider } from '@mui/material/styles'

export const myTheme = createTheme(
  {
    palette: {
      primary: {
        light: '#CC6600',
        main: '#696974',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#696974',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    components: {
      MuiTypography :{
        variants: [

        ]
      },
      MuiButton: {
        variants: [
          {
            props: { 
              variant: 'newButton'
            },
            style: {
              color: '#FEFCE8',
              fontSize: '1.75rem',
              '&::after' : {
                content: '""',
                display: 'block',
                position: 'absolute',
                height: '1px',
                width: 0,
                left: 0,
                backgroundColor: 'black',
                transition: 'width 0.5s ease-in-out',
                bottom: 0
              },
              '&:hover::after': {
                width: '75%',
              },
              '&:hover' : {
                backgroundColor: 'transparent'
              },
              '&:active': {
                color: 'blue',
                backgroundColor: 'transparent'
              }
            }
          },
          {
            props: { 
              variant: 'submitButton'
            },
            style: {
              color: 'black',
              '&::after' : {
                content: '""',
                display: 'block',
                position: 'absolute',
                height: '1px',
                width: 0,
                left: 0,
                backgroundColor: 'black',
                transition: 'width 0.5s ease-in-out',
                bottom: 0
              },
              '&:hover::after': {
                width: '75%',
              },
              '&:hover' : {
                backgroundColor: 'transparent'
              },
              '&:active': {
                color: 'white',
                backgroundColor: 'transparent'
              },
               
            }
          },
        ]
      }
    }
  }
)

const FredzTheme = ( { children } ) => {

  return (
    <ThemeProvider theme={myTheme}>
      {children}
    </ThemeProvider>
  )
}

export default FredzTheme