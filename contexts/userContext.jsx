import { createContext, useState } from "react"

const INITIAL_DATA = {
  userName: "Guest",
}

export const UserInfo = createContext(INITIAL_DATA)

export const UserContext = ( { children } ) => {

  const [data, setData] = useState(INITIAL_DATA)
  
  const updateUserData = fields => {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  return (
    <UserInfo.Provider value={{data, updateUserData}} >
      { children }
    </UserInfo.Provider>
  )

}