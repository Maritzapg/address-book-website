import { FC, useCallback, useEffect, useState } from 'react'
import { Header } from './components/header/Header'
import { UsersList } from './components/users/UsersList'
import { Button } from './components/button/Button'
import { ModalForm } from './components/form/ModalForm'
import { deleteUser, getUsers as getUsersList, saveUser } from './services/users'
import { User } from './utils/User'
import { DeleteModal } from './components/deleteModal/DeleteModal'
import { Spinner } from './components/spinner/Spinner'
import './AddressBook.css'

const userInitialState: User = {
  givenName: '',
  familyName: '',
  nickName: '',
  emails: [{ label: '', address: '' }],
  phones: [],
}

/**
 * Main page and component, contains the main logic for crud and organizes the other components
 * @returns component relates UI for the book addresses
 */
export const AddressBook: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [deleteUserModal, setDeleteUserModal] = useState(false)
  const [users, setUsers] = useState<User[]>()
  const [selectedUser, setSelectedUser] = useState<User>(userInitialState)

  const getUsers = useCallback(async () => {
    setIsLoading(true)
    const list = await getUsersList()
    setUsers(list)
    setSelectedUser(userInitialState)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const saveUserData = useCallback(async (userData: User) => {
    await saveUser(userData)
    getUsers()
    setOpenModal(false)
  }, [])

  const removeUser = async () => {
    await deleteUser(selectedUser)
    getUsers()
    setDeleteUserModal(false)
  }

  return (
    <>
      <div className='container'>
        <Header />
        <div className='spacing d-flex flex-row-reverse'>
          <Button onClick={() => setOpenModal(true)} text='Create' />
        </div>
        <div className='spacing'>
          {isLoading && <Spinner />}
          {users?.length === 0 ? (
            <div>No users found.</div>
          ) : (
            <UsersList
              users={users}
              editUser={user => {
                setSelectedUser(user)
                setOpenModal(true)
              }}
              deleteUser={user => {
                setSelectedUser(user)
                setDeleteUserModal(true)
              }}
            />
          )}
        </div>
      </div>
      {openModal && (
        <ModalForm
          onClose={() => {
            setOpenModal(false)
            setSelectedUser(userInitialState)
          }}
          onSaveUser={saveUserData}
          user={selectedUser}
        />
      )}
      {deleteUserModal && <DeleteModal onClose={() => setDeleteUserModal(false)} onDelete={removeUser} />}
    </>
  )
}
