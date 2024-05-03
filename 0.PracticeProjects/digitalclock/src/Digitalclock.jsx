import React, { useState, useEffect, useSyncExternalStore } from "react";

function Digitalclock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let merediem = hours >= 12 ? "PM" : "Am";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${merediem}`;
  }
  function padZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }
  return (
    <div className="clock-container">
      <div className="clockdisplay">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default Digitalclock;
