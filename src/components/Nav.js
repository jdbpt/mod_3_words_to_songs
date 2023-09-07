import React from 'react';
import { Link } from 'react-router-dom';
import "./components.css";

const Nav = (props) => {
  return (
    <nav>
        <Link to='/home' className={props.home?"home":""}>HOME</Link>
        <Link to='/gamesetup' className={props.settings?"settings":""}>GAME SETUP</Link>
        <Link to='/bgm' className={props.bgm?"bgm":""}>BACKGROUND MUSIC</Link>
    </nav>
  )
};

export default Nav;