
/** fetch question hook to fetch api data and set value to store */

import { useState } from "react"

export const useFetchQuestion = ()=>{

const [getData,setGetData] =  useState({isLoading : false, apiData : [], serverError : null})

useEffect( ()=>{
    setGetData( prev => ({...prev,isLoading : true}))

    /** async function fetch backend data */
    (async () => {
        try{

        }catch(error){
            setGetData(prev => ({...prev,isLoading : false}))
            setGetData(prev => ({serverError : error}))
        }
    })();
})

}