import React from 'react'
import Questions from './Question'

function Quiz() {

	// next button event handler
  function onNext(){
    console.log('on next click')
  }

  // next button event handler
  function onPrev(){
    console.log('on Prev click')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}

	  <Questions/>
	  
      <div className='grid'>
        <buttton className='btn prev' onClick={onPrev}>Prev</buttton>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

      </div>
  )
}

export default Quiz