import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'
import { getUserStats } from '../../Modules/userStats/thunks'

import Component from './Component'

const Container = ({userNum, mode} : { userNum : number, mode : number }) => {
	const { data, loading, error } = useSelector((state : tState) => state.userStats.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserStats(userNum, mode));
	}, []);

	return (
		<>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Component userStats={data.userStats}/>}
		</>
	)
}

export default Container;