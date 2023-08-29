import React from 'react';

//timer that can be set based on the game duration
const Timer = (props) => {
    const time = props.time;
    const handleTime = (time)=>{
        if(time > 1000){
            setInterval(() => {
            
            }, 1000);
        }
        
    }
  return (
    <div>

    </div>
  )
}

export default Timer;