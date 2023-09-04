import React, { useState } from 'react';
import Score from '../components/Score';
import Timer from '../components/Timer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Rounds from '../components/Rounds';
import { Words } from '../components/Words';
import Nav from '../components/Nav';
import "./pages.css";
//location where the game is being player
//has the timer, score, and instructions, rounds

const GameSpace = () => {
  const [randomWord, setRandomWord] = useState("");
  const randWords = Words;

  const handleOnClick = () =>{
    let randIndex = Math.floor(Math.random()*randWords.length);
    setRandomWord(prvword => prvword=randWords[randIndex]);
    console.log(randIndex);
  };
//submit form to start the game
  const onHandleSubmit = () => {

  };

  //reset button and setup new game button
  const handleResetGame = (endGame) =>{
    setUpDone = false;//unhide the form and reset the game
    if(endGame === true){
      //then open back up the form and reset settings, 
    }
  }

  

  //Settings*****************
  //toggle to show or hid settings if ready to play
  let setUpDone = false;
  //hold number of rounds and when set, roundsChosen is true
  let rounds = 0;
  let roundsChosen = false;
  //constants for number of round choices
  const ROUNDNUM1 = 8;
  const ROUNDNUM2 = 10;
  const ROUNDNUM3 = 12;

  const teams = 0;//no players
  const teamsChosen = false;
  //play default alternates players, unless teams is chosen

  let players = 0;
  let playersChosen = false;

  //if database enabled and can save players, array allows for choosing saved players
  let savedPlayers =  [];
  let availableSavedPlayers = false;

//array to hold scores per player
//if database enabled allows for update of player scores if name matches on in database
  let scores = [
    {
      player0:"",
      score:""
    },
    {
      player1:"",
      score:""
    },
    {
      player2:"",
      score:""
    },
    {
      player3:"",
      score:""
    },
    {
      player4:"",
      score:""
    },
    {
      player5:"",
      score:""
    },
    
  ];

  
  return (
    <div>
      <Header/>
      <Nav gamespace={true}/>
      <div className='contents'>
        <Timer/>
        <Rounds round={2}/>
        <Score score={2}/>
        <button onClick={()=>handleOnClick()}>Random Word Generation</button>
        <div className="randWord">{randomWord}</div>
        {/* <Words/> */}
        {/* <Players/> */}
        
      </div>
      <Footer/>
      

    </div>
  )
}

export default GameSpace;