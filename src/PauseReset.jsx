import React from 'react'

function PauseReset({hours, minutes, seconds,handleInput,handleIsStart}) {
  return (
    <div className='input-container'>
          <div className='input-box'>
              <input onChange={ handleInput } value={hours} type="text" placeholder='hh' id='hours'/>
              <input onChange={handleInput} value={minutes} type="text" placeholder='mm' id='minutes'/>
            <input onChange={handleInput} value={seconds} type="text" placeholder='ss' id='seconds'/>
          </div>
          <button onClick={ handleIsStart } className='button'>
            Start
          </button>
        </div>
  )
}

export default PauseReset
