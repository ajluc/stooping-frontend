import { useEffect, useState } from 'react'
import AddMarker from '../components/addMarker'
import Map from '../components/map'
import Markers from '../components/markers'
import { GetStoops } from '../services/StoopServices'
import AddStoop from '../components/newStoopForm'
import StoopDetails from '../components/stoopDetails'
import { Collapse } from 'reactstrap'
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
        return (
          <div className="toggle-details">
            <p>Curious about stooping?</p>
            <p>
              The concept is not new to this city. Books, furniture, clothes -
              all can be found for free. Set out at the curb or leaned on a
              front gate, with a hand lettered "free! it works!" sign or
              abandoned for garbage pick-up. All have been deemed fair game for
              decades.
            </p>
            <p>
              Stooping alerts are often found via Instagram, but it's hard to
              know what items are nearby. Here, stoops are organized into a map
              and can be filtered by neighborhood.
            </p>
            <p>So get out there, and happy stooping!</p>
          </div>
        )
      case type === 2:
        return (
          <div className="toggle-details">
            <AddStoop
              formState={formState}
              setFormState={setFormState}
              stoops={stoops}
              setStoops={setStoops}
              startState={startState}
              user={user}
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
        return (
          <StoopDetails
            className="toggle-details"
            stoops={stoops}
            user={user}
          />
        )
      default:
        return (
          <div className="toggle-details">
            <p>
              New York is filled with many interesting people getting rid of
              their many interesting things. Post your curb alerts (+) or find
              your next "new" coffee table here by exploring the markers on the
              map.
            </p>
            <p>
              If you take a stoop or find one has already been stooped by
              someone else, please mark it as "taken".
            </p>
            <p>Thanks for stooping by!</p>
          </div>
        )
    }
  }

  return (
    <div className="map grid">
      <Map setMap={setMap} />
      <Markers map={map} stoops={stoops} setIsOpen={setIsOpen} />
      {type !== 3 ? (
        <Collapse
          id="collapse"
          className="popup-container"
          horizontal
          isOpen={isOpen}
        >
          <div className="flex-row end">
            <i onClick={toggle} className="blue icon bi-x"></i>
          </div>
          <div className="buffer"></div>
          <div className="buffer"></div>
          {popupType(type)}
        </Collapse>
      ) : (
        <Collapse
          id="collapse"
          className="popup-container-2"
          horizontal
          isOpen={isOpen}
        >
          <div className="flex-row end">
            <i onClick={toggle} className="blue icon bi-x"></i>
          </div>
          <div className="buffer"></div>
          {popupType(type)}
        </Collapse>
      )}
    </div>
  )
}

export default Home
