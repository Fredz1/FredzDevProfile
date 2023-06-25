import { Unstable_Grid2 as Grid } from '@mui/material'

import axios from 'axios'

const TaskItem = ({ element, setTaskList}) => {
  
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
    <Grid className="card">
      &rarr;  {
        element
      }
      <button 
        className='buttonStyle' 
        onClick={() => deleteTask(element)}
      >
         &#10003; {/* html code for a tickmark */}
      </button>
    </Grid>
  )
}

export default TaskItem