import './App.css'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Header from './components/navBar'
import ListView from './pages/ListView'
import Home from './pages/Home'
import SignInBar from './components/signInBar'
import Logo from './components/logo'

const App = () => {
  const [user, setUser] = useState(null)
  const [isOpen, setIsOpen] = useState(true)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <div className="app-container">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <SignInBar user={user} handleLogout={handleLogout} />
      <Logo />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/list" element={<ListView user={user} />} />
        <Route
          path="/"
          element={
            <Home user={user} type={0} isOpen={isOpen} setIsOpen={setIsOpen} />
          }
        />
        <Route
          path="/about"
          element={
            <Home user={user} type={1} isOpen={isOpen} setIsOpen={setIsOpen} />
          }
        />
        <Route
          path="/add"
          element={
            <Home user={user} type={2} isOpen={isOpen} setIsOpen={setIsOpen} />
          }
        />
        <Route
          path="/stoops/:id"
          element={
            <Home user={user} type={3} isOpen={isOpen} setIsOpen={setIsOpen} />
          }
        />
      </Routes>
      <div></div>
    </div>
  )
}

export default App
