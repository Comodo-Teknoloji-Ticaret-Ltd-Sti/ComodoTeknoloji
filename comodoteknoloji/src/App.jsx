import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comodo from './components/comodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comodo />
    </>
  )
}

export default App
