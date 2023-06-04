import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const startTimer = () => {
    // start logic here
  };

  const pauseTimer = () => {
    // pause logic here
  }

  const resumeTimer = () => {
    // resume logic here
  }

  const resetTimer = () => {
    // reset  logic here
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <div>00</div>
      <div>
        <button>Start</button>
        <button>Pause</button>
        <button>Resume</button>
        <button>Reset</button>
      </div>
    </>
  )
}

export default App
