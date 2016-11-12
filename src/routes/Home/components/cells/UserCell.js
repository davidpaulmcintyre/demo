import React from 'react'
import { Cell } from 'fixed-data-table'

const UserCell = ({ rowIndex, data, ...props }) => (
  <Cell {...props}>
    <div>
      <img src={data[rowIndex]['user']['avatar_url']} className='imgAvatar' />
      <div className='cellUsername'>
        {data[rowIndex]['user']['login']}
      </div>
    </div>

  </Cell>
)

export default UserCell
