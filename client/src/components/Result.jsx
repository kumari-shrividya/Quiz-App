import React,{useEffect} from 'react'
import '../styles/result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_Number, earnPoints_Number,flagResult } from '../helper/helper'
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'

 function Result() {
    const dispatch = useDispatch()
	const {questions : {queue, answers}, result : {result, userId} } = useSelector(state => state)

	useEffect(() => {
		console.log(flag)
	})

	const totalPoints = queue.length * 10;
	const attempts = attempts_Number(result)
	const earnPoints = earnPoints_Number(result, answers,10)
  const flag = flagResult(totalPoints,earnPoints)

	function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
		//console.log('on Restart')
	}

    	return (
     <div className='container'>
       <h1 className='title text-light'>Quiz Application</h1>
      
      <div className='result flex-center'>

        <div className='flex'>
          <span>UserName</span>
          <span className='bold'>Some Info</span>
        </div>

        <div className='flex'>
          <span>Total Quiz Points:</span>
          <span className='bold'>{ totalPoints || 0 }</span>
        </div>

		<div className='flex'>
          <span>Total Questions:</span>
          <span className='bold'>{ queue.length || 0  }</span>
        </div>

		<div className='flex'>
          <span>Total Attempts:</span>
          <span className='bold'>{ attempts || 0 }</span>
        </div>

		<div className='flex'>
          <span>Total Earn Points:</span>
          <span className='bold'>{ earnPoints || 0 }</span>
        </div>

		<div className='flex'>
          <span>Quiz Result</span>
          <span style={{color:`${flag ? 'green' : 'red'}`}} className='bold'>{flag ? 'Passed' : 'Failed'}</span>
        </div>
      </div>

	  <div className='start'>
		<Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
	  </div>

   		 <div className="container">

			{/* Result Table */}
		    <ResultTable/>
            
   		 </div>
     </div>
  )
}
export default Result