import { FC } from 'react'
import removeIcon from '../../assets/x-circle.svg'

export type InputLabelTemplate = {
  label: string
  value: string
}

type Props = InputLabelTemplate & {
  onDelete: () => void
  onChangeLabel: (label: string) => void
  onChangeValue: (value: string) => void
}

export const InputLabel: FC<Props> = ({ label, value, onDelete, onChangeLabel, onChangeValue }) => {
  return (
    <div className='d-flex justify-content-between' style={{ width: '100%' }}>
      <p className='col-sm-3'>
        <input
          type='text'
          className='form-control'
          id='recipient-name'
          placeholder='label'
          value={label}
          onChange={e => onChangeLabel(e.target.value)}
        />
      </p>
      <div className='col-sm-8'>
        <input
          type='text'
          className='form-control'
          id='recipient-name'
          placeholder='value'
          value={value}
          onChange={e => onChangeValue(e.target.value)}
        />
      </div>
      <div className='icon-link icon-link-hover'>
        <img src={removeIcon} alt='Bootstrap' width='22' height='22' onClick={onDelete} />
      </div>
    </div>
  )
}
