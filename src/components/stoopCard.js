import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GetStoopById,
  UpdateStoop,
  DeleteStoop
} from '../services/StoopServices'

const StoopCard = ({ stoop, user }) => {
  let navigate = useNavigate()
  let [editing, setEditing] = useState(false)
  let [formState, setFormState] = useState({
    title: stoop.title,
    description: stoop.description,
    image: stoop.image,
    neighborhood_id: stoop.neighborhood_id
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('updated post')
    console.log(formState)
    // console.log(user.payload.id)
    // navigate(`/`)
    await UpdateStoop(stoop.id, formState)
    setEditing(false)
    await GetStoopById(stoop.id)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  if (stoop) {
    return (
      <div className="stoop-card">
        <img src={stoop.image} alt=""></img>
        <div className="card-text-container">
          <div>
            <div className="flex-row space-btw">
              <p className="title">{stoop.title}</p>
              {editing ? (
                <div>
                  <i className="grey bi-check2-all" onClick={handleSubmit}></i>
                  <i
                    className="grey bi-x-lg"
                    onClick={async () => {
                      await DeleteStoop(stoop.id)
                      navigate('/')
                    }}
                  ></i>
                </div>
              ) : (
                <div>
                  {user?.payload.id == stoop.user_id ? (
                    <i
                      className="grey location-icon bi-pencil-fill"
                      onClick={() => setEditing(true)}
                    ></i>
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          </div>
          <hr />
          <div className="flex-row">
            <i className="grey location-icon bi-geo-alt-fill"></i>
            <p className="grey">{stoop.neighborhood.name}</p>
          </div>
          <div className="buffer"></div>
          {editing ? (
            <form onSubmit={handleSubmit}>
              <textarea
                rows="4"
                // cols="25"
                onChange={handleChange}
                id="description"
                placeholder="Description"
                value={formState.description}
              />
              {/* <button type="submit">Submit</button> */}
            </form>
          ) : (
            <p>{stoop.description}</p>
          )}
        </div>
      </div>
    )
  }
}

export default StoopCard
