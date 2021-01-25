import { createAsyncAction } from 'typesafe-actions'
import { tUserNum } from './api'
import { AxiosError } from "axios"

export const USERNUM_GET = 'USERNUM/GET';
export const USERNUM_GET_SUCCESS = 'USERNUM/GET_SUCCESS';
export const USERNUM_GET_ERROR = 'USERNUM/GET_ERROR';

export const getApiAsync = createAsyncAction(
	USERNUM_GET,
	USERNUM_GET_SUCCESS,
	USERNUM_GET_ERROR
)<undefined, tUserNum, AxiosError>();