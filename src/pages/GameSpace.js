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

  //constants
  const TEAM1 = "Team 1";
  const TEAM2 = "Team 2";
  const TEAM3 = "Team 3";

  const PLAYER1 = "Player 1";
  const PLAYER2 = "Player 2";
  const PLAYER3 = "Player 3";
  const PLAYER4 = "Player 4";
  const PLAYER5 = "Player 5";
  const PLAYER6 = "Player 6";

  const [randomWord, setRandomWord] = useState("");
  const [wordsLeft, setWordsLeft] = useState(numWords);
  const [currentRound, setCurrentRound] = useState(1);
  const [continueGame, setContinueGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [roundDone, setRoundDone] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);
  const [currentTeam, setCurrentTeam] = useState(TEAM1);
  const [nextPlay, setNextPlay] = useState(true);
  //if winner is true, then winningPlayer or team is shown, else not shown
  const [winner, setWinner] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState({ player: "", score: "" });
  const [winningTeam, setWinningTeam] = useState({ team: "", score: "" });
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
        return (prvtime > 0 ? prvtime - 1000 : (prvtime = setTime, clearInterval(timer.current), setTimerInUse(false), setNextPlay(false)))
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
    let thereAreWordsLeft = true;
    //decrement wordsLeft by one, if there are none left, keep prvwordl=0
    if (thereAreWordsLeft) {
      setWordsLeft((prvwordl) => { return (prvwordl <= 0 ? (prvwordl = 0, !thereAreWordsLeft) : prvwordl -= 1) });
      let randIndex = Math.floor(Math.random() * randWords.length);
      setRandomWord(prvword => prvword = randWords[randIndex]);
      console.log(randIndex);
    } else {
      console.log("no more words to choose randomly in handleRandomWord");
      // if(teams>0){
      //   if(currentTeam===TEAM1 && teams>1){
      //     currentTeam(TEAM2);
      //     setWordsLeft(numWords);
      //   }else if(currentTeam===TEAM2 && teams>2){
      //     currentTeam(TEAM3);
      //     setWordsLeft(numWords);
      //   } else{
      //     console.log("out of words");
      //     setRandomWord("Out of Words! Add Another Round or End Game!");
      //   }
      // } else{
      // if (currentPlayer === PLAYER1 && players > 1) {
      //   currentPlayer(PLAYER2);
      //   setWordsLeft(numWords);
      // } else if (currentPlayer === PLAYER2 && players > 2) {
      //   currentTeam(PLAYER3);
      //   setWordsLeft(numWords);
      // } else if (currentPlayer === PLAYER3 && players > 3) {
      //   currentTeam(PLAYER4);
      //   setWordsLeft(numWords);
      // } else if (currentPlayer === PLAYER4 && players > 4) {
      //   currentTeam(PLAYER5);
      //   setWordsLeft(numWords);
      // } else if (currentPlayer === PLAYER5 && players > 5) {
      //   currentTeam(PLAYER6);
      //   setWordsLeft(numWords);
      // } else {
      //   console.log("out of words");
      //   setRandomWord("Out of Words! Add Another Round or End Game!");
      // }
      // }
    }

  };

  //reset button and setup new game button
  const handleResetOrContinueGame = () => {
    if (endGame) {
      //navigate back to the Settings Page
      setEndGame(false);
      return (<Navigate to='/Settings' />);
    }

    if (continueGame) {
      //increment rounds, set words left back to numWords, setContinueGame false, reset back to current player/team
      setCurrentRound(prvRound => prvRound += 1);
      setWordsLeft(numWords);
      setContinueGame(false);
      setCurrentPlayer("Player 1");
      setCurrentTeam("Team 1")
    }
  };

  //handle gameplay

  const handleTeamRound = (won) => {
    setClockTime(setTime);
      setTimerInUse(false);
    if (won) {
      
      if (currentTeam === TEAM1) {
        setShowTeam1Score(prvscore => prvscore += 1);
      }
      if (currentTeam === TEAM2) {
        setShowTeam2Score(prvscore => prvscore += 1);
      }
      if (currentTeam === TEAM3) {
        setShowTeam3Score(prvscore => prvscore += 1);
      }
      if (wordsLeft <= 0) {
        if (teams > 0) {
          if (currentTeam === TEAM1 && teams > 1) {
            currentTeam(TEAM2);
            setWordsLeft(numWords);
            //make game continue to be playable
            setRoundDone(false);
          } else if (currentTeam === TEAM2 && teams > 2) {
            currentTeam(TEAM3);
            setWordsLeft(numWords);
            //make game continue to be playable
            setRoundDone(false);
          } else {
            setRoundDone(true);
            console.log("out of words");
            setRandomWord("Out of Words! Add Another Round or End Game!");
          }
        }
      }

    } else {
      //make game continue to be playable
      setClockTime(setTime);
      setTimerInUse(false);
    }
  };

  const handlePlayerRound = (won) => {
    setClockTime(setTime);
    setTimerInUse(false);
    if (won) {
      if (currentPlayer === PLAYER1) {
        setShowPlayer1Score(prvscore=>prvscore+=1);
      }
      if (currentPlayer === PLAYER2) {
        setShowPlayer2Score(prvscore=>prvscore+=1);
      }
      if (currentPlayer === PLAYER3) {
        setShowPlayer3Score(prvscore=>prvscore+=1);
      }
      if (currentPlayer === PLAYER4) {
        setShowPlayer4Score(prvscore=>prvscore+=1);
      }
      if (currentPlayer === PLAYER5) {
        setShowPlayer5Score(prvscore=>prvscore+=1);
      }
      if (currentPlayer === PLAYER6) {
        setShowPlayer6Score(prvscore=>prvscore+=1);
      }
      if (wordsLeft <= 0) {
        if (currentPlayer === PLAYER1 && players > 1) {
          currentPlayer(PLAYER2);
          setWordsLeft(numWords);
        } else if (currentPlayer === PLAYER2 && players > 2) {
          currentTeam(PLAYER3);
          setWordsLeft(numWords);
        } else if (currentPlayer === PLAYER3 && players > 3) {
          currentTeam(PLAYER4);
          setWordsLeft(numWords);
        } else if (currentPlayer === PLAYER4 && players > 4) {
          currentTeam(PLAYER5);
          setWordsLeft(numWords);
        } else if (currentPlayer === PLAYER5 && players > 5) {
          currentTeam(PLAYER6);
          setWordsLeft(numWords);
        } else {
          setRoundDone(true);
          console.log("out of words");
          setRandomWord("Out of Words! Add Another Round or End Game!");
        }
      }

    } else {

    }


    //make game continue to be playable
    setNextPlay(true);
   

  };

  const handleWinningPlayer = () => {
    if (roundDone && teams <= 1) {

    }
  }

  const handleWinningTeam = () => {
    if (roundDone && teams > 1) {

    }

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

            {/**display of the winner */}
            {winner && teams > 1 && <div>
              <h2>The Winner out of a total of {currentRound} round(s) is: {winningTeam.team} with a score of {winningTeam.score} out of {numWords * currentRound} total words</h2>
            </div>}
            {winner && teams === 1 && <div>
              <h2>The high score out of {currentRound} round(s) is: {winningTeam.score} out of {numWords * currentRound} total words</h2>
            </div>}
            {winner && teams === 0 && <div>
              <h2>The Winner out of a total of {currentRound} round(s) is: {winningPlayer.player} with a score of {winningPlayer.score} out of {numWords * currentRound} total words</h2>
            </div>}

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
            <p>Display</p><h1>{timerInUse ? randomWord : "WORD SPACE"}</h1>
            {console.log(nextPlay)}
            {!nextPlay && teams > 0 && <div><h2>Did {currentTeam} come up with a word in time?</h2>
              <button onClick={() => handleTeamRound(true)}>Yes</button> <button onClick={() => handleTeamRound(false)}>No</button> </div>}

            {!nextPlay && teams === 0 && <div><h2>Did {currentPlayer} come up with a word in time?</h2>
              <button onClick={() => handlePlayerRound(true)}>Yes</button> <button onClick={() => handlePlayerRound(false)}>No</button> </div>}

          </div>
          {/* <button onClick={() => handleOnClick()}>Random Word Generation</button> */}
          <div>
            {teams > 0 && <h3>Current Team: {currentTeam}</h3>}
            {players > 1 && teams === 0 && <h3>Current Player: {currentPlayer} </h3>}

            <div className='clock'>
              <h1>Clock</h1>
              {/**call handleTime based on time provided, and display it */}
              <h1 className="timer">{(clockTime / 1000).toFixed()>=0?(clockTime / 1000).toFixed():0}</h1>
              {!timerInUse && <button onClick={() => {
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