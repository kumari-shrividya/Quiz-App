import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Main.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/result_reducer'

function Main() {
    const inputRef=useRef(null)
		const dispatch=useDispatch()

	function startQuiz(){
		if(inputRef.current?.value){
			dispatch(setUserId(inputRef.current?.value))
		}
	}


  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        
        <ol>
            <li>You will be asked 10 questions one after another</li>
            <li>You will be asked 10 questions one after another</li>
            <li>You will be asked 10 questions one after another</li>
            <li>You will be asked 10 questions one after another</li>
            <li>You will be asked 10 questions one after another</li>
        </ol>
        <form id='form'>
            <input  ref={inputRef} type='text' className='userid' placeholder='UserName*'/>
        </form>
        <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default Main