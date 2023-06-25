import { useState } from "react"
import axios from 'axios'
import { Box } from "@mui/material"

/* 
  setTaskList destructured from props inorder to update list if request is successful
*/

const inputContainer = {
  margin: "0 auto",
  display: "grid",
  gridAutoFlow: "column",
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
    }
  }

  /* 
    Desc: listen for user to Enter key
  */
  const enterPress = e => {
    if (e.key === 'Enter') addTask()
  }


  return (
    <Box sx={inputContainer}>

      <input 
        placeholder="Task" 
        onKeyPress={e => enterPress(e)} 
        type="text" value={taskName} 
        onChange={ e => setTaskName(e.target.value)}
      />

      <button 
        className="buttonStyle" 
        onClick={ () => addTask()}
      >
        Add
      </button>
    </Box>
  )
}

export default NewTaskInput