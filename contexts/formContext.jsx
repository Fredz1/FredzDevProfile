import { createContext, useState } from "react";

export const formInfo = createContext(INITIAL_DATA)

const INITIAL_DATA = {
  userName: "",
  userEmail: "",
  userMessage: ""
}


const FormContext = ( { children } ) => {
  
  const [data, setData] = useState(INITIAL_DATA)

  const updateFields = fields => {
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  return (
    <formInfo.Provider value={formInfo} >
      { children }
    </formInfo.Provider>
  );
}

export default FormContext;
