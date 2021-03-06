/* https://react.vlpt.us/using-typescript/06-ts-redux-middleware.html */

import { Dispatch } from 'redux'
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

const createAsyncThunk = <A extends AnyAsyncActionCreator, F extends (...params : any[]) => Promise<any>>(
	asyncActionCreator : A,
	promiseCreator : F
) => {
	type Params = Parameters<F>;
	return (...params : Params) => {
		return async (dispatch : Dispatch) => {
			const { request, success, failure } = asyncActionCreator;
			dispatch(request(undefined));
			try {
				const result = await promiseCreator(...params);
				dispatch(success(result));
			} catch (e) {
				dispatch(failure(e));
			}
		}
	}
}

export default createAsyncThunk;
