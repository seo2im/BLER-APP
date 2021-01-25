import { createReducer } from 'typesafe-actions';
import { tApiAction, tApiState } from './types';
import { USERNUM_GET, USERNUM_GET_ERROR, USERNUM_GET_SUCCESS } from './actions';
import { asyncState } from '../Public/reducerUtils'

const initialState : tApiState = {
	data : asyncState.initial()
}

const apiReducer = createReducer<tApiState, tApiAction>(initialState, {
	[USERNUM_GET] : state => ({
		...state,
		data : asyncState.load()
	}),
	[USERNUM_GET_SUCCESS] : (state, action) => ({
		...state,
		data : asyncState.success(action.payload)
	}),
	[USERNUM_GET_ERROR] : (state, action) => ({
		...state,
		data : asyncState.error(action.payload)
	})
})

export default apiReducer;