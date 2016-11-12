import React from 'react'

const Comment = ({ user = {}, body }) => {
  return (
    <div>
      <div className='containerHeader'>
        <div className='containerBorder'>
          <a className='linkReporter' href={user.html_url}>{user.login}</a>
        </div>
      </div>
      <div className='containerBorder'>
        {body}
      </div>
    </div>
  )
}

export default Comment
