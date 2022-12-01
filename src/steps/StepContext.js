import React,{createContext,useState} from 'react'
import App from '../App'

const multipleContext = createContext()

function StepContext() {

    const[current,setCurrent] = useState(1)
    const[userData,setUserData] = useState([])
    const[finalData,setFinalData] = useState([])

    function submitData(){
        setFinalData([...finalData,userData])
        setUserData('')
        setCurrent(1)
    }

  return (
    <div>
      <multipleContext.Provider value={{current,setCurrent,userData,setUserData,finalData,setFinalData,submitData}}>
      <App/>
      </multipleContext.Provider>
    </div>
  )
}

export default StepContext
export {multipleContext}
