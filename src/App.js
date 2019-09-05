import React from 'react';
import smashBall from './components/images/SmashBall.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import characters from './cardlist.json';
import './App.css';

function App() {
  // declare our variables needed for game logic
  var score = 0;
  var topscore = 0;

  return (
    // create image grid and app logic in app.js
    <div className="App">
      <Header score={this.score} topscore={this.topscore} />
      <Jumbotron />
      <header className="App-header">
        <img src={smashBall} className="App-logo" alt="logo" style="width: 15%"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <Footer />
    </div>
  );
}

export default App;
