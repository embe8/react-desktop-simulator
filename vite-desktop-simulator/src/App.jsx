import { Routes, Route } from 'react-router';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Desktop from './pages/Desktop';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<Desktop />} />
      
    </Routes>
  )
}

export default App
