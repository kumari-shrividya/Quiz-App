import React, { useEffect,useState } from 'react'
import Questions from './Question'
import { MoveNextQuestion ,MovePrevQuestion} from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'
// redux store import
import {useSelector,useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom'

function Quiz() {

  const [check,setChecked]=useState(undefined)
  const result = useSelector(state => state.result.result);
  const  state =useSelector(state => state)
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch = useDispatch()
 
 	 useEffect(()=>{
    	console.log(state)
 	 })

		// next button event handler
		function onNext(){

    		console.log('on next click')
       		 if(trace < queue.length){
           /** update the trace value by one  using moveNextAction */
        	 dispatch(MoveNextQuestion())

		 	dispatch(PushAnswer(check))
		}

    
 	 }

 	 	// prev button event handler
  		function onPrev(){
   	 		console.log('on Prev click')
				if(trace > 0){
        	/** decrese the trace value by one  using movePrevAction */
       		 dispatch(MovePrevQuestion())
			}
  		}

		function onChecked(check){
			console.log(check)
			setChecked(check)
		}
		/**finish exam after last question */
			if(result.length && result.length >= queue.length){
				return <Navigate to={'/result'} replace='true'></Navigate>
			}

  	return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions  pass onChecked function to child comp to access radio button values*/}

	  <Questions  onChecked={onChecked}/>
	  
      <div className='grid'>
        <buttton className='btn prev' onClick={onPrev}>Prev</buttton>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

      </div>
  	)
}

export default Quiz