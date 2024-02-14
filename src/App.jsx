import {Button} from '@mui/material'

import { useState } from 'react'

import './App.css'

function App() {
    
    
  
const [backgroundColor,setBackgroundColor] = useState('')
  const changeColor = (color) =>{
    setBackgroundColor(color)
  
  }


  return (
    <>
      <div style={{ width:"100%", height:"100vh",}}className='d-flex justify-content-center
    align-items-center'>
            <div style={{width:"650px", height:"500px", backgroundColor}} className=' p-5 rounded shadow'>

        <h3 className='text-dark'>BACKGROUND COLOUR CHANGING APP</h3>
        <Button onClick = {() => changeColor('green')} style={{width:"520px"}} className='text-light fw-bold fs-4 
        bg-success mt-5 bolder rounded shadow ms-3' variant="Outlined">GREEN</Button>
        <Button onClick = {() => changeColor('yellow')} style={{width:"520px"}}className='text-light fw-bold fs-4 
        bg-warning mt-5 bolder rounded shadow ms-3' variant="contained">yellow</Button>
        <Button onClick = {() => changeColor('red')} style={{width:"520px"}}className='text-light fw-bold fs-4 
        bg-danger mt-5 bolder rounded shadow ms-3' variant="contained">Red</Button>
    </div>
    </div>
    </>
  )
}

export default App
