import { User } from '../utils/User'

const baseUrl = 'http://localhost:3001/users'

export const getUsers = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const saveUser = async (user: User) => {
  try {
    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteUser = async (user: User) => {
  try {
    return fetch(baseUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id: user._id }),
    })
  } catch (error) {
    console.log(error)
  }
}
