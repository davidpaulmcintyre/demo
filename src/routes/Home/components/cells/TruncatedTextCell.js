import React from 'react'
import { Cell } from 'fixed-data-table'
import GetUserLink from '../../../../containers/GetUserLink'
// todo:  set maxlength as input param

// truncate text to 140, but break on full word
const truncateText = (text) => {
  const maxLength = 140;
  if (text.length > maxLength) {
    let strShort = text.substring(0, maxLength);
    const lastWordStart = strShort.lastIndexOf(' ');
    const lastWordEnd = text.indexOf(' ', maxLength);
    if (lastWordEnd > maxLength + 1) {
      strShort = strShort.substring(0, lastWordStart);
    }
    return strShort.concat('...');
  }
  return text
}
const TruncatedTextCell = ({ rowIndex, data, col, ...props }) => {
  const strLong = data[rowIndex][col];
  const strShort = truncateText(strLong);
  return (
    <Cell {...props}>
      <GetUserLink text={strShort} />
    </Cell>
  )
}

export default TruncatedTextCell
