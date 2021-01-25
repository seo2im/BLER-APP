import React from 'react';
import { Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules';
import { getUserNum } from '../../Modules/userNum/thunks';

import Main from '../Main/Main';

const Login = () => {
	const { data, loading, error } = useSelector((state : tState) => state.userNum.data)
	const dispatch = useDispatch();

	const click = () => {
		dispatch(getUserNum('seolim'));
	}

	return (
		<>
			<Text>BL:ER</Text>
			<Button title="click" onPress={() => click()}/>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Main userNum={data.user.userNum} />}
		</>	
	)
}

export default Login;

