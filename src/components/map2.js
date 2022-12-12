import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import geoJson from '../testing.json'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

const Marker = ({ onClick, feature }) => {
  const _onClick = () => {
    onClick(feature.properties.description)
  }

  return <button onClick={_onClick} className="marker"></button>
}

const Map = () => {
  const mapContainerRef = useRef(null)

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.97, 40.75],
      zoom: 10
    })

    // // Render custom marker components
    // geoJson.features.forEach((feature) => {
    //   // Create a React ref
    //   const ref = React.createRef()
    //   // Create a new DOM node and save it to the React ref
    //   ref.current = document.createElement('div')
    //   // Render a Marker Component on our new DOM node
    //   ReactDOM.render(
    //     <Marker onClick={markerClicked} feature={feature} />,
    //     ref.current
    //   )

    //   // Create a Mapbox Marker at our new DOM node
    //   new mapboxgl.Marker(ref.current)
    //     .setLngLat(feature.geometry.coordinates)
    //     .addTo(map)
    // })

    // Adding a marker that can be clicked for each element in the geoJSON file
    geoJson.features.forEach((feature) => {
      console.log(feature.geometry.coordinates)
      let marker = new mapboxgl.Marker()
      marker.setLngLat(feature.geometry.coordinates).addTo(map)
      marker.getElement().addEventListener('click', () => {
        console.log('clicked')
      })
    })

    // Add marker on click and console log lat/long
    let marker = new mapboxgl.Marker()
    const addMarker = (event) => {
      let coordinates = event.lngLat
      console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat)
      marker.setLngLat(coordinates).addTo(map)
    }
    map.on('click', addMarker)

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    // Clean up on unmount
    return () => map.remove()
  }, [])

  const markerClicked = (title) => {
    window.alert(title)
  }

  return <div className="map-container" ref={mapContainerRef} />
}

export default Map
