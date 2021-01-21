import { combineReducers } from 'redux'
import _ from './Reducer'

const Reducer = combineReducers({
	_
})

export default Reducer;
export type State = ReturnType<typeof Reducer>