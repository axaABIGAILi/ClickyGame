import React from 'react';
import smashBall from './components/images/SmashBall.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Images from './components/imageCard';
//import characters from './cardlist.json';
import './App.css';

function App() {
  // declare our variables needed for game logic
  // current score starts at 0
  var score = 0;
  // top score starts at 0
  var topscore = 0;
  // empty array to store the clicked cards
  var clickedCards = [];
  // total cards # that users strive for
  const cardsTotal = 12;


  return (
    // create image grid and app logic in app.js
    <div className="App">
      <Header score={this.score} topscore={this.topscore} />
      <Jumbotron />
      <div className="container">
      <Images />
      </div>
    <Footer logo={smashBall} />
    </div>
  );
}

export default App;
