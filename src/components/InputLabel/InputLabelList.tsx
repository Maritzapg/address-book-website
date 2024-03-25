import { FC } from 'react'
import { Button } from '../button/Button'
import { InputLabel, InputLabelTemplate } from './InputLabel'

type Props = {
  type: string
  records: InputLabelTemplate[]
  onDelete: (index: number) => void
  onChangeLabel: (label: string, index: number) => void
  onChangeValue: (value: string, index: number) => void
  onAddNew: () => void
}

export const InputLabelList: FC<Props> = ({ type, records, onDelete, onChangeLabel, onChangeValue, onAddNew }) => {
  const renderList = () => {
    return records.map((record, index) => {
      return (
        <InputLabel
          key={index}
          label={record.label}
          value={record[Object.keys(record)[1] as keyof InputLabelTemplate]}
          onDelete={() => onDelete(index)}
          onChangeLabel={(label: string) => onChangeLabel(label, index)}
          onChangeValue={(value: string) => onChangeValue(value, index)}
        />
      )
    })
  }

  return (
    <>
      {records && records.length > 0 && renderList()}
      <div className='spacing d-flex flex-row-reverse'>
        <Button text={`Add ${type}`} onClick={onAddNew} />
      </div>
    </>
  )
}
