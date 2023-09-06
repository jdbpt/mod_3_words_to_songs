import React from 'react';
import logo from "../images/wordToSongsLogo.png"

const SignHeader = () => {
  return (
    <header>
        <img className="imgLeft" src={logo} alt="logo Words to Songs" />
        <h1>WORDS TO SONGS</h1>
        <h2>Where words spark memories into music</h2> 
    </header>   
  );
};

export default SignHeader;