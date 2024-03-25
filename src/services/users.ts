import { User } from '../utils/User'

export const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'GET',
    })
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const saveUser = async (user: User) => {
  try {
    return fetch('http://localhost:3000/users', {
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
    return fetch('http://localhost:3000/users/delete', {
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
