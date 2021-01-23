import React, { useEffect }  from 'react';
import { Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './Test';
import { getApiThunk } from './Test/thunks';

const Main = () => {
	const { data, loading, error } = useSelector((state : RootState) => state.apiReducer.api)
	const dispatch = useDispatch();

	const click = () => {
		dispatch(getApiThunk());
	}

	return (
		<>
			<Text>BL:ER</Text>
			<Button title="click" onPress={() => click()}/>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Text>{data.}</Text>}
		</>	
	)
}

export default Main