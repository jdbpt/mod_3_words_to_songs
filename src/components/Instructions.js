import React from 'react';

const Instructions = () => {
  return (
    <div>
      <h1>Welcome to Words to Songs</h1>
      <h2>Where words spark memories into music!</h2>
      <h2>See instructions below:</h2>
      <h1>Instructions</h1>
      <ul className='instructions'>
        <li>At the GameSpace (navigation to the left)</li>
        <li>Select the Number of Rounds 6, 10, or 14</li>
        <li>The Select the Number of Players
          <ul>
            <li>You will be able to select previous player nicknames if there are some available to count in lifetime scores on the leaderboard</li>
            <li>Or you can set new ones for new players</li>
          </ul>
        </li>
        <li>Finally you will be prompted to set the time</li>
        <li>Hit Start when the first player is ready</li>
        <li>Next, the first player will sing a song with the shown random word in it<br />which comes from a bank of 100 words, within the timelimit</li>
        <li>If they are successful, hit yes, and their score will be updated</li>
        <li>Then hit yes when the next player is ready when prompted</li>
        <li>To see scores, navigate to the leaderboard page</li>
        <li>Scores are saved based on the current session and the lifetime when streak</li>
        <li>You can delete old scores as desired, and you can fully delete a nickname/player</li>
        <li>Let those memories come alive with song!</li>
        <li>The winner will be listed at the end of the rounds!</li>
        <li>PS: Are you wondering if that song just sung really had that word in it?
          <ul>
            <li>*Well then use the YouTube player to check if it really did!</li>

          </ul>

        </li>
        <li>Or maybe you are not feeling like singing the song with the word it it, but instead you want to find a song with the word in it and play a snippet of the song with that word in the time limit?
          <ul>
            <li>*Well then use the YouTube player and live out your dreams to not sing!</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Instructions;