import React, { Component } from 'react'
import TextCell from '../Cells/TextCell'
import UserCell from '../Cells/UserCell'
import LinkCell from '../Cells/LinkCell'
import TruncatedTextCell from '../Cells/TruncatedTextCell'
import ListCell from '../Cells/ListCell'
import { Table, Column, Cell } from 'fixed-data-table'
import './HomeView.scss'
class HomeView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      columnWidths: {
        number: 100,
        title: 300,
        labels: 150,
        user: 174,
        summary: 300
      }
    };
    this.onColumnResizeEndCallback = this.onColumnResizeEndCallback.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // set columns to fill available width
    const width = nextProps.width
    if (width && width > 0) {
      const colWidth = width * 0.3
      const widths = Object.assign({}, this.state.columnWidths,
      { title: colWidth, summary: colWidth })
      this.setState({
        columnWidths: widths
      })
    }
  }

  onColumnResizeEndCallback (newColumnWidth, columnKey) {
    this.setState(({ columnWidths }) => ({
      columnWidths: {
        ...columnWidths,
        [columnKey]: newColumnWidth
      }
    }))
  }

  render () {
    const { rows, height, width } = this.props
    return (
      <div className='tableContainer'>
        <Table
          rowsCount={rows.length}
          maxHeight={height}
          width={width}
          rowHeight={80}
          headerHeight={50}
          isColumnResizing={false}
          onColumnResizeEndCallback={this.onColumnResizeEndCallback}>
          <Column
            columnKey={'number'}
            header={<Cell>{'Number'}</Cell>}
            cell={<LinkCell data={rows} col='number' />}
            align={'center'}
            width={this.state.columnWidths.number}
          />
          <Column
            columnKey={'title'}
            header={<Cell>{'Title'}</Cell>}
            cell={<TextCell data={rows} col='title' />}
            fixed={false}
            width={this.state.columnWidths.title}
            isResizable
            align={'left'}
          />
          <Column
            columnKey={'labels'}
            header={<Cell>{'Labels'}</Cell>}
            cell={<ListCell data={rows} col='labels' child='name' />}
            width={this.state.columnWidths.labels}
            isResizable
          />
          <Column
            columnKey={'user'}
            header={<Cell>{'User'}</Cell>}
            cell={<UserCell data={rows} />}
            width={this.state.columnWidths.user}
            isResizable
          />
          <Column
            columnKey={'summary'}
            header={<Cell>{'Summary'}</Cell>}
            cell={<TruncatedTextCell data={rows} col='body' />}
            isResizable
            width={this.state.columnWidths.summary}
          />
        </Table>
      </div>
    )
  }

}

export default HomeView
