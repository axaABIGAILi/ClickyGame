import React from 'react';

var Header = props => {
    <div className="navbar">
        <ul>
          <li>Clicky Game</li>
          <li>Start the game!</li>
          <li>Score: <span id="score">{this.props.score}</span>| Top Score: <span id="topscore">{this.props.topscore}</span></li>
        </ul>
      </div>
}

export default Header;