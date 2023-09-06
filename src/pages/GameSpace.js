import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
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

  const AVAILPLAYERS = [
    PLAYER1,
    PLAYER2,
    PLAYER3,
    PLAYER4,
    PLAYER5,
    PLAYER6
  ];

  const AVAILTEAMS = [
    TEAM1, 
    TEAM2,
    TEAM3
  ];

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
  const [winningPlayer, setWinningPlayer] = useState({ players: "", score: "" });
  const [winningTeam, setWinningTeam] = useState({ teams: "", score: "" });
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

  };//startTimer


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
      
    }

  };

  //reset button and setup new game button
  const handleResetOrContinueGame = () => {

    if (continueGame) {
      //increment rounds, set words left back to numWords, setContinueGame false, reset back to current player/team
      setCurrentRound(prvRound => prvRound += 1);
      setRoundDone(false);
      setWinner(false);
      setWordsLeft(numWords);
      setContinueGame(false);
      setCurrentPlayer(PLAYER1);
      setCurrentTeam(TEAM1);
      setNextPlay(true);
      setClockTime(setTime);
    }
  };

  //handle gameplay for teams round and players round

  const handleTeamRound = (won) => {
    setClockTime(setTime);
    setTimerInUse(false);
    if (won) {

      if (currentTeam === TEAM1) {
        setShowTeam1Score(prvscore => prvscore + 1);
      }
      else if (currentTeam === TEAM2) {
        setShowTeam2Score(prvscore => prvscore + 1);
      }
      else if (currentTeam === TEAM3) {
        setShowTeam3Score(prvscore => prvscore + 1);
      }
    
    } else {

    }

    //handle ending the game and changing teams
    //if words left less than or equal to zero, handle switching teams, however, if final team then end game
    if (wordsLeft <= 0) {
      
      if (teams > 0) {
        if (currentTeam === TEAM1) {
          if (teams > 1) {
            setCurrentTeam(TEAM2);
            setWordsLeft(numWords);

          } else {
            setCurrentTeam("");
            setRoundDone(true);
            setWinner(true);
            handleWinningTeam();
            console.log("out of words");
            setRandomWord("Out of Words! Add Another Round or End Game!");
            return;
          }
          //make game continue to be playable
          setRoundDone(false);
        } else if (currentTeam === TEAM2) {
          if (teams > 2) {
            setCurrentTeam(TEAM3);
            setWordsLeft(numWords);
            setRoundDone(false);

          } else {
            setCurrentTeam("");
            setRoundDone(true);
            setWinner(true);
            handleWinningTeam();
            console.log("out of words");
            setRandomWord("Out of Words! Add Another Round or End Game!");
            return;
          }

        } else {
          setCurrentTeam("");
          setRoundDone(true);
          setWinner(true);
          handleWinningTeam();
          console.log("out of words");
          setRandomWord("Out of Words! Add Another Round or End Game!");
          return;
        }
      }
    }else{//if words greater than 0, then continue play for the current team
      setNextPlay(true);
      setClockTime(setTime);
      setTimerInUse(false);
    }
   
  };//handleTeamRound

  const handlePlayerRound = (won) => {
    setClockTime(setTime);
    setTimerInUse(false);
    if (won) {
      if (currentPlayer === PLAYER1) {
        setShowPlayer1Score(prvscore => prvscore + 1);


      }
      else if (currentPlayer === PLAYER2) {
        setShowPlayer2Score(prvscore => prvscore + 1);


      }
      else if (currentPlayer === PLAYER3) {
        setShowPlayer3Score(prvscore => prvscore + 1);


      }
      else if (currentPlayer === PLAYER4) {
        setShowPlayer4Score(prvscore => prvscore + 1);
      }
      else if (currentPlayer === PLAYER5) {
        setShowPlayer5Score(prvscore => prvscore + 1);
      }
      else if (currentPlayer === PLAYER6) {
        setShowPlayer6Score(prvscore => prvscore + 1);
      }

    } else {
      //do nothing
    }
    if(wordsLeft>0){
      //make game continue to be playable
      setNextPlay(true);
      setClockTime(setTime);
      setTimerInUse(false);
      if (currentPlayer === PLAYER1) {
        if (players > 1) {
          setCurrentPlayer(PLAYER2);
        }
  
  
        // setWordsLeft(numWords);
      } else if (currentPlayer === PLAYER2) {
        if (players > 2) {
          setCurrentPlayer(PLAYER3);
  
        } else {
          setCurrentPlayer(PLAYER1);
        }
        // setWordsLeft(numWords);
      } else if (currentPlayer === PLAYER3) {
        if (players > 3) {
          setCurrentPlayer(PLAYER4);
  
        } else {
          setCurrentPlayer(PLAYER1);
        }
        // setWordsLeft(numWords);
      } else if (currentPlayer === PLAYER4) {
        if (players > 4) {
          setCurrentPlayer(PLAYER5);
  
        } else {
          setCurrentPlayer(PLAYER1);
        }
        // setWordsLeft(numWords);
      } else if (currentPlayer === PLAYER5) {
        if (players > 5) {
          setCurrentPlayer(PLAYER6);
  
        } else {
          setCurrentPlayer(PLAYER1);
        }
        // setWordsLeft(numWords);
      }
    } else {
      setCurrentPlayer("");
      setRoundDone(true);
      setWinner(true);
      handleWinningPlayer();
      console.log("out of words");
      setRandomWord("Out of Words! Add Another Round or End Game!");
      return;
    }

  };//handlePlayerRound

  //to show the winning team/player
  const handleWinningPlayer = () => {
    if (roundDone && winner && teams <= 1) {
      let playersArray = [showPlayer1Score, showPlayer2Score, showPlayer3Score, showPlayer4Score, showPlayer5Score, showPlayer6Score];
      
      let winners = "";
      let max = playersArray[0];
      for (let index = 0; index < players; index++) {
        const element = playersArray[index];
        if(element>max){
          max=element;
        } 
      };


      for (let index = 0; index < players; index++) {
        const element = playersArray[index];
        if(element === max){
          winners += " " + AVAILPLAYERS[index];
        }
      };

      //setWinningPlayer
      setWinningPlayer({players: winners, score: max});

    }
  };

  const handleWinningTeam = () => {
    if (roundDone && winner && teams > 1) {
      let teamsArray = [showTeam1Score, showTeam2Score, showTeam3Score];
      
      let winners = "";
      let max = teamsArray[0];
      for (let index = 0; index < teams; index++) {
        const element = teamsArray[index];
        if(element>max){
          max=element;
        } 
      };


      for (let index = 0; index < teams; index++) {
        const element = teamsArray[index];
        if(element === max){
          winners += " " + AVAILTEAMS[index];
        }
      };

      //setWinningPlayer
      setWinningTeam({teams: winners, score: max});

    

    }

    if(roundDone && winner && teams === 1){
      setWinningTeam({teams: TEAM1, score: showTeam1Score});
    }

  };



  return (

    <div>
      <h1>Welcome to the Game Space</h1>
      <div className='gameContents'>
        <div className='flexbox'>
          <div>
            <h1>Round: {currentRound}</h1>
            {wordsLeft <= 0&&winner&& <h2>End of Round {currentRound} reached! Check final scores to see the Winner!</h2>}
            <br />

            {/**display of the winner */}
            {winner && teams > 0 && <div>
              <h2>The Winner out of a total of {currentRound} round(s) is: {winningTeam.teams} with a score of {winningTeam.score} out of {numWords * currentRound} total words</h2>
            </div>}
          
            {winner && teams === 0 && <div>
              <h2>The Winner out of a total of {currentRound} round(s) is: {winningPlayer.players} with a score of {winningPlayer.score} out of {numWords * currentRound} total words</h2>
            </div>}

            <h3>Number of Players: {players}</h3>
            <h3>Number of Teams: {teams}</h3>
            
            {teams >= 1 && <h3>Team 1 Score is: {showTeam1Score}</h3>}
            {teams >= 2 && <h3>Team 2 Score is: {showTeam2Score}</h3>}
            {teams >= 3 && <h3>Team 3 Score is: {showTeam3Score}</h3>}

            {players >= 1 && teams <= 0 && <h3>Player 1 Score is: {showPlayer1Score}</h3>}
            {players >= 2 && teams <= 0 && <h3>Player 2 Score is: {showPlayer2Score}</h3>}
            {players >= 3 && teams <= 0 && <h3>Player 3 Score is: {showPlayer3Score}</h3>}
            {players >= 4 && teams <= 0 && <h3>Player 4 Score is: {showPlayer4Score}</h3>}
            {players >= 5 && teams <= 0 && <h3>Player 5 Score is: {showPlayer5Score}</h3>}
            {players >= 6 && teams <= 0 && <h3>Player 6 Score is: {showPlayer6Score}</h3>}
          </div>
          <div>

          </div>
          <div className="randWord">
            <h1>{timerInUse ? randomWord : "WORD SPACE"}</h1>
            {console.log(nextPlay)}
            {!nextPlay && teams > 0 && <div><h2>Did {currentTeam} come up with a word in time?</h2>
              <button onClick={() => handleTeamRound(true)}>{!nextPlay?"Yes":"Show Score"}</button> {!nextPlay&&<button onClick={() => handleTeamRound(false)}>No</button>} </div>}

            {!nextPlay && teams === 0 && <div><h2>{wordsLeft>0?`Did ${currentPlayer} come up with a word in time?`:"Press button to Show Final Score"}</h2>
              <button onClick={() => handlePlayerRound(true)}>{wordsLeft>0?"Yes":"Show Score"}</button> {wordsLeft>0&&<button onClick={() => handlePlayerRound(false)}>No</button>}</div>}

          </div>
          {/* <button onClick={() => handleOnClick()}>Random Word Generation</button> */}
          <div>
            {teams > 0 && <h3>Current Team: {currentTeam}</h3>}
            {players > 1 && teams === 0 && <h3>Current Player: {currentPlayer} </h3>}

              {/**if the round is done hide the clock and prevent a new word and timer from being started */}
            <div className={roundDone?'hidden clock':'clock'}>
              <h1>Clock</h1>
              {/**call handleTime based on time provided, and display it */}
              <h1 className="timer">{(clockTime / 1000).toFixed() >= 0 ? (clockTime / 1000).toFixed() : 0}</h1>
              {!timerInUse && !roundDone && <button onClick={() => {
                setTimerInUse(true);
                startTimer();
              }}>START TIMER</button>}

              {/* <button onClick={() => resetTimer()}>Reset</button> */}
            </div>
             {/**Button to return back to settings page*/}
          {winner&&<><h3>Start a New Round with the Same Settings:</h3>
          <button id="moreRounds" onClick={() => { setContinueGame(true); handleResetOrContinueGame() }}>Increment Rounds</button></>}

          </div>
        </div>



        

         
        

      </div>
      <Footer />


    </div>
  )
}

export default GameSpace;