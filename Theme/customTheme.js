import { createTheme, ThemeProvider } from '@mui/material/styles'

export const myTheme = createTheme(
  {
    components: {
      MuiButton: {
        variants: [
          {
            props: { 
              variant: 'newButton'
            },
            style: {
              border: '1px solid brown'
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