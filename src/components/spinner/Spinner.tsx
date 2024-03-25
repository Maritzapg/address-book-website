import { FC } from 'react'

/**
 * Signal to indicate to the user than an operation is in progress and must wait
 * @returns A plain component
 */
export const Spinner: FC = () => {
  return (
    <div className='text-center'>
      <div className='spinner-border' style={{ width: '3rem', height: '3rem' }} role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}
