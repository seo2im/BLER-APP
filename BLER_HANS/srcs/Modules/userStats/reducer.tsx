import { createReducer } from 'typesafe-actions';
import { tApiAction, tApiState } from './types';
import { USERSTATS_GET, USERSTATS_GET_ERROR, USERSTATS_GET_SUCCESS } from './actions';
import { asyncState } from '../Public/reducerUtils'

const initialState : tApiState = {
	data : asyncState.initial()
}

const apiReducer = createReducer<tApiState, tApiAction>(initialState, {
	[USERSTATS_GET] : state => ({
		...state,
		data : asyncState.load()
	}),
	[USERSTATS_GET_SUCCESS] : (state, action) => ({
		...state,
		data : asyncState.success(action.payload)
	}),
	[USERSTATS_GET_ERROR] : (state, action) => ({
		...state,
		data : asyncState.error(action.payload)
	})
})

export default apiReducer;