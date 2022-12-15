import Client from './api'

export const GetStoops = async () => {
  try {
    const res = await Client.get('/stoops')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetStoopById = async (stoopId) => {
  try {
    const res = await Client.get(`/stoops/${stoopId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateStoop = async (formData) => {
  try {
    const res = await Client.post('/stoops', formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateStoop = async (stoopId, formData) => {
  try {
    const res = await Client.put(`/stoops/${stoopId}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteStoop = async (stoopId) => {
  try {
    const res = await Client.delete(`/stoops/${stoopId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
