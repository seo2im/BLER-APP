import { createAsyncAction } from 'typesafe-actions'
import { tApi } from './api'
import { AxiosError } from "axios"

export const GET_API = 'api/GET_API';
export const GET_API_SUCCESS = 'api/GET_API_SUCCESS';
export const GET_API_ERROR = 'api/GET_API_ERROR';

export const getApiAsync = createAsyncAction(
	GET_API,
	GET_API_SUCCESS,
	GET_API_ERROR
)<undefined, tApi, AxiosError>();