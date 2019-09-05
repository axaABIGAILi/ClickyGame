import React from 'react';

const Header = (props) => {
    return <div className="navbar">
        <ul>
          <li>Clicky Game</li>
          <li>{this.props.phrase}</li>
          <li>Score: <span id="score">{this.props.score}</span>| Top Score: <span id="topscore">{this.props.topscore}</span></li>
        </ul>
      </div>
}

export default Header;