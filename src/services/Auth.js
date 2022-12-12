import Client from './api'

export const SignInUser = async (data) => {
  try {
    console.log('ping')
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    console.log('token: ', res.data)
    return res.data
  } catch (error) {
    return null
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
