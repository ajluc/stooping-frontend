import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

const AddMarker = ({ user, map, setFormState, formState }) => {
  useEffect(() => {
    const options = {
      // color: '#0000ff',
      draggable: true
    }
    // Add marker on click and console log lat/long
    if (map) {
      let marker = new mapboxgl.Marker(options)
      const addMarker = (event) => {
        let coordinates = event.lngLat
        marker.setLngLat(coordinates).addTo(map)
        setFormState({
          ...formState,
          longitude: coordinates.lng,
          latitude: coordinates.lat,
          user_id: user.id
        })
      }
      map.on('click', addMarker)
    }
  }, [map])
}

export default AddMarker
