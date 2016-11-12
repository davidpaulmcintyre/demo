import React from 'react'
import {Cell} from 'fixed-data-table';

const UserCell = ({rowIndex, data, ...props}) => (
  <Cell {...props}>
    <div>
      <img src={data[rowIndex]['user']['avatar_url']} />
      {data[rowIndex]['user']['login']}
    
    </div>

  </Cell>
);

export default UserCell;