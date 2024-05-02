import { useState } from 'react'
import './App.css'
import { BACKEND_URL } from './config.js'

function App() {
  const [result, setResult] = useState('')

  return (
    <div className='App'>
      <h1>Prueba MERN</h1>
      <button onClick={async () => {
        const res = await fetch(`${BACKEND_URL}/ping`)
        const data = await res.json()
        console.log(data)
        setResult(data)
      }}>
        Users
      </button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )
}

export default App
