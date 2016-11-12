import React from 'react'
import {Cell} from 'fixed-data-table';

const TruncatedTextCell = ({rowIndex, data, col, ...props}) => {
  const strLong = data[rowIndex][col];
  const strShort = strLong.substring(0, 140);
  const strFormatted = `${strShort}...`;
  return (
    <Cell {...props}>
      {strFormatted}
    </Cell>
  )
  
}

export default TruncatedTextCell;