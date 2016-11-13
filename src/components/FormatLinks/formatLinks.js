import React from 'react'

// check that @username doesnt end w/ ". , ! ;"
const findEndOfUsername = (segment) => {
  const usernameEnd = segment.indexOf(' ');
  const lastChar = segment.slice(usernameEnd - 1, usernameEnd);
  const hasInvalidChar = [',', '.', ';', '!', '/'].indexOf(lastChar) > -1;
  return hasInvalidChar ? usernameEnd - 1 : usernameEnd;
}

const FormatLinks = ({ text }) => {
  // find @usernames within a string
  if (!text || text.length === 0) {
    return <div/>;
  }
  let positions = [0];
  let start = 0;
  while (start > -1) {
    const positionAmpersand = text.indexOf('@', start);
    if (positionAmpersand >= 0) {
      positions.push(positionAmpersand);
      start = positionAmpersand + 1;
    } else {
      start = -1;
    }
  }
  const length = positions.length;
  if (length > 1) {
    const components = [];
    for (let i = 0; i < length; i++) {
      const start = positions[i];
      const stop = positions[i + 1] || text.length;
      const txtSegment = text.substring(start, stop)
      if (txtSegment.startsWith('@')) {
        const usernameEnd = findEndOfUsername(txtSegment);
        const usernameAt = txtSegment.slice(0, usernameEnd);
        const username = usernameAt.replace('@', '');
        const remainder = txtSegment.slice(usernameEnd);
        const strUrl = `https://github.com/${username}`;
        const linkUser = (<a key={start} className='username' href={strUrl}>{usernameAt}</a>);
        components.push(linkUser);
        if (remainder.length > 0) {
          components.push(<span key={stop + 1}>{remainder}</span>);
        }
      } else {
        components.push(<span key={start}>{txtSegment}</span>)
      }
    }
    return <div>{components}</div>;
  } else {
    return <div>{text}</div>;
  }
}

FormatLinks.defaultProps = {
  text: ''
}

export default FormatLinks
