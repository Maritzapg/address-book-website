import { FC } from 'react'

type Props = {
  onClose: () => void
  onDelete: () => void
}

/**
 * Component that sends back the events to close it or confirm the deletion of the user
 * @returns Confirmation modal before deleting a user
 */
export const DeleteModal: FC<Props> = ({ onClose, onDelete }) => {
  return (
    <div className='modal modal-dialog-centered' tabIndex={-1}>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Delete User
            </h1>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={onClose} />
          </div>
          <div className='modal-body'>
            <p>Are you sure you want to delete this user?</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={onClose}>
              Cancel
            </button>
            <button type='button' className='btn btn-primary' onClick={onDelete}>
              Yes, delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
