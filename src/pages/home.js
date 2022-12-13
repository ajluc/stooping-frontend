import { useEffect, useState } from 'react'
import AddMarker from '../components/addMarker'
import MapNew from '../components/map'
import Markers from '../components/markers'
import { GetStoops } from '../services/StoopServices'

const Home = ({ user }) => {
  const [stoops, setStoops] = useState(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    getStoops()
  }, [])

  const getStoops = async () => {
    const stoopsData = await GetStoops()
    setStoops(stoopsData)
  }

  return (
    <div className="map">
      <MapNew setMap={setMap} />
      <Markers map={map} stoops={stoops} />
      <AddMarker map={map} stoops={stoops} setStoops={setStoops} />
    </div>
  )
}

export default Home
