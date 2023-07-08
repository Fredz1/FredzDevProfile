import { createContext, useState } from "react"

const INITIAL_DATA = {
  userName: "Guest",
}

export const UserInfo = createContext(INITIAL_DATA)

export const UserContext = ( { children } ) => {

  const [userData, setUserData] = useState(INITIAL_DATA)
  
  const updateUserData = fields => {
    setUserData(prev => {
      return {...prev, ...fields}
    })
  }

  return (
    <UserInfo.Provider value={{userData, updateUserData}} >
      { children }
    </UserInfo.Provider>
  )

}