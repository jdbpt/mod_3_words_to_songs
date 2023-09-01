import React from 'react';
import Header from '../components/Header';
import Instructions from '../components/Instructions';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
const Home = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <Instructions/>
        <Footer/>
    </div>
  )
};

export default Home;