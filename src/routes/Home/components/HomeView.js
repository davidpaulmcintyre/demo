import React from 'react'
import TextCell from './TextCell'
import UserCell from './UserCell'
import TruncatedTextCell from './TruncatedTextCell'
import ListCell from './ListCell'
import {Table, Column, Cell} from 'fixed-data-table';
import './HomeView.scss'

const HomeView = ({rows, height, width}) => (
  <div className='tableContainer'>
      <Table
    rowsCount={rows.length}
    maxHeight={height}
    width={width}
    rowHeight={25}
    headerHeight={50}>
    <Column
      header={<Cell>{'Number'}</Cell>}
      cell={<TextCell data={rows} col="number" />}
      fixed={true}
      width={100}
    />
    <Column
      header={<Cell>{'Title'}</Cell>}
      cell={<TextCell data={rows} col="title" />}
      fixed={false}
      width={300}
    />
    <Column
      header={<Cell>{'Labels'}</Cell>}
      cell={<ListCell data={rows} col="labels" child="name" />}
      fixed={false}
      width={300}
    />
    <Column
      header={<Cell>{'User'}</Cell>}
      cell={<UserCell data={rows} />}
      fixed={false}
      width={300}
    />
    <Column
      header={<Cell>{'Summary'}</Cell>}
      cell={<TruncatedTextCell data={rows} col="body" />}
      fixed={false}
      width={300}
    />
  </Table>
  </div>
)

export default HomeView
