
function Start({hours, minutes, seconds, isPause, handlePaused, handleReset, handleResume}) {
  return (
    <div className='show-container'>
        <div className='timer-box'>
          <div>{hours<10 ? `0${hours}`:hours}</div>
          <div>:</div>
          <div>{ minutes<10 ? `0${minutes}`:minutes}</div>
          <div>:</div>
          <div>{ seconds<10 ? `0${seconds }`:seconds  }</div>
          <div></div>
        </div>
        <div className='action-box'>
          {
            !isPause && <button onClick={ handlePaused } className='button'>
            Pause
            </button>
          }
          {
            isPause && <button onClick={ handleResume } className='button'>
            Resume
            </button>
          }
          <button className='button' onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
  )
}

export default Start
