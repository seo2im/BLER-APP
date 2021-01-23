import { createReducer } from 'typesafe-actions';
import { tApiAction, tApiState } from './types';
import { GET_API, GET_API_ERROR, GET_API_SUCCESS } from './actions';
import { asyncState } from './reducerUtils'

const initialState : tApiState = {
	api : asyncState.initial()
}

const apiReducer = createReducer<tApiState, tApiAction>(initialState, {
	[GET_API] : state => ({
		...state,
		api : asyncState.load()
	}),
	[GET_API_SUCCESS] : (state, action) => ({
		...state,
		api : asyncState.success(action.payload)
	}),
	[GET_API_ERROR] : (state, action) => ({
		...state,
		api : asyncState.error(action.payload)
	})
})

export default apiReducer;