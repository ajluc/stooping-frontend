import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef } from 'react'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

const Map = ({ setMap }) => {
  const mapContainerRef = useRef(null)

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/ajluc/clbfex7b9001l14qp20sva3qo/draft',
      center: [-73.97, 40.75],
      zoom: 11
    })
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

    setMap(map)

    // Clean up on unmount
    return () => map.remove()
  }, [])

  return <div className="map-container" ref={mapContainerRef} />
}

export default Map
