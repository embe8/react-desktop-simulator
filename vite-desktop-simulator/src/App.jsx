import { Routes, Route } from 'react-router';
import { useState } from 'react'
import Desktop from './pages/Desktop';
import Bootup from './pages/Bootup';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Bootup />} />
      <Route path="/desktop" element={<Desktop />} />

    </Routes>
  )
}

export default App
