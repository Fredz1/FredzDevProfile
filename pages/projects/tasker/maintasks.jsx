import { useEffect, useState } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'

// Component imports
import TaskItem from './components/TaskItem'
import NewTaskInput from './components/NewTaskInput'
import SidePanel from "./components/SidePanel"

const MainTasks = () => {

  const router = useRouter()

  const [taskList, setTaskList] = useState([])

  /* 
    @desc: if users jwt does not authenticate user will get sent to Login.
    @desc: call is made whenever setTasklist is run
    @desc: Put in useCallback hool to prevent uneccercary requests when page rerenders
  */

  const getData = async () => {
    const { data } = await axios.get(
      'http://localhost:3001/apiv2/taskApp/tasks/retrieve'
    )
    data.success ? 
      setTaskList(data.response):
      router.push('/projects/tasker')
    }
  

  /* 
    @desc: logout client and handle any problems if log out failes.
  */
  const logout = async () => {
    const { data } = await axios.get(
      'api/user/logout'
    )
    data === 'confirmed' ? navigate('/') : alert('problem logging you out')
  }

  // make inital request when page is loaded
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    
    <div className="mainTaskContainer">
      <SidePanel logout={logout} />

      <h2 className="mainTaskHeading">Tasks</h2>
      
      {/* 
        Task area renders all tasks if request is not empty or unreadable
      */}
      <div className="MainTaskArea">
        <NewTaskInput setTaskList={setTaskList} />
        <div className="MainTaskList">
          {
            taskList !== [] ? 
            taskList.map(
              (el, index) => {
                return(
                  <TaskItem element={el} key={index} setTaskList={setTaskList} />
                )
              }
            )
            :
            'no tasks for now'
          }
        </div>
      </div>


    </div>
    
  )
}

export default MainTasks