import { useState } from "react"
import axios from 'axios'
import { Box, Button, TextField, Container } from "@mui/material"

/* 
  setTaskList destructured from props inorder to update list if request is successful
*/

const inputContainer = {
  margin: "0 auto",
  display: "grid",
  height: "min-content",
}



const NewTaskInput = ({ setTaskList }) => {

  const [taskName, setTaskName] = useState('')

  const addTask = async () => {
    const { data } = await axios.post(
      process.env.NODE_ENV === 'development' ? 
        'http://localhost:3001/apiv2/taskApp/tasks/addTask':
        'https://www.fredmadethis.co.za/apiv2/taskApp/tasks/addTask'
      ,
      {
        taskName
      },
      {
        withCredentials: true
      }
    )
    if(data){
      setTaskList(data)
      setTaskName('')
    }
  }

  /* 
    Desc: listen for user to Enter key
  */
  const enterPress = e => {
    if (e.key === 'Enter') addTask()
  }


  return (
    <Container sx={{borderBottom: '1px solid black', pb: 0.5}}>
      <Box sx={inputContainer} gap={1}>

        <TextField
          onChange={ e => setTaskName(e.target.value)}
          hiddenLabel
          id="filled-hidden-label-small"
          value={taskName}
          onKeyDown={e => enterPress(e)} 
          placeholder="Add a new task"
          size="small"
        />

        <Button 
          className="buttonStyle" 
          onClick={ () => addTask()}
        >
          Add
        </Button>
      </Box>
    </Container>
  )
}

export default NewTaskInput