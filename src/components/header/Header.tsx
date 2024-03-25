import { FC } from 'react'

export const Header: FC = () => {
  return (
    <nav className='navbar bg-dark bg-body-tertiary' data-bs-theme='dark'>
      <div className='container-fluid'>
        <div className='navbar-brand'>Address Book</div>
      </div>
    </nav>
  )
}
