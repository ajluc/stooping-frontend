import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignInUser } from '../services/Auth'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const startState = {
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(startState)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formState)
    if (payload) {
      await setUser(payload)
      setFormState(startState)
      navigate('/')
    } else {
      window.alert('Incorrect Email or Password')
      setFormState({ email: formState.email, password: '' })
    }
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
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
          <button>log in</button>
        </div>
      </form>
      <div className="form-div">
        <p className="center-text">
          New user?{' '}
          <span className="blue" onClick={() => navigate('/register')}>
            Register here.
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignIn
