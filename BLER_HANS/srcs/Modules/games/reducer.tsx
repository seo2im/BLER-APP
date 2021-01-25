import { createReducer } from 'typesafe-actions';
import { tApiAction, tApiState } from './types';
import { GAMES_GET, GAMES_GET_SUCCESS, GAMES_GET_ERROR } from './actions';
import { asyncState } from '../Public/reducerUtils'

const initialState : tApiState = {
	data : asyncState.initial()
}

const apiReducer = createReducer<tApiState, tApiAction>(initialState, {
	[GAMES_GET] : state => ({
		...state,
		data : asyncState.load()
	}),
	[GAMES_GET_SUCCESS] : (state, action) => ({
		...state,
		data : asyncState.success(action.payload)
	}),
	[GAMES_GET_ERROR] : (state, action) => ({
		...state,
		data : asyncState.error(action.payload)
	})
})

export default apiReducer;