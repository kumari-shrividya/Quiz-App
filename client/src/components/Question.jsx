import React, { useState,useEffect } from 'react'
import data from '../database/data'

/** custom hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { useSelector } from 'react-redux'

function Question() {

    const [checked,setChecked]=useState(false)
    const [{isLoading, apiData,serverError }] = useFetchQuestion()
    const question=data[0]

    const questions=useSelector(state => state.questions.queue[state.questions.trace])

    const trace=useSelector(state => state.questions.trace)
    useEffect(()=>{
      // console.log(isLoading)
     // console.log(apiData)
      // console.log(isLoading)
        //console.log(trace)
      console.log(questions)
    })

    function onSelect(){
        setChecked(true)
        console.log('radio btn change')
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
           onChange={onSelect}
           />

           <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
           <div className='check'></div>
      </li>
        ))
      }
    
    </ul>
    </div>
  )
}

export default Question