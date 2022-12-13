import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { CreateStoop } from '../services/StoopServices'

const AddMarker = ({ map, stoops, setStoops }) => {
  const startState = {
    title: '',
    description: '',
    image: '',
    user_id: 9, // => NEED TO CHANGE!!!!
    neighborhood_id: 1
  }
  const [formState, setFormState] = useState(startState)

  useEffect(() => {
    // Add marker on click and console log lat/long
    if (map) {
      let marker = new mapboxgl.Marker()
      const addMarker = (event) => {
        let coordinates = event.lngLat
        marker.setLngLat(coordinates).addTo(map)
        setFormState({
          ...formState,
          longitude: coordinates.lng,
          latitude: coordinates.lat
        })
      }
      map.on('click', addMarker)
    }
  }, [map])

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('new post')
    console.log(formState)
    // console.log(user.payload.id)
    setFormState(startState)
    // navigate(`/`)
    const newStoop = await CreateStoop(formState)
    setStoops([...stoops, formState])
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="the-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <input
          type="text"
          placeholder="Image URL"
          id="image"
          onChange={handleChange}
          value={formState.image}
        />
        <textarea
          rows="4"
          cols="50"
          onChange={handleChange}
          id="description"
          value={formState.description}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddMarker
