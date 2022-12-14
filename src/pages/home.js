import { useEffect, useState } from 'react'
import AddMarker from '../components/addMarker'
import Map from '../components/map'
import Markers from '../components/markers'
import { GetStoops } from '../services/StoopServices'
import AddStoop from '../components/newStoopForm'
import StoopDetails from '../components/stoopDetails'
import { Collapse, Button, Alert, Card, CardBody } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, type, isOpen, setIsOpen }) => {
  let navigate = useNavigate()
  const [stoops, setStoops] = useState(null)
  const [map, setMap] = useState(null)
  const startState = {
    title: '',
    description: '',
    image: '',
    neighborhood_id: 1,
    longitude: null,
    latitude: null
  }
  const [formState, setFormState] = useState(startState)

  const toggle = () => {
    setIsOpen(false)
    if (type === 3) {
      navigate('/')
    }
  }

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
          <div className="toggle-details">
            <AddStoop
              formState={formState}
              setFormState={setFormState}
              stoops={stoops}
              setStoops={setStoops}
              startState={startState}
            />
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
          <div className="toggle-details">
            <p>Howdy</p>
          </div>
        )
    }
  }

  return (
    <div className="map grid">
      <Map setMap={setMap} />
      <Markers map={map} stoops={stoops} setIsOpen={setIsOpen} />
      <Collapse className="popup-container" horizontal isOpen={isOpen}>
        {popupType(type)}
        <i onClick={toggle} className="icon bi-chevron-left"></i>
      </Collapse>
      {/* <div className="popup-container">{popupType(type)}</div> */}
    </div>
  )
}

export default Home
