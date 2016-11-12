import { connect } from 'react-redux'
import { getComments, removeComments } from '../../../store/issues'
import React, { Component, PropTypes } from 'react'
import Dimensions from 'react-dimensions'
import DetailsView from '../components/DetailsView'

class DetailsContainer extends Component {

  componentDidMount () {
    const id = this.props.issue.number
    if (id) {
      this.props.getComments(id)
    }
  }

  componentWillUnmount () {
    this.props.removeComments()
  }

  render () {
    const { issue } = this.props
    return (
      <div>
        <DetailsView issue={issue} comments={this.props.comments} />
      </div>
    )
  }
}

DetailsContainer.defaultProps = {
  issue: {}
}

DetailsContainer.propTypes = {
  issue: PropTypes.object
}

function mapStateToProps (state, ownProps) {
  let issue = {}
  let id
  if (ownProps.params.id) {
    id = ownProps.params.id
    issue = state.issues.issues.find(issue => issue.number.toString() === id)
  }
  return {
    issue,
    comments: state.issues.comments
  }
}

const mapDispatchToProps = {
  getComments: (id) => getComments(id),
  removeComments: () => removeComments()
}

export default connect(mapStateToProps, mapDispatchToProps)(Dimensions()(DetailsContainer))
