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
  const randWords = Words;
  const [randomWord, setRandomWord] = useState("");
  const handleOnClick = () =>{
    let randIndex = Math.floor(Math.random()*randWords.length);
    setRandomWord(prvword => prvword=randWords[randIndex]);
    console.log(randIndex);
  };
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