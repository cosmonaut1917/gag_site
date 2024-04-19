import { useState } from 'react'
import './App.css'
import Image21 from '../src/assets/lol.jpg'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <img style={{width: "18em"}} src={Image21} ></img>
      <h1>fuck you iram </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  )
}

export default App
