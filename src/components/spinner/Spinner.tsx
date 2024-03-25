import { FC } from 'react'

export const Spinner: FC = () => {
  return (
    <div className='text-center'>
      <div className='spinner-border' style={{ width: '3rem', height: '3rem' }} role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}