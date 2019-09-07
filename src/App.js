import React from 'react';
import smashBall from './SmashBall.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Images from './components/imageCard';
import characters from './cardlist.json';
import './App.css';

// create App as a class to make it more updateable
class App extends React.Component {

  constructor(props) {
    super(props);
  // setting state
  // moved variables into a state object for updating
    this.state = {
      score: 0,
      topscore: 0,
      clickedCards: [],
      cardsTotal: 12,
      headerPhrases: ['Click to start the game!', 'Good guess, keep going!', 'Wrong guess. Start over!'],
      truePhrase: 'Click to start!',
      characters
    }
  }
  // card shuffling function
  shuffleCards = arr =>{
    for (let i=0; i < arr.length; i++) {
      let j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j],arr[i]];
    }

    return arr; // calvins note we have to return the shuffled array
  }
  // function to reset the isClicked value in each part of the array
  resetData = () => {
    this.state.characters.map((characters)=>{
      characters.isClicked=false;
      return characters;
    })
  }

  // if a card is in the clickedCards array, clicking it will trigger the headerPhrases[2] to display etc.

  // function for image click event / score tally functionality
  imageClick = (characterIndex) => {
    //console.log("yay imageClick is running my function and user clicked on this image index " + characterIndex);
    // check if the image is clicked
    if (this.state.characters[characterIndex].isClicked === true) {
      // display the loss header phrase
      this.setState({truePhrase: this.state.headerPhrases[2]});
      // if they got a new high score, swap out old top for new score
      if (this.state.score > this.state.topscore) {
        this.setState({topscore: this.state.score});
      }
      // reseting score to 0
      this.setState({score: 0})
      // run shuffle function
      let newShuffledCards = this.shuffleCards(this.state.characters);
      // update the state characters array with the  newly shuffled cards
      this.setState( {characters: [...newShuffledCards]});
      // set lostGame to true to trigger animation
      let lostGame = true;
      // reset the isClicked
      this.resetData();
    } else {
        let lostGame = false;
        // temporary variable to store array
        let tempCharacters = [...this.state.characters];
        // set the isClicked value to true
        tempCharacters[characterIndex].isClicked = true;
        this.setState({characters: [...tempCharacters] });
        // shuffle the cards
        let newShuffledCards = this.shuffleCards(tempCharacters);
        this.setState( {characters: [...newShuffledCards]});
        // increase score by 1
        this.setState((state)=> ({score: state.score += 1}));
        // display the good guess phrase
        this.setState({truePhrase: this.state.headerPhrases[1]});
    }
   }

   render() {
    return (
      // render components in html
      <div className="App">
        <Header phrase={this.state.truePhrase} score={this.state.score} topscore={this.state.topscore} />
        <Jumbotron />
        <div className="container">
        {
          this.state.characters.map( (char, characterIndex) => (
            <Images lostGame={this.lostGame} key={char.id} imgURL={char.image} name={char.name} imageClick={this.imageClick} characterIndex={characterIndex} />
          ))
        }
       </div>
      <Footer logo={smashBall} />
      </div>
    );
   }
}

export default App;
