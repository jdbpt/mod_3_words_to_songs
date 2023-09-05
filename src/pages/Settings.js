import React, { useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import "./pages.css";
import GameSpace from './GameSpace';

//location where the game is being player
//has the timer, score, and instructions, rounds

const Settings = () => {
    const [chooseWords, setChooseWords] = useState(8);
    const [chooseTeams, setChooseTeams] = useState(0);
    const [choosePlayers, setChoosePlayers] = useState(1)
    const [setUpDone, setSetUpDone] = useState(false);
    const [playStarted, setPlayStarted] = useState(false);

    //code source: https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs
    const handleChooseWordsChange = (e) =>{
        setChooseWords(e.target.value);
    };

    const handleChooseTeamsChange = (e) => {
        setChooseTeams(e.target.value);
    };

    const handleChoosePlayersChange = (e) => {
        setChoosePlayers(e.target.value);
    };

  
    //submit form to start the game
    const onHandlePlay = () => {
        setSetUpDone(true);//hide the form and start the game
        setPlayStarted(true);//hide the play button
        
    };

  
       

    //understanding Navigate React element and state: https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically
    //https://reactrouter.com/en/main/components/navigate

    return (
        <div>
            <Header />
            <Nav settings={true} />
            <div className='contents'>
                <form className={setUpDone?"hidden":""} action="" method="">
                    {/* need info on how the form posts to server */}
                    <label htmlFor="numWords">Choose the number of Words per Round:</label>
                    <select name="numWords" value={chooseWords}  onChange={handleChooseWordsChange} id="numWords" required>
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={32}>32</option>
                    </select>

                    <label htmlFor="teams">Choose the number of Teams(teams work together to sing a song with the word):</label>
                    <select name="teams" value={chooseTeams} onChange={handleChooseTeamsChange} id="teams" required>
                        <option value={0}>Solo</option>
                        <option value={1}>One Team</option>
                        <option value={2}>Two Teams</option>
                        <option value={3}>Three Teams</option>
                    </select>

                    <label htmlFor="playersNum">Number of players (1-6):</label>
                    <input type="number" id="playersNum" name="playersNum" min={1} max={6} value={choosePlayers} required onChange={handleChoosePlayersChange} />


                    {/* <input list="playerNames" name="playerName" />
                    <datalist id="playerNames">
                        <option value="Player 1" />
                        <option value="player2" />
                        <option value="Player 3" />
                        <option value="Player 4" />
                        <option value="Player 5" />
                        <option value="Player 6" />
                    </datalist>
                    <button type='button' onClick={""}>Add Player Names</button> */}

                    <p>Else default player names are Player 1 through Player 6</p>
                    <input type='reset' value="Reset Form" />
                </form>
                <button className={playStarted?"hidden": ""} onClick={()=>onHandlePlay()}>Play</button>

                {/**if setUpDone, then show the GameSpace */}
                {setUpDone&&<GameSpace players={choosePlayers} teams={chooseTeams} numWords={chooseWords} inactive={false}/>}

            </div>
            <Footer />


        </div>
    );
}

export default Settings;