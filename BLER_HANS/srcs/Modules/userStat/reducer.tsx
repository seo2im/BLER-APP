import { createReducer } from 'typesafe-actions';
import { tApiAction, tApiState } from './types';
import { USERSTAT_GET, USERSTAT_GET_ERROR, USERSTAT_GET_SUCCESS } from './actions';
import { asyncState } from '../Public/reducerUtils'

const initialState : tApiState = {
	data : asyncState.initial()
}

const apiReducer = createReducer<tApiState, tApiAction>(initialState, {
	[USERSTAT_GET] : state => ({
		...state,
		data : asyncState.load()
	}),
	[USERSTAT_GET_SUCCESS] : (state, action) => ({
		...state,
		data : asyncState.success(action.payload)
	}),
	[USERSTAT_GET_ERROR] : (state, action) => ({
		...state,
		data : asyncState.error(action.payload)
	})
})

export default apiReducer;