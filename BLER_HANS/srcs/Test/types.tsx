import { ActionType } from 'typesafe-actions';
import { AsyncState } from './reducerUtils';
import * as actions from './actions'
import { tApi } from './api'

export type tApiAction = ActionType<typeof actions>;
export type tApiState = {
	api : AsyncState<tApi, Error>
}