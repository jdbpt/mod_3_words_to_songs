import React from 'react';

const Instructions = () => {
  return (
    <div>
      <h1>Welcome to Words to Songs</h1>
      <h2>Where words spark memories into music!</h2>
      <h1>Instructions</h1>
      <div className='displayInstr'>
        <ul className='instructions instr1'>
          <li>At the Game Setup - Settings Page (navigation to the left)</li>
          <li>Select the Number of Words per Round</li>
          <li>Select the Time Limit for each word to be shown</li>
          <li>Select the Number of Players</li>
          <li>Select the Number of Teams
            <ul>
              Note: that if you choose greater than 0 teams(aka if you do not choose Solo), then score will only be shown at the team level.
            </ul>
            <ul>Note: also if you choose greater than 0 teams, play only alternates after all words are tested on one team</ul>
            <ul>If have 0 teams set (aka Solo), then play alternates per word between players</ul>
          </li>
          <li>Hit Play to go to the GameSpace page to play Words to Songs!</li>
        </ul>
        <ul className='instructions instr1'>
          <li>Hit Start Timer when the first player or team is ready, the Current Team or Player is shown</li>
          <li>The first player/team will sing a song with the shown random word in it<br />which comes from a bank of 100 words, within the timelimit</li>
          <li>If they are successful, hit yes, and their score will be updated</li>
          <li>Then hit Start Timer when the (next) player or (current or next) team is ready for the random word</li>
          <li>To set up some BGM (background music), navigate to the BGM page by right clicking to open it in a new tab</li>
          <li>Let those memories come alive with song!</li>
          <li>The winner will be listed at the end of the rounds at the click of a button!</li>
          <li>PS: Are you wondering if that song just sung really had that word in it?
            <ul>
              <li>*Well then use the YouTube player to check if it really did on the BGM page!</li>
            </ul>
          </li>
          <li>Or maybe you are not feeling like singing the song with the word it it, but instead you want to find a song with the word in it and play a snippet in the time limit?
            <ul>
              <li>*Well then use the YouTube player and live out your dreams to not sing!</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Instructions;