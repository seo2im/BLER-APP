import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'

import { getUserNum } from '../../Modules/userNum/thunks'
import { getUserStats } from '../../Modules/userStats/thunks'

import Main from './Main'

const Container = ({ route, navigation }) => {
	const { nickname } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.userNum.data);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data)
			dispatch(getUserNum(nickname));
	}, []);

	return (
		<>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Connector userNum={data.user.userNum} navigation={navigation}/>}
		</>
	)
}

const Connector = ({ userNum, navigation }) => {
	const { data, loading, error } = useSelector((state : tState) => state.userStats.data);
	const dispatch = useDispatch();

	const linkMatchHistory = () => {
		navigation.navigate("MatchHistory", { userNum });
	}
	const linkStats = (matchMode) => {
		navigation.naviagte("Stats", { userNum, matchMode });
	}

	useEffect(() => {
		dispatch(getUserStats(userNum, 1));
	}, []);

	return (
		<>
			{loading &&  <Text>Loading</Text>}
			{error &&  <Text>Error</Text>}
			{data &&  <Main userStats={data.userStats}/>}
		</>
	)
}

export default Container;