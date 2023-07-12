import axios from 'axios'

export const userLogin = async input => {

  const email = input.userEmail
  const password = input.userPassword

  let { data } = await axios.post(
    process.env.NODE_ENV ?
      'http://localhost:3001/apiv2/user/login' :
      'https://www.fredmadethisco.za/apiv2/user/login',
      {
        email,
        password
      }
  )
  return data
}

export const userRegistration = async input => {

  const { data } = await axios.post(
    process.env.NODE_ENV === "development" ? 
    'http://localhost:3001/apiv2/taskApp/user/register' : 
    'https://www.fredmadethis.co.za/apiv2/taskApp/user/register',
    {
      name,
      surname,
      email,
      password
    }
  )

  return data

}