import { createAsyncAction } from 'typesafe-actions'
import { tGamesAPI } from './api'
import { AxiosError } from "axios"

export const GAMES_GET = 'GAMES/GET';
export const GAMES_GET_SUCCESS = 'GAMES/GET_SUCCESS';
export const GAMES_GET_ERROR = 'GAMES/GET_ERROR';

export const getApiAsync = createAsyncAction(
	GAMES_GET,
	GAMES_GET_SUCCESS,
	GAMES_GET_ERROR
)<undefined, tGamesAPI, AxiosError>();