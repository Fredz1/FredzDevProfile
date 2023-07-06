import { useEffect, useState } from "react"
import axios from 'axios'
import { useRouter } from 'next/router'
import { Container, Unstable_Grid2 as Grid, Typography } from "@mui/material"

// Component imports
import TaskItem from './components/TaskItem'
import NewTaskInput from './components/NewTaskInput'
import SidePanel from "./components/SidePanel"
import TopMenu from '../../../modules/TopMenu'
import Footer from '../../../modules/Footer'

const MainTasks = () => {

  const router = useRouter()

  const [taskList, setTaskList] = useState([])

  /* 
    @desc: if users jwt does not authenticate user will get sent to Login.
    @desc: call is made whenever setTasklist is run
  */

  const getData = async () => {
    const { data } = await axios.get(
      process.env.NODE_ENV === "development" ? 
        'http://localhost:3001/apiv2/taskApp/tasks/retrieve' :
        'https://www.fredmadethis.co.za/apiv2/taskApp/tasks/retrieve',
      {
        withCredentials: true
      }
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
      process.env.NODE_ENV === 'development' ? 
      'http://localhost:3001/apiv2/taskApp/user/logout' :
      'https://www.fredmadethis.co.za/apiv2/taskApp/user/logout'
    )
    data.success ? router.push('/projects/tasker') : alert('problem logging you out')
  }

  // make inital request when page is loaded
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const mainTaskContainer = {
    border: "1px solid black",
    minHeight: 'min-content',
    my: 5,
  }

  const mainTaskHeading = {
    transform: 'rotate(180deg)',
    writingMode: 'vertical-lr',
    borderLeft: '1px solid black'
  }


  return (
    <Container>
      <TopMenu />
      <Container sx={mainTaskContainer} disableGutters direction="column">

        
        <Grid my={2}>
          <NewTaskInput setTaskList={setTaskList} />
        </Grid>
        {/* 
          Task area renders all tasks if request is not empty or unreadable
        */}
          <Grid container minHeight='max-content' alignItems="center">
            <Grid xs={12} md={2}>
              <Typography variant='h2' sx={mainTaskHeading} m='0 auto'>Tasks</Typography>
            </Grid>
            <Grid xs={12} md={10}>
              {
                taskList.length !== 0 ? 
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
            </Grid>
          </Grid>
          <Grid my={2}>
            <SidePanel logout={logout} />
          </Grid>


        
      </Container>
      <Footer />
    </Container>
    
  )
}

export default MainTasks