import React from 'react';
import { Link } from 'react-router-dom';
import SignHeader from '../components/SignHeader';
import "./pages.css";
import logo from "../images/wordToSongsLogo.png"
//no mongodb added, functions as a Welcome page

const SignIn = () => {
  return (
    <div>
      <SignHeader/>
      <div className='sign'>
        <h2>Wecome back!</h2>
        <img className="bigLogo" src={logo} alt="logo Words to Songs" />

        <Link to="/home">Home</Link>
        <h3>New User?</h3>
        <Link to="/signup">Sign Up</Link>
      </div>
      
    </div>
  )
};

export default SignIn;