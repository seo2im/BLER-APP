import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../Public/reducerUtils';
import * as actions from './actions'
import { tUserStatsAPI } from './api'

export type tApiAction = ActionType<typeof actions>;
export type tApiState = {
	data : AsyncState<tUserStatsAPI, Error>
}