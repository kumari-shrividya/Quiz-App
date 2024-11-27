import React,{useRef} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Main.css'

function Main() {
    const inputRef=useRef(null)

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
        <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default Main