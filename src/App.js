import './App.css'
import { Routes, Route } from 'react-router-dom'
import Map from './components/map2'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Header from './components/navBar'
import { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
        </Routes>
        <div></div>
      </main>
    </div>
  )
}

export default App
