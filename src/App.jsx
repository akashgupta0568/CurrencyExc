import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 style={{textAlign:'center'}}>Currency Exchenger</h3>
      <div style={{width:'50%',height:'50vh', margin:'auto'}}>
          <div style={{height:'20vh',background:'whitesmoke'}}>A</div>
          <div style={{height:'20vh',background:'lightblue'}}>B</div>
      </div>
      <div>
        <p>Step 1 Create Custom Hook</p>
      </div>
    </>
  )
}

export default App
