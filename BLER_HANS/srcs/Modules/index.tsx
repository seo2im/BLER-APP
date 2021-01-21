import { combineReducers } from 'redux'
import Action from './Reducer'

const Reducer = combineReducers({
	Action
})

export default Reducer;
export type State = ReturnType<typeof Reducer>