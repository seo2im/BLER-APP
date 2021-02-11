import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'
import { getUserStats } from '../../Modules/userStats/thunks'

import Stats from './Stats'

const Container = ({ route, navigation }) => {
	const { userNum } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.userStats.data);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data)
			dispatch(getUserStats(userNum, 1));
	}, []);

	return (
		<>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Stats userStats={data.userStats}/>}
		</>
	)
}

export default Container;