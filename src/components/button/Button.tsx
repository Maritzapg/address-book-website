import { FC } from 'react'

type Props = {
  onClick: () => void
  text: string
}

/**
 * Generic button component
 * @returns Reusable Button component with an onClick event and a name text
 */
export const Button: FC<Props> = ({ onClick, text }) => {
  return (
    <button type='button' className='btn btn-primary' onClick={onClick}>
      {text}
    </button>
  )
}
