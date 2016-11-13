import { connect } from 'react-redux'
import { getUserLink } from '../store/issues'
import React, { Component, PropTypes } from 'react'

class GetUserLink extends Component {
  constructor (props) {
    super(props);
    this.state = {
      usernames: [],
      formattedText: ''
    };
  }

  componentDidMount () {
    this.setState({
      formattedText: this.props.text
    })

    // find @usernames within a string
    let users = [];
    let strText = this.props.text;
    let start = 0;
    let end = 0;
    while (start > -1) {
      const positionAmpersand = strText.indexOf('@', start);
      if (positionAmpersand >= 0) {
        end = strText.indexOf(' ', positionAmpersand);
        const username = strText.substring(positionAmpersand + 1, end);
        users.push(username);
        start = end;
      } else {
        start = -1;
      }
    }
    users.forEach(name => {
      this.props.getUserLink(name);
    })
  }

  render () {
    return <div>{this.state.formattedText}</div>
  }
}

GetUserLink.defaultProps = {
  text: ''
}

GetUserLink.propTypes = {
  text: PropTypes.string
}

function mapStateToProps (state, ownProps) {
  return state
}

const mapDispatchToProps = {
  getUserLink: (id) => getUserLink(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(GetUserLink)
