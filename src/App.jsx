
import { useEffect, useState } from 'react'
import './App.css'
import Start from './Start';
import PauseReset from './PauseReset';

function App() {

  const [isStart, setIsStart] = useState(false);
  const [isPause, setPause] = useState(false)
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0)


  const handleIsStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert('Invalid time')
      return;
    }
    else {
      setIsStart(true)
    }
  }

  const handleReset = () => {
    resetTimer()
  }

  const resetTimer = () => {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    setIsStart(false)
    clearInterval(timer)

  }
  
  const handlePaused = () => {
    setPause(true)
    clearInterval(timer)
  }

  const handleResume = () => {
    setPause(false)
    decrementTimer(seconds,minutes,hours)
  }

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    let value = parseInt(e.target.value)
    let id = e.target.id

    if (id === 'hours') {
      setHours(value)
    } else if (id === 'minutes') {
      setMinutes(value)
    } else {
      setSeconds(value)
    }

  }
  
  const decrementTimer = (s, m, h, ) => {
    if (s > 0) {
      setSeconds((s)=>s-1)
    } else if (s===0 && m > 0) {
      setMinutes((m) => m - 1)
      setSeconds(59)
    } else {
      setHours((h) => h - 1)
      setMinutes(59)
      setSeconds(59)
    }

    if (s === 0 && m === 0 && h === 0) {
      resetTimer();
      alert('timer finished')
    }
  }

  useEffect(() => {
    let tId;
    if (isStart)
    {
      tId = setInterval(() => {
      decrementTimer(seconds,minutes,hours,tId)
      }, 1000)
    }
    setTimer(tId)

    return () => {
      clearInterval(tId)
    }
  }, [seconds, minutes, hours, isStart])
  
  return (
    <div className='App'>
      <h1 className='title'>Countdown Timer</h1>
      {
        !isStart &&
        <PauseReset
          hours={ hours }
          minutes={ minutes }
          seconds={ seconds }
          handleInput={ handleInput }
          handleIsStart={ handleIsStart } />
      }
      { isStart && <Start
        hours={ hours }
        minutes={ minutes }
        seconds={ seconds }
        isPause={ isPause }
        handlePaused={ handlePaused }
        handleReset={ handleReset }
        handleResume={handleResume}
      /> }

    </div>
  )
}

export default App
