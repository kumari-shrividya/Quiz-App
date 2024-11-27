import {configureStore} from '@reduxjs/toolkit'
// call reducers
import { questionReducer } from './question_reducer'

const rootReducer=combineReducers({
    questions:questionReducer
})