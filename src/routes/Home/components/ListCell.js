import React from 'react'
import {Cell} from 'fixed-data-table';

const ListCell = ({rowIndex, data, col, child, ...props}) => {
  const list = data[rowIndex][col];
  const names = list.map(item => item[child]).join(', ');
  return (
    <Cell {...props}>
      {names}
    </Cell>
  )
  
}

export default ListCell;