import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
// var html = require('react-escape-html');
// import html from 'react-escape-html'
// this component searches a string for @usernames, 
// then replaces the username with a hyperlink to their github page
class GetUserLink extends Component {

  parse (text) {
    // todo: check that @username doesnt end w/ ". , ! ;"
    // find @usernames within a string
    let positions = [0];
    let start = 0;
    let end = 0;
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
          // this string starts w/ a username, so split it into a <a/> 
          // and a <span>
          const usernameEnd = txtSegment.indexOf(' ');
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
      return components;
    } else {
      return text;
    }



    // if (usernames && usernames.length > 0) {
    //   usernames.forEach(username => {
    //     // find url that corresponds to username, show it in link
    //     const usernameFormatted = `@${username}`;
    //     const strUrl = `https://github.com/${username}`;
    //     const strLink = `<a class="username" href="${strUrl}">${usernameFormatted}</a>`;
    //     strText = strText.replace(usernameFormatted, strLink);
    //   })
      // this.setState({
      //   formattedText: strText
    //   // })
    // }
    
  }

  // todo:  move parse into static method
  render () {
    const html = this.parse(this.props.text);
    return (
      <div>
        {html}
      </div>
    )
    // var tag = '<script>';
    // var htmlSafe = html`This is a <b>dangerous</b> HTML tag: ${tag}!`;
    // var safeReactElement = <div dangerouslySetInnerHTML={safeHTMLString} />;

    // const strHtml = this.state.formattedText;
    // const htmlSafe = html`${strHtml}`;
    // return <div dangerouslySetInnerHTML={{ __html: strHtml }} />
  }
}

GetUserLink.defaultProps = {
  text: ''
}

GetUserLink.propTypes = {
  text: PropTypes.string
}

export default GetUserLink