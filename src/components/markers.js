import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { useNavigate } from 'react-router-dom'

const Markers = ({ map, stoops }) => {
  let navigate = useNavigate()
  const [currentMarkers, setCurrentMarkers] = useState([])
  useEffect(() => {
    // Adding a marker for each stoop in the database
    const options = {
      color: '#0d6efd'
    }
    if (currentMarkers.length > 0) {
      currentMarkers.forEach((marker) => {
        marker.remove()
      })
    }
    let temp = []
    stoops?.forEach((stoop) => {
      if (stoop.latitude && stoop.longitude) {
        let marker = new mapboxgl.Marker(options)
        let coords = [stoop.longitude, stoop.latitude]
        marker.setLngLat(coords).addTo(map)
        marker.getElement().addEventListener('click', () => {
          navigate(`/stoops/${stoop.id}`)
        })
        temp.push(marker)
      }
    })
    setCurrentMarkers(temp)
  }, [stoops])
}

export default Markers
