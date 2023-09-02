import React, { useState, useEffect, useRef } from 'react';

//timer that can be set based on the game duration
const Timer = (props) => {
    const [clockTime, setClockTime] = useState(0);
    const [timerInUse, setTimerInUse] = useState(false);

    //**handle the decrement of time, take in time */

    const timer = useRef();
    useEffect(()=>{
      return () =>  clearInterval(timer.current);
    }, []);

    //source of timer code: https://stackoverflow.com/questions/71172632/react-setinterval-and-usestate
    const startTimer = ()=>{
      const displayTime = function (){
          setClockTime(prvtime=> {
            return(prvtime>0?prvtime - 1000:prvtime=0&&clearInterval(timer.current)&&setTimerInUse(false))
          });
        //assist with clock not updateing with useState: https://stackoverflow.com/questions/73056009/react-setinterval-is-re-initialized-to-often
      };//displayTime
      if(clockTime > 0 ){
        timer.current = setInterval(displayTime, 1000);

      } else{
        //just in case, reset the values
        clearInterval(timer.current);
        setClockTime(0);
        setTimerInUse(false);
      }
      

    }//handle time

    const resetTimer = () =>{
      setClockTime(0);
      setTimerInUse(false);
      clearInterval(timer.current);
    }
  
 

  return (
    <div className='clock'>
      <h1>Clock</h1>
      {/**call handleTime based on time provided, and display it */}
      <h3 className="timer">{(clockTime/1000).toFixed()}</h3>
      <button onClick={()=>{
        setTimerInUse(true);
        startTimer();
        }}>Start</button>
      <button onClick={()=>resetTimer()}>Reset</button>

      {!timerInUse && clockTime <= 0 && 
      <><h2>Choose Time</h2>
      <button onClick={()=>setClockTime(10000)}>10 Seconds</button>
      <button onClick={()=>setClockTime(20000)}>20 Seconds</button>
      <button onClick={()=>setClockTime(30000)}>30 Seconds</button></>}

    </div>
  )
};

export default Timer;