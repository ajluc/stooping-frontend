import { CreateStoop } from '../services/StoopServices'

const AddStoop = ({ stoops, setStoops, formState, setFormState }) => {
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('new post')
    console.log(formState)
    // console.log(user.payload.id)
    // navigate(`/`)
    const newStoop = await CreateStoop(formState)
    setStoops([...stoops, formState])
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <input
          type="text"
          placeholder="Image URL"
          id="image"
          onChange={handleChange}
          value={formState.image}
        />
        <textarea
          rows="4"
          cols="50"
          onChange={handleChange}
          id="description"
          value={formState.description}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddStoop
