import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import ContactUs from './Component/ContactUs'
import LogIn from './Component/LogIn'
import SignUp from './Component/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/contact' element={ <ContactUs />} />
    <Route path='/login' element={ <LogIn />} />
    <Route path='/signup' element={ <SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
