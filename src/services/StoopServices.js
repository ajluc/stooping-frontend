import Client from './api'

export const GetStoops = async () => {
  try {
    const res = await Client.get('/stoops')
    return res.data
  } catch (error) {
    throw error
  }
}
