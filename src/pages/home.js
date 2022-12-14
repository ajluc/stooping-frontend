import { useEffect, useState } from 'react'
import AddMarker from '../components/addMarker'
import Map from '../components/map'
import Markers from '../components/markers'
import { GetStoops } from '../services/StoopServices'
import AddStoop from '../components/newStoopForm'

const Home = ({ user, type }) => {
  const [stoops, setStoops] = useState(null)
  const [map, setMap] = useState(null)
  const startState = {
    title: '',
    description: '',
    image: '',
    user_id: null,
    neighborhood_id: 1
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
            />
          </div>
        )
      default:
        return <p>Welcome!</p>
    }
  }

  return (
    <div className="map grid">
      <Map setMap={setMap} />
      <Markers map={map} stoops={stoops} />
      <div className="popup-container">
        <h3>StoopCity</h3>
        {popupType(type)}
      </div>
    </div>
  )
}

export default Home
