import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl' // eslint-disable-line import/no-webpack-loader-syntax
import { Marker } from 'react-map-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWpsdWMiLCJhIjoiY2xiZmVsMnM3MDVidzNvbGplc3lwemwyMCJ9.kAdppYy6iAWC5qF1sXyKLw'

const Map = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(-73.97)
  const [lat, setLat] = useState(40.75)
  const [zoom, setZoom] = useState(10.5)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/ajluc/clbfex7b9001l14qp20sva3qo',
      center: [lng, lat],
      zoom: zoom
    })
  })

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-73.97, 40.75]
        },
        properties: {
          title: 'Mapbox',
          description: 'Center'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.414, 37.776]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }
    ]
  }

  // // add markers to map
  // for (const feature of geojson.features) {
  //   // create a HTML element for each feature
  //   const el = document.createElement('div')
  //   el.className = 'marker'

  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map)
  // }
  // const marker = new mapboxgl.Marker().setLngLat([-73.97, 40.75]).addTo(map)

  let marker = {
    latitude: 40.75,
    longitude: -73.97
  }

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <Marker longitude={marker.longitude} latitude={marker.latitude}>
        <div className="marker temporary-marker">
          <span></span>
        </div>
      </Marker>
    </div>
  )
}

export default Map
