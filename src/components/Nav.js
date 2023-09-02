import React from 'react';
import { Link } from 'react-router-dom';
import "./components.css";

const Nav = (props) => {
  return (
    <nav>
        <Link to='/home' className={props.home?"home":""}>HOME</Link>
        <Link to='/gamespace' className={props.gamespace?"home":""}>GAME SPACE</Link>
        <Link to='/leaderboard' className={props.leaderboard?"home":""}>LEADERBOARD</Link>
    </nav>
  )
};

export default Nav;