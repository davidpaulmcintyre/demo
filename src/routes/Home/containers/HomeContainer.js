import { connect } from 'react-redux'
import { getIssues } from '../../../store/issues'
import React, { Component, PropTypes } from 'react'
import HomeView from '../components/HomeView'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getIssues(1, 10);
  }
  render() {
    return (
      <HomeView rows={this.props.issues} height={500} width={900} />
    );
  }
}

HomeContainer.defaultProps = {
  issues: []
};

HomeContainer.propTypes = {
  issues: PropTypes.array
}

const mapDispatchToProps = {
  getIssues: (page, size) => getIssues(page, size)
}

function mapStateToProps(state) {
  return {
    issues: state.issues
  };
}

// const mapStateToProps = (state) => ({
//   counter : state.counter,
//   issues: state.issues
// })

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
