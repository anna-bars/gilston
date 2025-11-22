import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Layout/Header/Header';
import Toolbar from './components/Layout/Header/Toolbar';
import topAngle from './assets/top-angle.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toolbar />
    </>
  )
}

export default App
