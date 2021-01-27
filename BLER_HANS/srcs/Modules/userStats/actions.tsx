import { createAsyncAction } from 'typesafe-actions'
import { tUserStatsAPI } from './api'
import { AxiosError } from "axios"

export const USERSTATS_GET = 'USERSTATS/GET';
export const USERSTATS_GET_SUCCESS = 'USERSTATS/GET_SUCCESS';
export const USERSTATS_GET_ERROR = 'USERSTATS/GET_ERROR';

export const getApiAsync = createAsyncAction(
	USERSTATS_GET,
	USERSTATS_GET_SUCCESS,
	USERSTATS_GET_ERROR
)<undefined, tUserStatsAPI, AxiosError>();