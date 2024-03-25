import { FC } from 'react'

type Props = {
  onClick: () => void
  text: string
}

export const Button: FC<Props> = ({ onClick, text }) => {
  return (
    <button type='button' className='btn btn-primary' onClick={onClick}>
      {text}
    </button>
  )
}
