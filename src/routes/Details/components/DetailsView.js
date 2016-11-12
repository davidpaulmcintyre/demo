import React, { Component } from 'react'
import Label from '../../../components/Label'
import Comment from './Comment'
import './DetailsView.scss'

class DetailsView extends Component {

  render () {
    const issue = this.props.issue
    const labels = issue.labels || []
    const user = issue.user || {}
    return (
      <div>
        <div className='title'>{issue.title}
          <span className='number'>#{issue.number}</span>
        </div>
        <Label className={'containerLarge'}>{issue.state}</Label>
        <div className='labels'>
          <ul>
            {labels.map((label, index) =>
              <li key={index}><Label className={'containerLarge'}>{label.name}</Label></li>
            )}
          </ul>
        </div>
        <div className='containerHeader'>
          <div className='containerBorder'>
            <span className='reportedBy'>{'Issue reported by '}</span>
            <a className='linkReporter' href={user.html_url}>{user.login}</a>
            <img src={user.avatar_url} className='imgAvatar' />
          </div>
        </div>
        <div className='containerBorder'>
          {issue.body}
        </div>
        <div className='comments'>
          <ul>
            {this.props.comments.map((comment, index) =>
              <li key={index}><Comment body={issue.body} user={user} /></li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

DetailsView.defaultProps = {
  comments: []
}

export default DetailsView
