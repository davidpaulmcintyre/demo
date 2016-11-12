import React from 'react'
import { Link } from 'react-router'
import { Cell } from 'fixed-data-table'

const LinkCell = ({ rowIndex, data, col, ...props }) => {
  const link = data[rowIndex][col]
  return (
    <Cell {...props}>
      <Link to={`/${link}`}>{data[rowIndex][col]}</Link>
    </Cell>
  )
}
// `/${data[rowIndex][col]}`
export default LinkCell
