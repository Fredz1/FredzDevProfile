import { createTheme, ThemeProvider } from '@mui/material/styles'

export const myTheme = createTheme(
  {
    components: {
      MuiTypography :{
        variants: [
          {
            props: {
              variant: 'typewriter'
            },
            color: 'blue',
            style: {
              '&::before, &::after': {
                content: '""',
                top: 0,
                bottom: 0,
                left:0,
                right: 0,
                position: 'absolute',
              },
              '&::before': {
                backgroundColor: 'red',
                animation: '$typewriter 3s steps(21) forwards'
              },
              '&::after' : {
                width: '5px',
                backgroundColor: 'blue',
                animation: '$typewriter 3s steps(21) forwards, $blink 750ms steps(21) infinate'
              },
              '@keyframes typewriter': {
                to : {left: '100%'}
              },
              '@keyframes blink' : {
                '0%' : {background: "transparent"},
                '50%' : {background: "100%"},
                '100%' : {background: "transparent"}
              }
              
            }
          }
        ]
      },
      MuiButton: {
        variants: [
          {
            props: { 
              variant: 'newButton'
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
                width: '75%'
              },
              /* borderBottom: '1px solid red' */
              
            }
          }
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