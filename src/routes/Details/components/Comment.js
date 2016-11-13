import React from 'react'
import FormatLinks from '../../../components/FormatLinks/formatLinks'

const Comment = (props) => {
  const comment = props.comment || {};
  const body = comment.body;
  const user = comment.user || {};
  // replace @usernames in text block with hyperlink
  return (
    <div>
      <div className='containerHeader'>
        <div className='containerBorder'>
          <a className='username' href={user.html_url}>{user.login}</a>
        </div>
      </div>
      <div className='containerBorder'>
        <FormatLinks text={body} />
      </div>
    </div>
  )
}

export default Comment
