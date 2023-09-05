import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Nav from '../components/Nav';
import "./pages.css";
const BGM = () => {
  return (
    <div>
      <Header/>
      <Nav bgm={true}/>
      <div className='contents'>
        <h1>Leaderboard</h1>
      </div>
      
      <Footer/>
    </div>
  )
}

export default BGM;