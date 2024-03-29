import { ChangeEvent, FC, useEffect, useState } from 'react'
import { InputLabelList } from '../InputLabel/InputLabelList'
import { User } from '../../utils/User'
import { InputLabelTemplate } from '../InputLabel/InputLabel'
import './ModalForm.css'

type Props = {
  onClose: () => void
  onSaveUser: (userData: User) => void
  user: User
}

/**
 * Component that contains the logic needed to edit or create an user depending on the incoming information in the user object,
 * also, sends back the events to close the modal or to save the user
 * @returns Modal to edit or create an user
 */
export const ModalForm: FC<Props> = ({ onClose, user, onSaveUser }) => {
  const [userData, setUserData] = useState<User>(user)
  const [emailMessage, setEmailMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (user) setUserData(user)
  }, [user])

  const onDeleteLabelsList = (index: number, type: 'phone' | 'email') => {
    if (type === 'email') {
      const emailList = userData?.emails.filter((_e, i) => i !== index)
      if (emailList && emailList?.length > 0) {
        let newState = { ...(userData as User), emails: emailList }
        setUserData(newState)
      }
    }
    if (type === 'phone') {
      const phoneList = userData?.phones.filter((_p, i) => i !== index)
      let newState = { ...userData, phones: phoneList }
      setUserData(newState)
    }
  }

  const onChangeLabelList = (value: string, field: string, type: 'phone' | 'email', index: number) => {
    if (type === 'email') {
      const oldUser = { ...userData }
      if (oldUser && oldUser.emails) {
        if (field === 'label') oldUser.emails[index].label = value
        else {
          const isRepeated = oldUser.emails.find(e => e.address === value)
          if (isRepeated) setEmailMessage(`Email address can't be repeated`)
          else {
            setEmailMessage('')
            oldUser.emails[index].address = value
          }
        }

        let newState = { ...userData, emails: oldUser.emails }
        setUserData(newState)
      }
    }
    if (type === 'phone') {
      const oldUser = { ...userData }
      if (field === 'label') oldUser.phones[index].label = value
      else oldUser.phones[index].number = value

      let newState = { ...userData, phones: oldUser.phones }
      setUserData(newState)
    }
  }

  const appendToTheList = (type: 'phone' | 'email') => {
    const oldUser = { ...userData }
    if (type === 'email') {
      oldUser.emails = [...oldUser.emails, { label: '', address: '' }]
      let newState = { ...userData, emails: oldUser.emails }
      setUserData(newState)
    }
    if (type === 'phone') {
      oldUser.phones = [...oldUser.phones, { label: '', number: '' }]
      let newState = { ...userData, phones: oldUser.phones }
      setUserData(newState)
    }
  }

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const isFormValid = (): boolean => {
    return (
      userData.givenName !== '' && userData.familyName !== '' && userData.nickName !== '' && userData.emails.length >= 1
    )
  }

  const onSave = () => {
    const isValid = isFormValid()
    if (isValid) onSaveUser(userData)
    else setErrorMessage('Form is not valid, there must be at least one email or some fields are empty.')
  }

  return (
    <div className='modal modal-dialog-centered' tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              User
            </h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={onClose} />
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='recipient-name' className='col-form-label'>
                  Given Name:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipient-name'
                  name='givenName'
                  value={userData?.givenName}
                  onChange={e => onChangeForm(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='recipient-name' className='col-form-label'>
                  Family Name:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipient-name'
                  value={userData?.familyName}
                  name='familyName'
                  onChange={e => onChangeForm(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='recipient-name' className='col-form-label'>
                  Nickname:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipient-name'
                  value={userData?.nickName}
                  name='nickName'
                  onChange={e => onChangeForm(e)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='recipient-name' className='col-form-label'>
                  Emails:
                </label>
                <InputLabelList
                  type='email'
                  records={userData.emails as unknown as InputLabelTemplate[]}
                  onDelete={index => onDeleteLabelsList(index, 'email')}
                  onChangeLabel={(label, index) => onChangeLabelList(label, 'label', 'email', index)}
                  onChangeValue={(address, index) => onChangeLabelList(address, 'address', 'email', index)}
                  onAddNew={() => appendToTheList('email')}
                />
                {emailMessage !== '' && (
                  <div className='alert alert-warning' style={{ marginTop: '10px', padding: '7px' }}>
                    {emailMessage}
                  </div>
                )}
              </div>
              <div className='mb-3'>
                {userData.phones.length > 0 && (
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Phones:
                  </label>
                )}
                <InputLabelList
                  type='phone'
                  records={userData.phones as unknown as InputLabelTemplate[]}
                  onDelete={index => onDeleteLabelsList(index, 'phone')}
                  onChangeLabel={(label, index) => onChangeLabelList(label, 'label', 'phone', index)}
                  onChangeValue={(number, index) => onChangeLabelList(number, 'number', 'phone', index)}
                  onAddNew={() => appendToTheList('phone')}
                />
              </div>
            </form>
            {errorMessage !== '' && (
              <div className='alert alert-danger' style={{ marginTop: '10px', padding: '7px' }}>
                {errorMessage}
              </div>
            )}
          </div>
          <div className='modal-footer'>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end' style={{ width: '100%' }}>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={onClose}>
                Close
              </button>
              <button type='button' className='btn btn-primary' onClick={() => onSave()}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
