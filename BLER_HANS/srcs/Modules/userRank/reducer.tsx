import { createReducer } from 'typesafe-actions';
import { tApiAction, tApiState } from './types';
import { USERRANK_GET, USERRANK_GET_SUCCESS, USERRANK_GET_ERROR } from './actions';
import { asyncState } from '../Public/reducerUtils'

const initialState : tApiState = {
	data : asyncState.initial()
}

const apiReducer = createReducer<tApiState, tApiAction>(initialState, {
	[USERRANK_GET] : state => ({
		...state,
		data : asyncState.load()
	}),
	[USERRANK_GET_SUCCESS] : (state, action) => ({
		...state,
		data : asyncState.success(action.payload)
	}),
	[USERRANK_GET_ERROR] : (state, action) => ({
		...state,
		data : asyncState.error(action.payload)
	})
})

export default apiReducer;