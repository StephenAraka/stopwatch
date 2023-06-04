import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const startTimer = () => {
    // start logic here
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    // pause logic here
    clearInterval(countRef.current);
    setIsPaused(true);
  };

  const resumeTimer = () => {
    // resume logic here
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const resetTimer = () => {
    // reset  logic here
    clearInterval(countRef.current);
    setIsActive(false);
    if (isPaused) setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const seconds = `0${Math.floor(timer % 60)}`.slice(-2);
    const minutes = `0${Math.floor(timer / 60)}`.slice(-2);
    const hours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return`${hours} : ${minutes} : ${seconds}`;
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <div>{formatTime()}</div>
      <div>
        {!isActive && !isPaused && <button onClick={startTimer}>Start</button>}
        {isActive && !isPaused && <button onClick={pauseTimer}>Pause</button>}
        {isActive && isPaused && <button onClick={resumeTimer}>Resume</button>}
        {isActive && <button onClick={resetTimer}>Reset</button>}
      </div>
    </>
  )
}

export default App
