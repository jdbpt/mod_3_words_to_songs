import React from 'react';
import Header from '../components/Header';
import Instructions from '../components/Instructions';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import "./pages.css";

const Home = () => {
  return (
    <div>
        <Header/>
        <Nav home={true}/>
        <div  className='contents'>
          <Instructions/>
        
        </div>
       
        <Footer/>
    </div>
  )
};

export default Home;