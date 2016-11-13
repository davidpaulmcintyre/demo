import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import FormatLinks from '../components/FormatLinks/formatLinks'

// this component searches a string for @usernames, 
// then replaces the username with a hyperlink to their github page
class GetUserLink extends Component {

  render () {
    return (
      <div>
        <FormatLinks text={this.props.text} />
      </div>
    )
  }
}

GetUserLink.defaultProps = {
  text: ''
}

GetUserLink.propTypes = {
  text: PropTypes.string
}

export default GetUserLink