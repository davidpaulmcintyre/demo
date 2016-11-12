import React, { Component } from 'react'
import './Paginator.scss'

class Paginator extends Component {

  render () {
    const disabling = this.props.disabling
    return (
      <div>
        <button className='buttonNav' onClick={this.props.first} disabled={disabling.first}>{'<<'}</button>
        <button className='buttonNav' onClick={this.props.back} disabled={disabling.back}>{'<'}</button>
        <span className='pageIndex'>{this.props.currentPage}</span>
        <button className='buttonNav' onClick={this.props.next} disabled={disabling.next}>{'>'}</button>
        <button className='buttonNav' onClick={this.props.last} disabled={disabling.last}>{'>>'}</button>
      </div>
    )
  }
}

Paginator.propTypes = {
  next: React.PropTypes.func.isRequired,
  back: React.PropTypes.func.isRequired,
  first: React.PropTypes.func.isRequired,
  last: React.PropTypes.func.isRequired,
  currentPage: React.PropTypes.number,
  disabling: React.PropTypes.object
}

Paginator.defaultProps = {
  currentPage: 0,
  disabling: {}
}

export default Paginator
