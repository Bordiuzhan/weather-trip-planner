import React, {useEffect, useState} from 'react';
import "./Timer.css";

const Timer = ({endDate}) => {
    /* Calculate time left */
    const calculateTimeLeft = () => {
        const difference = +new Date(endDate) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    /* State for time left */
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    /* Update time left every second */
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    /* Render time left */
    const timerComponents = [];
    Object.keys(timeLeft).forEach(interval => {
        if (timeLeft[interval] === undefined) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="timer__item">
                <span className={"timer__item__value"}>
                    {timeLeft[interval]}
                </span>
                <span className={"timer__item__label"}>
                    {interval.toUpperCase()}
                </span>
            </div>
        );
    });

    return (
        <div className="timer">
            {timerComponents.length ? timerComponents : (
                <div className="timer__item">
                    <span className={"timer__item__value"}>
                        0
                    </span>
                    <span className={"timer__item__label"}>
                        DAYS
                    </span>
                </div>
            )}
        </div>
    );
};

export default Timer;
