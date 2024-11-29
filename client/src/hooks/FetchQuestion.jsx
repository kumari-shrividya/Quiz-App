
/** fetch question hook to fetch api data and set value to store */

import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import data, {answers} from "../database/data"

/** redux actions */

import * as Action from '../redux/question_reducer'

export const useFetchQuestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {
                // const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                const questions = await data;
                
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : {questions, answers}}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({questions, answers}))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

/**MoveAction Dispatch function */

/** dispatch can call only inside a hook , to call
 *  it inside a function use another async function and pass dispatch as argument */

export const MoveNextQuestion = () => async (dispatch) => {
    try{

        dispatch(Action.moveNextAction());/** increase trace by 1 */

    }catch(error){
        console.log(error)
    }
}
export const MovePrevQuestion = () => async (dispatch) => {
    try{

        dispatch(Action.movePrevAction());/** decrease trace by 1 */

    }catch(error){
        console.log(error)
    }
}
