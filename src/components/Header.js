import React from 'react';

const Header = props => {

  const navStyle = {
    backgroundColor: 'lightgray',
    top: '0',
    margin: '0 auto'
  }

    return <nav className="navbar navbar-default" style={navStyle}>
        <ul className="navbar">
          <li className="navbar">Smash Clicky Game!</li>
          <li className="navbar"><b>{props.phrase}</b></li>
          <li className="navbar">Score: <span id="score">{props.score}</span> | Top Score: <span id="topscore">{props.topscore}</span></li>
        </ul>
      </nav>
}

export default Header;