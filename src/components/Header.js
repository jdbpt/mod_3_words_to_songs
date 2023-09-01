import React from 'react'
import Nav from '../components/Nav';

//has a nav  header for the main pages, not the Signin/Up with have a generic one shared
const Header = () => {
 
  return (
    <header>
      <h1>WORDS TO SONGS</h1>
      <h2>Where words spark memories into music</h2>
      <Nav/>

    </header>
  );
};

export default Header;