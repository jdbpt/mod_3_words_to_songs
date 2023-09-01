import React from 'react';
import { Link } from 'react-router-dom';
import "./components.css";

const Nav = () => {
  return (
    <nav>
        <Link to='/home'>HOME</Link>
        <Link to='/gamespace'>GAME SPACE</Link>
        <Link to='/leaderboard'>LEADERBOARD</Link>
    </nav>
  )
};

export default Nav;