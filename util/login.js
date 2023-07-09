import axios from 'axios'

export const login = async (email, password) => {

  const data  = await axios.post(
      process.env.NODE_ENV === 'development' ? 
      'http://localhost:3001/apiv2/taskApp/user/login' : 
      'https://www.fredmadethis.co.za/apiv2/taskApp/user/login',
      {
        email,
        password,
      },
      {
        withCredentials: true
      }
    )

    console.log(data)
}