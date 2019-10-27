import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';

function CountDownTimer(props) {
    const [timeUntil, setTimeUntil] = useState(props.date.getTime() - Date.now());
    const one_day = 1000 * 60 * 60 * 24;
    const one_hour = 1000 * 60 * 60;
    const one_minute = 1000 * 60;
    const one_second = 1000;
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeUntil(props.date.getTime() - Date.now());
        }, 1000);
        return () => clearInterval(interval);
    });
    let days = Math.floor(timeUntil / one_day);
    let hours = Math.floor((timeUntil - days * one_day) / one_hour);
    let minutes = Math.floor((timeUntil - days * one_day - one_hour * hours) / one_minute);
    let seconds = Math.floor((timeUntil - days * one_day - one_hour * hours - one_minute * minutes) / one_second);
    return (
        <div className={props.className}>
            {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </div>
    );
}

CountDownTimer.propTypes = {
    date: PropTypes.instanceOf(Date),
};

export default CountDownTimer;