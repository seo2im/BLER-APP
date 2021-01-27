import { createAsyncAction } from 'typesafe-actions'
import { tUserRankAPI } from './api'
import { AxiosError } from "axios"

export const USERRANK_GET = 'USERRANK/GET';
export const USERRANK_GET_SUCCESS = 'USERRANK/GET_SUCCESS';
export const USERRANK_GET_ERROR = 'USERRANK/GET_ERROR';

export const getApiAsync = createAsyncAction(
	USERRANK_GET,
	USERRANK_GET_SUCCESS,
	USERRANK_GET_ERROR
)<undefined, tUserRankAPI, AxiosError>();