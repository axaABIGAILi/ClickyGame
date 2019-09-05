import React from 'react';

const Header = props => {
    return <div className="navbar">
        <ul>
          <li>Clicky Game</li>
          <li>{props.phrase}</li>
          <li>Score: <span id="score">{props.score}</span>| Top Score: <span id="topscore">{props.topscore}</span></li>
        </ul>
      </div>
}

export default Header;