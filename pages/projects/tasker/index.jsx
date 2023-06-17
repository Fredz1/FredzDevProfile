import { Container, Unstable_Grid2 as Grid, Box, Typography} from '@mui/material'

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
    <Container>
      <Box sx={homeContainer}>
        <Typography variant='h2'>
          Task
        </Typography>
      </Box>
    </Container>
  )
}

export default Index