import React, { useState,useEffect } from 'react'
import data from '../database/data'


function Question() {

    const [checked,setChecked]=useState(false)
    const question=data[0]

    useEffect(()=>{
      console.log(question)
    })

    function onSelect(){
        setChecked(true)
        console.log('radio btn change')
    }

  return (
    <div className='questions'>
    <h2 className='text-light'>Simple Question 1</h2>

    <ul key={question.id}>

      {
        question.options.map((q,i)=>(

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