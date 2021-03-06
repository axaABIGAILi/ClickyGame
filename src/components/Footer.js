import React from 'react';

const Footer = props => {
    let logoStyle= {
      width: '45px',
      height: 'auto',
      float: 'left',
      margin: '5px 5px 5px 5px'
    }
    let footerStyle = {
      margin: '75px 0 0 0',
      backgroundColor: 'lightgray',
    }
    return (
      <footer className="page-footer navbar-fixed-bottom" style={footerStyle}>
        <img src={props.logo} style={logoStyle} alt="logo"></img><h4>Smash Clicker!</h4>
      </footer>
    );
  }

export default Footer;