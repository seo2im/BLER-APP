import { createAsyncAction } from 'typesafe-actions'
import { tUserStat } from './api'
import { AxiosError } from "axios"

export const USERSTAT_GET = 'USERSTAT/GET';
export const USERSTAT_GET_SUCCESS = 'USERSTAT/GET_SUCCESS';
export const USERSTAT_GET_ERROR = 'USERSTAT/GET_ERROR';

export const getApiAsync = createAsyncAction(
	USERSTAT_GET,
	USERSTAT_GET_SUCCESS,
	USERSTAT_GET_ERROR
)<undefined, tUserStat, AxiosError>();