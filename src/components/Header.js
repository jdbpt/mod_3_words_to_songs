import React from 'react'
import "./components.css";
import logo from "../images/wordToSongsLogo.png"
//has a nav  header for the main pages, not the Signin/Up with have a generic one shared
const Header = () => {
 
  return (
    <header>
      <img className="imgLeft" src={logo} alt="logo Words to Songs" />
      <h1>WORDS TO SONGS</h1>
      <h2>Where words spark memories into music</h2>

    </header>
  );
};

export default Header;