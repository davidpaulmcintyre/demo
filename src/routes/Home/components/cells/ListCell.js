import React from 'react'
import { Cell } from 'fixed-data-table'
import Label from '../../../../components/Label'

const ListCell = ({ rowIndex, data, col, child, ...props }) => {
  const list = data[rowIndex][col] || []
  const names = list.map(item => item[child])
  return (
    <Cell {...props}>
      {names.map((name, index) =>
        <Label key={index} className={'containerSmall'}>{name}</Label>
      )}
    </Cell>
  )
}

export default ListCell
