import React from 'react';

const Instructions = () => {
  return (
    <div>
      <h1>Welcome to Words to Songs</h1>
      <h2>Where words spark memories into music!</h2>
      <h1>Instructions</h1>
      <div className='displayInstr'>
        <ul className='instructions instr1'>
          <li>At the Settings (navigation to the left)</li>
          <li>Select the Number of Words per Round</li>
          <li>Select the Number of Players</li>
          <li>Select the Number of Teams
            <ul>
              Note: that if you choose greater than 0 teams (aka players round), then score will only be shown at the team level.
            </ul>
            <ul>Note: also if you choose greater than 0 teams (aka players round), play alternates after all words are tested on one team</ul>
            <ul>If have 0 teams set, then play alternates per word between players</ul>
          </li>
          <li>Select the Time Limit to sing a song with the Word that will be shown</li>
          <li>Hit Play to go to the GameSpace page to play Words to Songs!</li>
        </ul>
        <ul className='instructions instr1'>
          <li>Hit Start when the first player to team is ready</li>
          <li>Next, the first player/team will sing a song with the shown random word in it<br />which comes from a bank of 100 words, within the timelimit</li>
          <li>If they are successful, hit yes, and their score will be updated</li>
          <li>Then Start when the next player is ready</li>
          <li>To set up some BGM (background music), navigate to the BGM page and right click to open it in a new tab</li>
          <li>Let those memories come alive with song!</li>
          <li>The winner will be listed at the end of the rounds at the click of a button!</li>
          <li>PS: Are you wondering if that song just sung really had that word in it?
            <ul>
              <li>*Well then use the YouTube player to check if it really did on the BGM page !</li>
            </ul>
          </li>
          <li>Or maybe you are not feeling like singing the song with the word it it, but instead you want to find a song with the word in it and play a snippet of the song with that word in the time limit?
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