import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'

import { getUserNum } from '../../Modules/userNum/thunks'
import { getUserStats } from '../../Modules/userStats/thunks'
import * as storage from '../../Storage/storage'

import Main from './Main'
import { Loading, Error } from '../Pulbic'
import { Background } from './Style';

const Container = ({ route, navigation }) => {
	const { nickname } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.userNum.data);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data || data.user.nickname != nickname)
			dispatch(getUserNum(nickname));
	}, []);

	return (
		<>
			{loading && <Loading />}
			{error && <Error />}
			{data && <Connector nickname={nickname} userNum={data.user.userNum} navigation={navigation}/>}
		</>
	)
}

const Connector = ({ nickname, userNum, navigation }) => {
	const { data, loading, error } = useSelector((state : tState) => state.userStats.data);
	const dispatch = useDispatch();

	const linkMatchHistory = () => {
		navigation.navigate("MatchHistory", { userNum });
	}
	const linkStats = (matchMode) => {
		navigation.navigate("Stats", { userNum, matchMode });
	}

	useEffect(() => {
		dispatch(getUserStats(userNum, 1));
	}, []);

	return (
	<>
		<Background source={require("../../Public/background.jpg")}>
			{loading &&  <Loading />}
			{error &&  <Error />}
			{data &&  <Main nickname={nickname}
							userStats={data.userStats}
							linkMatchHistory={linkMatchHistory}
							linkStats={linkStats}/>}
		</Background>
	</>
	)
}

export default Container;