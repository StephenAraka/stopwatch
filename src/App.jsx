import { useRef, useState } from 'react';
import { FiClock, FiPlay, FiPause, FiRotateCcw,  } from 'react-icons/fi';
import './App.css';

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
  };

  return (
    <main className='container'>
      <h1>St<FiClock />pwatch</h1>
      <section className='time-controls'>
        <div className='time'>{formatTime()}</div>
        <div className='buttons-container'>
          {!(isActive) && <button className='button play' onClick={startTimer}><FiPlay /></button>}
          {(isActive && !isPaused) && <button className='button pause' onClick={pauseTimer}><FiPause /></button>}
          {(isActive && isPaused) && <button className='button resume' onClick={resumeTimer}><FiPlay /></button>}
          {(isActive)  && <button className='button reset' onClick={resetTimer}><FiRotateCcw /></button>}
        </div>
      </section>
    </main>
  )
}

export default App;
