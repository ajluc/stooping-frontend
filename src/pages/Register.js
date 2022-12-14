import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  let navigate = useNavigate()

  const startState = {
    name: '',
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(startState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formState.name,
      email: formState.email,
      password: formState.password,
      neighborhood_id: 1
    })
    setFormState(startState)
    navigate('/signin')
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="name"
            value={formState.name}
            required
          />
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="email"
            value={formState.email}
            required
          />
        </div>
        <div className="form-div">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
            value={formState.password}
            required
          />
        </div>
        <div className="buffer"></div>
        <div className="form-div">
          <button>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
