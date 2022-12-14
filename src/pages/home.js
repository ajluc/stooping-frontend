import { useEffect, useState } from 'react'
import AddMarker from '../components/addMarker'
import Map from '../components/map'
import Markers from '../components/markers'
import { GetStoops } from '../services/StoopServices'
import AddStoop from '../components/newStoopForm'
import StoopDetails from '../components/stoopDetails'

const Home = ({ user, type }) => {
  const [stoops, setStoops] = useState(null)
  const [map, setMap] = useState(null)
  const startState = {
    title: '',
    description: '',
    image: '',
    // user_id: null,
    neighborhood_id: 1,
    longitude: null,
    latitude: null
  }
  const [formState, setFormState] = useState(startState)

  useEffect(() => {
    getStoops()
  }, [])

  const getStoops = async () => {
    const stoopsData = await GetStoops()
    setStoops(stoopsData)
  }

  const popupType = (type) => {
    switch (true) {
      case type === 1:
        return <p>About!</p>
      case type === 2:
        return (
          <div>
            <AddMarker
              user={user}
              map={map}
              formState={formState}
              setFormState={setFormState}
            />
            <AddStoop
              formState={formState}
              setFormState={setFormState}
              stoops={stoops}
              setStoops={setStoops}
              startState={startState}
            />
          </div>
        )
      case type === 3:
        return <StoopDetails stoops={stoops} />
      default:
        return <p>Welcome!</p>
    }
  }

  return (
    <div className="map grid">
      <Map setMap={setMap} />
      <Markers map={map} stoops={stoops} />
      <div className="popup-container">
        <h1>StoopCity</h1>
        {popupType(type)}
      </div>
    </div>
  )
}

export default Home
