import React from 'react';
import { Link } from 'react-router-dom';
import SignHeader from '../components/SignHeader';
const SignIn = () => {
  return (
    <div>
      <SignHeader/>
      <h3>New User?</h3>
      <Link to="/home">Home</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  )
};

export default SignIn;