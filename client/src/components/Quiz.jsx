import React, { useEffect } from 'react'
import Questions from './Question'
import { MoveNextQuestion ,MovePrevQuestion} from '../hooks/FetchQuestion'
// redux store import
import {useSelector,useDispatch} from 'react-redux'

function Quiz() {

  const  state =useSelector(state => state.questions.trace)
  const dispatch = useDispatch()
 
  useEffect(()=>{
    console.log(state)
  })

		// next button event handler
		function onNext(){
    		console.log('on next click')
     /** update the trace value by one  using moveNextAction */
        dispatch(MoveNextQuestion())
 	 }

 	 // prev button event handler
  		function onPrev(){
   	 		console.log('on Prev click')
        /** decrese the trace value by one  using movePrevAction */
        dispatch(MovePrevQuestion())

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