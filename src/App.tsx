import './App.css'
// import { useState } from 'react'
import { AllInputs } from './components/smartComponent/allInputs'
import { MasterProvider } from './context/masterProvider'



function App() {
 

  return (
   <div className=''>
    <MasterProvider>    
      <AllInputs />
    </MasterProvider>
   </div>
  )
}

export default App
