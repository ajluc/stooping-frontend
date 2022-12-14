import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

const AddMarker = ({ user, map, setFormState, formState }) => {
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
          latitude: coordinates.lat,
          user: user.id
        })
      }
      map.on('click', addMarker)
    }
  }, [map])
}

export default AddMarker
