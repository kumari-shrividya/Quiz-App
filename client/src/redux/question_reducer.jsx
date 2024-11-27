import { createSlice, ReducerType } from "@reduxjs/toolkit"

// create Reducer

export const questionReducer = createSlice({
    name:'questions',
    initialState:{

        //questions
        queue : [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state,action)=>{
            return {
                ...state,
                queue : action.payload
            }
        }
    }

})
export const{startExamAction} = questionReducer.actions;

export default questionReducer.reducer;