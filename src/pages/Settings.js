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
    const [choosePlayers, setChoosePlayers] = useState(1);
    const [chooseTime, setChooseTime] = useState(10000)

    const [setUpDone, setSetUpDone] = useState(false);
    const [playStarted, setPlayStarted] = useState(false);

    //code source: https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs
    const handleChooseWordsChange = (e) => {
        setChooseWords(e.target.value);
    };

    const handleChooseTeamsChange = (e) => {
        setChooseTeams(e.target.value);
    };

    const handleChoosePlayersChange = (e) => {
        setChoosePlayers(e.target.value);
    };

    const handleChooseTimeChange = (e) => {
        setChooseTime(e.target.value);
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
                <div className={setUpDone ? "hidden" : ""} >
                    <h2>Settings Page</h2>
                    <h3>See home for instructions if needed!</h3>
                </div>

                <form className={setUpDone ? "hidden settings" : "settings"} action="" method="">
                    <fieldset>
                        <label htmlFor="numWords">Choose the number of Words per Round:</label>
                        <select name="numWords" value={chooseWords} onChange={handleChooseWordsChange} id="numWords" required>
                            <option value={8}>8</option>
                            <option value={16}>16</option>
                            <option value={32}>32</option>
                        </select><br /><br />

                        <label htmlFor="timeSet">Set the timelimit to sing a song with the word:</label>
                        <select name="timeSet" value={chooseTime} onChange={handleChooseTimeChange} id="timeSet" required>
                            <option value={10000}>10 seconds</option>
                            <option value={20000}>20 seconds</option>
                            <option value={30000}>30 seconds</option>
                            <option value={60000}>1 minute</option>
                        </select>
                        {console.log(chooseTime)}
                    </fieldset>

                    <fieldset>
                        <label htmlFor="teams">Choose the number of Teams(teams work together to sing a song with the word):</label>
                        <select name="teams" value={chooseTeams} onChange={handleChooseTeamsChange} id="teams" required>
                            <option value={0}>Solo</option>
                            <option value={1}>One Team</option>
                            <option value={2}>Two Teams</option>
                            <option value={3}>Three Teams</option>
                        </select><br /><br />

                        <label htmlFor="playersNum">Number of players (1-6):</label>
                        <input type="number" id="playersNum" name="playersNum" min={1} max={6} value={choosePlayers} required onChange={handleChoosePlayersChange} />
                    </fieldset>

                    <input type='reset' value="Reset Form" />
                </form>
                <button className={playStarted ? "hidden" : ""} onClick={() => onHandlePlay()}>Play</button>
                {/**if setUpDone, then show the GameSpace */}
                {setUpDone && <GameSpace players={choosePlayers} teams={chooseTeams} numWords={chooseWords} setTime={chooseTime} inactive={false} />}

            </div>
            <Footer />


        </div>
    );
}

export default Settings;