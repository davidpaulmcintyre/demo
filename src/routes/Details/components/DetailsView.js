import React, { Component } from 'react'
import { Link } from 'react-router'
import Label from '../../../components/Label'
import Comment from './Comment'
import './DetailsView.scss'

class DetailsView extends Component {

  render () {
    const issue = this.props.issue
    const labels = issue.labels || []
    const user = issue.user || {}
    const comments = this.props.comments || [];
    return (
      <div>
        <div className='title'>{issue.title}
          <span className='number'> #{issue.number}</span>
        </div>
        <div>
          <Link to='/'>{'Back to List'}</Link>
        </div>
        <div>
          <Label className={'containerLarge'}>{issue.state}</Label>
          <ul className='listLabels'>
            {labels.map((label, index) =>
              <li key={index} className='itemLabel'><Label className={'containerLarge'}>{label.name}</Label></li>
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
            {comments.map((comment, index) =>
              <li key={index}><Comment comment={comment} /></li>
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
