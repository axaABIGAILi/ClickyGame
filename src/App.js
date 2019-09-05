import React from 'react';
import smashBall from './components/images/SmashBall.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Images from './components/imageCard';
//import characters from './cardlist.json';
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
      truePhrase: 'Click to start!'
    }
  }

  // if a card is in the clickedCards array, clicking it will trigger the headerPhrases[2] to display etc.

  // function for image click event / score tally functionality
  imageClick = event => {
    event.preventDefault();
    // check if the image is clicked
    if (this.state.isClicked) {
      // display the loss header phrase
      this.setState({truePhrase: this.state.headerPhrases[2]});
      // if they got a new high score, swap out old top for new score
      if (this.state.score > this.state.topscore) {
        this.setState({topscore: this.state.score});
      }
    } else {
      // switch isClicked to true
      this.setState({isClicked: true});
      // call function to shuffle cards
      // SHUFFLE FUNCTION HERE
      // increase score by 1
      this.setState((state)=> ({score: state.score += 1}));
      // display the good guess phrase
      this.setState({truePhrase: this.state.headerPhrases[1]});
    }
    // event.target = what was clicked
    // change data-attribute "isClicked" to "1" or true
   }

   render() {
    return (
      // render components in html
      <div className="App">
        <Header phrase={this.state.truePhrase} score={this.state.score} topscore={this.state.topscore} />
        <Jumbotron />
        <div className="container">
        <Images clickHandler={this.imageClick}/>
        </div>
      <Footer logo={smashBall} />
      </div>
    );
   }
}

export default App;
