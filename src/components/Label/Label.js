import React from 'react'
import './Label.scss'
const BLACK = '#000'
const WHITE = '#FFF'
export const Label = ({ children, className }) => {
  // set color based on status
  let bgColor
  let color
  const status = children
  switch (status) {
    case 'open':
      bgColor = '#6cc644'
      color = WHITE
      break
    case 'closed':
      bgColor = '#bd2c00'
      color = WHITE
      break
    case 'bug':
      bgColor = '#ee0701'
      color = WHITE
      break
    case 'enhancement':
      bgColor = '#84b6eb'
      color = BLACK
      break
    case 'actionpack':
      bgColor = 'yellow'
      color = 'gray'
      break
    case 'duplicate':
    case 'invalid':
      bgColor = 'lightgray'
      color = BLACK
      break
    case 'activesupport':
      bgColor = 'orange'
      color = BLACK
      break
    case 'needs feedback':
    case 'needs work':
      bgColor = 'lightgray'
      color = BLACK
      break
    case 'activejob':
    case 'activerecord':
      bgColor = 'purple'
      color = WHITE
      break
    default:
      bgColor = '#84b6eb'
      color = BLACK
  }
  const styleName = className
  return (
    <div className={styleName}
      style={{ backgroundColor: bgColor, color: color }}>
      {children}
    </div>
  )
}

Label.propTypes = {
  className: React.PropTypes.string
}

Label.defaultProps = {
  className: 'containerSmall'
}

export default Label
