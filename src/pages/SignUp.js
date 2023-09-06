import React from 'react';
import SignHeader from '../components/SignHeader';
import { Link } from 'react-router-dom';
import "./pages.css";

const SignUp = () => {
  return (
    <div>
      <SignHeader/>
      <div className='sign'>
        <h2>Sign Up</h2>
        <h2>Welcome!</h2>
        <Link to="/home">Home</Link>
      </div>
      
    </div>
  )
};

export default SignUp;