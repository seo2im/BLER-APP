import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'

import { getUserNum } from '../../Modules/userNum/thunks'
import { getUserRank } from '../../Modules/userRank/thunks'
import { getUserStats } from '../../Modules/userStats/thunks'

import Main from './Main'

const Container = ({ route }) => {
	const { nickname } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.userNum.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserNum(nickname));
	}, []);

	return (
		<>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Connector userNum={data.user.userNum}/>}
		</>
	)
}

const Connector = ({ userNum }) => {
	const { userRank, userStats } = useSelector((state : tState) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserRank(userNum, 1, 1));
		dispatch(getUserStats(userNum, 1));
	}, []);

	return (
		<>
			{userRank.data.loading && userStats.data.loading && <Text>Loading</Text>}
			{userRank.data.error && userStats.data.error && <Text>Error</Text>}
			{userRank.data.data && userStats.data.data && <Main userRank={userRank.data.data.userRank} userStats={userStats.data.data.userStats}/>}
		</>
	)
}

export default Container;