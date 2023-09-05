import React, { useState } from 'react';
import Timer from '../components/Timer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Words } from '../components/Words';
import "./pages.css";
import { Navigate } from 'react-router-dom';

//location where the game is being player
//has the timer, score, and instructions, rounds

const GameSpace = (props) => {
  //Values pulled from Settings*****************
  //help on useLocation and how to pass state via Navigate element: https://stackoverflow.com/questions/72896252/react-router-navigate-from-one-screen-to-another-does-not-pass-state-paramete
  //https://dev.to/thatfemicode/passing-data-states-through-react-router-8dh#:~:text=Data%20known%20as%20state%20can,retrieved%20via%20the%20useLocation%20hook.

  let players = props.players;
  let teams = props.teams;
  let numWords = props.numWords;
  let inactive = props.inactive;
  const [randomWord, setRandomWord] = useState("");
  const [wordsLeft, setWordsLeft] = useState(numWords);
  const [currentRound, setCurrentRound] = useState(1);
  const [continueGame, setContinueGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const randWords = Words;

  const [showPlayer1Score, setShowPlayer1Score] = useState(0);
  const [showPlayer2Score, setShowPlayer2Score] = useState(0);
  const [showPlayer3Score, setShowPlayer3Score] = useState(0);
  const [showPlayer4Score, setShowPlayer4Score] = useState(0);
  const [showPlayer5Score, setShowPlayer5Score] = useState(0);
  const [showPlayer6Score, setShowPlayer6Score] = useState(0);


  const handleOnClick = () => {
    let randIndex = Math.floor(Math.random() * randWords.length);
    setRandomWord(prvword => prvword = randWords[randIndex]);
    console.log(randIndex);
  };

  //reset button and setup new game button
  const handleResetOrContinueGame = () => {
    if (endGame) {
      //navigate back to the Settings Page
      setEndGame(false);
      return(<Navigate to='/Settings'/>);
    }

    if (continueGame){
      //increment rounds, set words left back to numWords, setContinueGame false
      setCurrentRound(prvRound=>prvRound+=1);
      setWordsLeft(numWords);
      setContinueGame(false);
    }
  };



  //array to hold scores per player
  //if database enabled allows for update of player scores if name matches on in database
  let scores = [
    {
      name: "Player 1",
      score: showPlayer1Score
    },
    {
      name: "Player 2",
      score: showPlayer2Score
    },
    {
      name: "Player 3",
      score: showPlayer3Score
    },
    {
      name: "Player 4",
      score: showPlayer4Score
    },
    {
      name: "Player 5",
      score: showPlayer5Score
    },
    {
      name: "Player 6",
      score: showPlayer6Score
    },

  ];




  return (
    
    <div>
      <Header />
      <h2>Welcome to the Game Space</h2>

      <div className='gameContents'>
        <h3>Number of Players: {players}</h3>
        <h3>Number of Teams: {teams}</h3>
        {teams > 0 && <h3>Current Team: </h3>}
        {teams > 0 && <h3>Number of Players: {players}</h3>}
        {players > 1 && teams === 0 && <h3>Current Player: </h3>}
        <h3>Round: {currentRound}</h3>
        {wordsLeft<=0&&<h2>End of Round {currentRound} reached! Check final scores to see the Winner!</h2>}
        <Timer />
        {players >= 1 && <h3>Player {1} Score is:{showPlayer1Score}</h3>}
        {players >= 2 && <h3>Player {1} Score is:{showPlayer1Score}</h3>}
        {players >= 3 && <h3>Player {1} Score is:{showPlayer1Score}</h3>}
        {players >= 4 && <h3>Player {1} Score is:{showPlayer1Score}</h3>}
        {players >= 5 && <h3>Player {1} Score is:{showPlayer1Score}</h3>}
        {players >= 6 && <h3>Player {1} Score is:{showPlayer1Score}</h3>}
        <button onClick={() => handleOnClick()}>Random Word Generation</button>
        <div className="randWord"><h1>{randomWord}</h1></div>
    
        <form>
          {/**Button for resubmitting the form with the same settings, play another round, this increments rounds on the page */}
          <label htmlFor="endCurrent">Return to Settings Page to start a New Game:</label><br/>
          <button id="endCurrent" onClick={()=>{setEndGame(true); handleResetOrContinueGame()}}>End Game</button>

          {/**Button to return back to settings page*/}
          <label htmlFor="moreRounds">Start a New Round with the same settings:</label><br/>
          <button id="moreRounds" onClick={()=>{setContinueGame(true); handleResetOrContinueGame()}}>Increment Rounds</button>
        </form>

      </div>
      <Footer />


    </div>
  )
}

export default GameSpace;