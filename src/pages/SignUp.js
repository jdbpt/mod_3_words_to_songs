import React from 'react';
import SignHeader from '../components/SignHeader';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <SignHeader/>
      <h2>Sign Up</h2>
      <Link to="/home">Home</Link>
    </div>
  )
};

export default SignUp;