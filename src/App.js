import './App.css'
import { Routes, Route } from 'react-router-dom'
import Map from './components/map'

const App = () => {
  return (
    <div>
      {/* <HeaderAction /> */}
      <main>
        <Routes>
          <Route path="/" element={<Map />} />
        </Routes>
        <div></div>
      </main>
    </div>
  )
}

export default App
