import { useEffect, useState } from 'react'
import AddMarker from '../components/addMarker'
import Map from '../components/map'
import Markers from '../components/markers'
import { GetStoops } from '../services/StoopServices'
import AddStoop from '../components/newStoopForm'
import StoopDetails from '../components/stoopDetails'
import { Collapse, Button, Alert, Card, CardBody } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = ({ user, type, isOpen, setIsOpen }) => {
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

  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => setIsOpen(!isOpen)

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
            <Collapse className="toggle-details" horizontal isOpen={isOpen}>
              <AddStoop
                formState={formState}
                setFormState={setFormState}
                stoops={stoops}
                setStoops={setStoops}
                startState={startState}
              />
            </Collapse>
            <AddMarker
              user={user}
              map={map}
              formState={formState}
              setFormState={setFormState}
            />
          </div>
        )
      case type === 3:
        return <StoopDetails stoops={stoops} />
      default:
        return (
          <div>
            <Collapse horizontal isOpen={isOpen}>
              <div className="toggle-details">
                <p>Howdy</p>
              </div>
            </Collapse>
          </div>
        )
    }
  }

  return (
    <div className="map grid">
      <Map setMap={setMap} />
      <Markers map={map} stoops={stoops} />
      <div className="popup-container">{popupType(type)}</div>
    </div>
  )
}

export default Home
