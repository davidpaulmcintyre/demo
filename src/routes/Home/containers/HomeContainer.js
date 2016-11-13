import { connect } from 'react-redux'
import { getIssues } from '../../../store/issues'
import { setCurrentPage } from '../../../store/pagination'
import React, { Component, PropTypes } from 'react'
import Dimensions from 'react-dimensions'
const height = 1000
import HomeView from '../components/HomeView'
import Paginator from '../components/Paginator'

class HomeContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // T if disabled because button has disabled, not enabled, attribute
      navDisabled: {
        next: false,
        last: false,
        back: true,
        first: true
      }
    }
  }

  componentDidMount () {
    // todo: busy indicator
    this.fetch(this.props.currentPage)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.links) {
      const disabled = {
        next: (!nextProps.links.next),
        last: (!nextProps.links.last),
        back: (!nextProps.links.back),
        first: (!nextProps.links.first)
      }
      this.setState({
        navDisabled: disabled
      })
    }
  }

  fetch (page, url) {
    // todo:  make pagesize dynamic
    this.props.getIssues(url)
    this.props.setCurrentPage(page)
  }

  goForward () {
    const page = this.props.currentPage + 1
    this.fetch(page, this.props.links.next)
  }

  goBack () {
    const page = this.props.currentPage - 1
    this.fetch(page, this.props.links.back)
  }

  goToLastPage () {
    // parse url to find page count
    const strUrl = this.props.links.last
    let lastPage = this.props.currentPage
    const pageToken = 'page='
    const start = strUrl.indexOf(pageToken) + pageToken.length
    const stop = strUrl.indexOf('&')

    const page = strUrl.substring(start, stop)
    if (!isNaN(page)) {
      lastPage = Number(page)
    }
    this.fetch(lastPage, strUrl)
  }

  goToFirstPage () {
    const page = 1
    this.fetch(page, this.props.links.first)
  }

  render () {
    return (
      <div>
        <Paginator currentPage={this.props.currentPage}
          next={this.goForward.bind(this)}
          back={this.goBack.bind(this)}
          first={this.goToFirstPage.bind(this)}
          last={this.goToLastPage.bind(this)}
          disabling={this.state.navDisabled} />
        <HomeView rows={this.props.issues} height={height}
          width={this.props.containerWidth - 100} />
      </div>
    )
  }
}

HomeContainer.defaultProps = {
  issues: [],
  links: {},
  currentPage: 1
}

HomeContainer.propTypes = {
  issues: PropTypes.array,
  currentPage: PropTypes.number
}

const mapDispatchToProps = {
  getIssues: (page, size) => getIssues(page, size),
  setCurrentPage: (page) => setCurrentPage(page)
}

function mapStateToProps (state) {
  return {
    issues: state.issues.issues,
    currentPage: state.pagination.page,
    links: state.pagination.links
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dimensions()(HomeContainer))
