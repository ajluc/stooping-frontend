// Outdated, delete at end. See Home.js and related components for current code.

// import mapboxgl from 'mapbox-gl'
// import React, { useEffect, useRef, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import ReactDOM from 'react-dom'
// import geoJson from '../testing.json'
// import { CreateStoop, GetStoops } from '../services/StoopServices'

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

// const Map = ({ user, stoops, setStoops }) => {
//   let navigate = useNavigate()
//   // const [stoops, setStoops] = useState([])
//   const [tempcoords, setTemp] = useState(null)
//   const startState = {
//     title: '',
//     description: '',
//     image: '',
//     user_id: 9, // => NEED TO CHANGE!!!!
//     neighborhood_id: 1
//   }
//   const [formState, setFormState] = useState(startState)
//   const [mapLoaded, setMapLoaded] = useState(false)
//   const mapContainerRef = useRef(null)

//   // const getStoops = async () => {
//   //   const stoopsData = await GetStoops()
//   //   setStoops(stoopsData)
//   // }

//   // Initialize map when component mounts

//   useEffect(() => {
//     // getStoops()
//     let map
//     if (stoops) {
//       map = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-73.97, 40.75],
//         zoom: 11
//       })
//       // Add navigation control (the +/- zoom buttons)
//       map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

//       // Adding a marker for each stoop in the database
//       stoops?.forEach((stoop) => {
//         console.log('howdy')
//         if (stoop.latitude && stoop.longitude) {
//           let marker = new mapboxgl.Marker()
//           let coords = [stoop.longitude, stoop.latitude]
//           marker.setLngLat(coords).addTo(map)
//           marker.getElement().addEventListener('click', () => {
//             console.log('clicked')
//           })
//         }
//       })

//       // Add marker on click and console log lat/long
//       let marker = new mapboxgl.Marker()
//       const addMarker = (event) => {
//         let coordinates = event.lngLat
//         marker.setLngLat(coordinates).addTo(map)
//         setTemp(coordinates)
//         setFormState({
//           ...formState,
//           longitude: coordinates.lng,
//           latitude: coordinates.lat
//         })
//       }
//       map.on('click', addMarker)

//       // Clean up on unmount
//       return () => map.remove()
//     }
//   }, [stoops])

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     console.log('new post')
//     console.log(formState)
//     console.log(tempcoords)
//     // console.log(user.payload.id)
//     setFormState(startState)
//     // navigate(`/`)
//     const newStoop = await CreateStoop(formState)
//     setStoops([...stoops, formState])
//   }

//   const handleChange = (event) => {
//     setFormState({ ...formState, [event.target.id]: event.target.value })
//   }

//   const form = (
//     <div className="the-form">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           id="title"
//           onChange={handleChange}
//           value={formState.title}
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           id="image"
//           onChange={handleChange}
//           value={formState.image}
//         />
//         <textarea
//           rows="4"
//           cols="50"
//           onChange={handleChange}
//           id="description"
//           value={formState.description}
//         />
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )

//   return (
//     <div className="map">
//       <div className="map-container" ref={mapContainerRef} />
//       {tempcoords ? (
//         <div>
//           <p>New Stoop Details:</p>
//           {form}
//         </div>
//       ) : (
//         <div>
//           <p>Please pick a location on the map!</p>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Map
