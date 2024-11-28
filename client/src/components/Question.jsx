import React, { useState,useEffect } from 'react'
import data from '../database/data'

/** custom hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { useDispatch, useSelector } from 'react-redux'
import { updateResult } from '../hooks/setResult'

function Question({onChecked}) {

    const [checked,setChecked]=useState(false)
    const [{isLoading, apiData,serverError }] = useFetchQuestion()
    const question=data[0]
    const questions=useSelector(state => state.questions.queue[state.questions.trace])
    const { trace }=useSelector(state => state.questions)
	const result = useSelector(state=>state.result.result)
	const dispatch = useDispatch()

    useEffect(() => {

     	dispatch(updateResult({ trace , checked}))
    }, [checked])

    function onSelect(i){
       setChecked(i)
        onChecked(i)
		dispatch(updateResult({ trace , checked}))
      
    }

  return (
    <div className='questions'>
      <h2 className='text-light'>{questions?.question}</h2>

      <ul key={questions?.id}>

      {
        questions?.options.map((q,i)=>(

          <li key={i}>
          <input 
           type='radio'
           value={false}
           name='Options'
           id={`q${i}-option`}
           onChange={()=>onSelect(i)}
           />

           <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
           <div className={`check ${result[trace] == i ? 'checked': '' }`}></div>
      </li>
        ))
      }
    
    </ul>
    </div>
  )
}

export default Question