import { FC } from 'react'
import { Email, Phone, User } from '../../utils/User'
import trashIcon from '../../assets/trash.svg'
import editIcon from '../../assets/edit.svg'

type Props = {
  users: User[] | undefined
  editUser: (user: User) => void
  deleteUser: (user: User) => void
}

export const UsersList: FC<Props> = ({ users, editUser, deleteUser }) => {
  const renderPhones = (phones: Phone[]) => {
    if (phones.length > 0) {
      return phones.map((phone, i) => {
        const isLine = i === phones.length - 1 ? '' : ' - '
        return `${phone.number} ${isLine}`
      })
    }
  }

  const renderEmails = (emails: Email[]) => {
    if (emails.length > 0) {
      return emails.map((email, i) => {
        const isLine = i === emails.length - 1 ? '' : ' - '
        return `${email.address} ${isLine}`
      })
    }
  }

  const usersList = users?.map((user, index) => {
    return (
      <tr key={user._id}>
        <th scope='row'>{index + 1}</th>
        <td>{user.givenName}</td>
        <td>{user.familyName}</td>
        <td>{user.nickName}</td>
        <td>{renderPhones(user.phones)}</td>
        <td>{renderEmails(user.emails)}</td>
        <td>
          <div className='icon-link icon-link-hover'>
            <img src={editIcon} alt='Bootstrap' width='22' height='22' onClick={() => editUser(user)} />
          </div>
        </td>
        <td>
          <div className='icon-link icon-link-hover'>
            <img src={trashIcon} alt='Bootstrap' width='22' height='22' onClick={() => deleteUser(user)} />
          </div>
        </td>
      </tr>
    )
  })

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Given Name</th>
          <th scope='col'>Family Name</th>
          <th scope='col'>Nickname</th>
          <th scope='col'>Phones</th>
          <th scope='col'>Emails</th>
        </tr>
      </thead>
      <tbody>{usersList}</tbody>
    </table>
  )
}
