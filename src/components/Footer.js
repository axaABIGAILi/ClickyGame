import React from 'react';

const Footer = props => {
    return (
      <footer className="page-footer">
        <img src={props.logo}></img><h4>Smash Clicker!</h4>
      </footer>
    );
  }

export default Footer;