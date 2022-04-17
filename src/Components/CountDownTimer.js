import React from 'react'
import { SaleEndDate } from '../Constants';

const CountDownTimer = () => {
   
    const diffTime = Math.abs(new Date(SaleEndDate) - new Date());
    const hour = diffTime / (60*60*1000);
    const minute = (hour % 1) * 60;
    const second = (minute % 1) * 60;

    const { hours , minutes , seconds  } = { hours: Math.floor(hour), minutes: Math.floor(minute), seconds: Math.floor(second)};
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p style={{color: "red", fontWeight: "bolder"}}>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;