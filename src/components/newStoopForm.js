import { useNavigate } from 'react-router-dom'
import { CreateStoop } from '../services/StoopServices'

const AddStoop = ({
  stoops,
  setStoops,
  formState,
  setFormState,
  startState,
  user
}) => {
  let navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('new post')
    console.log(formState)
    // console.log(user.payload.id)
    // navigate(`/`)
    await CreateStoop(formState)
    setStoops([...stoops, formState])
    setFormState(startState)
    navigate('/')
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div className="toggle-details">
      {user ? (
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <input
              type="text"
              placeholder="Title"
              id="title"
              onChange={handleChange}
              value={formState.title}
            />
          </div>
          <div className="form-div">
            <input
              type="text"
              placeholder="Image URL"
              id="image"
              onChange={handleChange}
              value={formState.image}
            />
          </div>
          <div className="form-div">
            <textarea
              rows="4"
              // cols="25"
              onChange={handleChange}
              id="description"
              placeholder="Description"
              value={formState.description}
            />
            <div className="buffer"></div>
          </div>
          <div className="form-div">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <p>Please log in or register to add your stoop to the map.</p>
      )}
    </div>
  )
}

export default AddStoop
