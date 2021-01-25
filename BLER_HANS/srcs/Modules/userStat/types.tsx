import { ActionType } from 'typesafe-actions';
import { AsyncState } from '../Public/reducerUtils';
import * as actions from './actions'
import { tUserStat } from './api'

export type tApiAction = ActionType<typeof actions>;
export type tApiState = {
	data : AsyncState<tUserStat, Error>
}