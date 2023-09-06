import React from 'react';
import { Link } from 'react-router-dom';
import SignHeader from '../components/SignHeader';
import "./pages.css";

const SignIn = () => {
  return (
    <div>
      <SignHeader/>
      <div className='sign'>
        <h3>Wecome back!</h3>
        <Link to="/home">Home</Link>
        <h3>New User?</h3>
        <Link to="/signup">Sign Up</Link>
      </div>
      
    </div>
  )
};

export default SignIn;