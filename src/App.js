import './App.css'
import { Routes, Route } from 'react-router-dom'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import Map from './components/map2'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Header from './components/navBar'
import ListView from './pages/ListView'

const App = () => {
  const [user, setUser] = useState(null)

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
    <div>
      <Header handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Map user={user} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/list" element={<ListView user={user} />} />
        </Routes>
        <div></div>
      </main>
    </div>
  )
}

export default App
