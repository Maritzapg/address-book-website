import { FC } from 'react'

/**
 * App title
 * @returns Plain component with the tittle of the app
 */
export const Header: FC = () => {
  return (
    <nav className='navbar bg-dark bg-body-tertiary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <div className='navbar-brand'>Address Book</div>
      </div>
    </nav>
  )
}
