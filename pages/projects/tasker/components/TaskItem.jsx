import { Unstable_Grid2 as Grid, Button, Typography } from '@mui/material'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined'

import axios from 'axios'

const TaskItem = ({ element, setTaskList}) => {

  const card = {
    justifySelf: 'stretch',
  }
  
  /* 
    setTasklist with new information on request
  */
  const deleteTask = async item => {
    const { data } = await axios.post(
      process.env.NODE_ENV === 'development' ? 
        'http://localhost:3001/apiv2/taskApp/tasks/deleteTask':
        'https://www.fredmadethis.co.za/apiv2/taskApp/tasks/deleteTask',
      {
        item
      },
      {
        withCredentials: true
      }
    )
    setTaskList(data)
  }

  return (
    <Grid container sx={card} justifyContent='space-between' my={1}>
      <Grid container alignContent='center'>
        <ArrowRightAltOutlinedIcon />  
        <Typography variant='body1' letterSpacing={0.75}>
        { element }
        </Typography>
      </Grid>
      <Grid>
        <Button 
          className='buttonStyle' 
          onClick={() => deleteTask(element)}
        >
          <DoneOutlinedIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default TaskItem