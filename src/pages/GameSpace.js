import React, { useState, useEffect, useRef } from 'react';
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
  let setTime = props.setTime;
  const [randomWord, setRandomWord] = useState("");
  const [wordsLeft, setWordsLeft] = useState(numWords);
  const [currentRound, setCurrentRound] = useState(1);
  const [continueGame, setContinueGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [roundDone, setRoundDone] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("Player 1");
  const [currentTeam, setCurrentTeam] = useState("Team 1");
  const randWords = Words;

  const [showTeam1Score, setShowTeam1Score] = useState(0);
  const [showTeam2Score, setShowTeam2Score] = useState(0);
  const [showTeam3Score, setShowTeam3Score] = useState(0);

  const [showPlayer1Score, setShowPlayer1Score] = useState(0);
  const [showPlayer2Score, setShowPlayer2Score] = useState(0);
  const [showPlayer3Score, setShowPlayer3Score] = useState(0);
  const [showPlayer4Score, setShowPlayer4Score] = useState(0);
  const [showPlayer5Score, setShowPlayer5Score] = useState(0);
  const [showPlayer6Score, setShowPlayer6Score] = useState(0);

  //timer
  const [clockTime, setClockTime] = useState(setTime);
  const [timerInUse, setTimerInUse] = useState(false);

  //**handle the decrement of time, take in time */

  const timer = useRef();
  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  //source of timer code: https://stackoverflow.com/questions/71172632/react-setinterval-and-usestate
  const startTimer = () => {
    const displayTime = function () {
      setClockTime(prvtime => {
        return (prvtime > 0 ? prvtime - 1000 : prvtime = 0 && clearInterval(timer.current) && setTimerInUse(false) &&setRoundDone(true))
      });
      //assist with clock not updateing with useState: https://stackoverflow.com/questions/73056009/react-setinterval-is-re-initialized-to-often
    };//displayTime
    if (clockTime > 0) {
      timer.current = setInterval(displayTime, 1000);
      handleRandomWord();//choose a random word

    } else {
      //just in case, reset the values
      clearInterval(timer.current);
      setClockTime(0);
      setTimerInUse(false);
    }


  }//handle time

  const resetTimer = () => {
    setClockTime(0);
    setTimerInUse(false);
    clearInterval(timer.current);
  }


  //game controlls 
  const handleRandomWord = () => {
    let randIndex = Math.floor(Math.random() * randWords.length);
    setRandomWord(prvword => prvword = randWords[randIndex]);
    console.log(randIndex);
  };

  //reset button and setup new game button
  const handleResetOrContinueGame = () => {
    if (endGame) {
      //navigate back to the Settings Page
      setEndGame(false);
      return (<Navigate to='/Settings' />);
    }

    if (continueGame) {
      //increment rounds, set words left back to numWords, setContinueGame false
      setCurrentRound(prvRound => prvRound += 1);
      setWordsLeft(numWords);
      setContinueGame(false);
    }
  };

  //handle gameplay

  const handleTeamRound = (won) => {

    //make game continue to be playable
    setRoundDone(false);

  }



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
        <div className='flexbox'>
          <div>
            <h1>Round: {currentRound}</h1>
            {wordsLeft <= 0 && <h2>End of Round {currentRound} reached! Check final scores to see the Winner!</h2>}
            <br />

            <h3>Number of Players: {players}</h3>
            <h3>Number of Teams: {teams}</h3>
            {teams > 0 && <h3>Number of Players: {players}</h3>}
            {/**only show players if teams is 0, otherwise show teams */}
            {teams === 1 && <h3>Player 1 Score is:{showPlayer1Score}</h3>}
            {teams === 2 && <h3>Player 2 Score is:{showPlayer1Score}</h3>}
            {teams === 3 && <h3>Player 3 Score is:{showPlayer1Score}</h3>}

            {players >= 1 && teams <= 0 && <h3>Player 1 Score is:{showPlayer1Score}</h3>}
            {players >= 2 && teams <= 0 && <h3>Player 2 Score is:{showPlayer1Score}</h3>}
            {players >= 3 && teams <= 0 && <h3>Player 3 Score is:{showPlayer1Score}</h3>}
            {players >= 4 && teams <= 0 && <h3>Player 4 Score is:{showPlayer1Score}</h3>}
            {players >= 5 && teams <= 0 && <h3>Player 5 Score is:{showPlayer1Score}</h3>}
            {players >= 6 && teams <= 0 && <h3>Player 6 Score is:{showPlayer1Score}</h3>}
          </div>
          <div>

          </div>
          <div className="randWord">
            <p>Display</p><h1>{timerInUse?randomWord:"WORD SPACE"}</h1>
            {roundDone&&teams>0&&<div><h2>Did {currentTeam} come up with a word in time?</h2>
           <button onClick={()=>handleTeamRound(true)}>Yes</button> <button onClick={()=>handleTeamRound(false)}>No</button> </div>}

          </div>
          {/* <button onClick={() => handleOnClick()}>Random Word Generation</button> */}
          <div>
            {teams > 0 && <h3>Current Team: {currentTeam}</h3>}
            {players > 1 && teams === 0 && <h3>Current Player: {currentPlayer} </h3>}

            <div className='clock'>
              <h1>Clock</h1>
              {/**call handleTime based on time provided, and display it */}
              <h1 className="timer">{(clockTime / 1000).toFixed()}</h1>
              {!roundDone&&<button onClick={() => {
                setTimerInUse(true);
                startTimer();
              }}>START TIMER</button>}
              {/* <button onClick={() => resetTimer()}>Reset</button> */}
            </div>

          </div>
        </div>



        <form>
          {/**Button for resubmitting the form with the same settings, play another round, this increments rounds on the page */}
          <label htmlFor="endCurrent">Return to Settings Page to start a New Game:</label><br />
          <button id="endCurrent" onClick={() => { setEndGame(true); handleResetOrContinueGame() }}>End Game/Full Reset Game</button><br />

          {/**Button to return back to settings page*/}
          <label htmlFor="moreRounds">Start a New Round with the same settings:</label><br />
          <button id="moreRounds" onClick={() => { setContinueGame(true); handleResetOrContinueGame() }}>Increment Rounds</button>
        </form>

      </div>
      <Footer />


    </div>
  )
}

export default GameSpace;