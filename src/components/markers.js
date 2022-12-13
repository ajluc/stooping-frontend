import { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const Markers = ({ map, stoops }) => {
  useEffect(() => {
    // Adding a marker for each stoop in the database
    stoops?.forEach((stoop) => {
      if (stoop.latitude && stoop.longitude) {
        let marker = new mapboxgl.Marker()
        let coords = [stoop.longitude, stoop.latitude]
        marker.setLngLat(coords).addTo(map)
        marker.getElement().addEventListener('click', () => {
          console.log('clicked')
        })
      }
    })
  }, [stoops])
}

export default Markers
