import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'

import { getUserNum } from '../../Modules/userNum/thunks'
import { getUserStats } from '../../Modules/userStats/thunks'

import Main from './Main'
import { Loading, Error } from '../Pulbic'
import { Background } from './Style';
/*
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
*/
const Container = ({ route, navigation }) => {
	const nickname = "seolim"
	const userNum = 755835

	return (
		<>
			<Connector nickname={nickname} userNum={userNum} navigation={navigation}/>
		</>
	)
}


const Connector = ({ nickname, userNum, navigation }) => {
	const { data, loading, error } = useSelector((state : tState) => state.userStats.data);
	const dispatch = useDispatch();

	const [season, setSeason] = useState<number>(1);

	const linkMatchHistory = (season : number, matchingTeamMode : number) => {
		navigation.navigate("MatchHistory", { userNum, season, matchingTeamMode});
	}
	const linkStats = (matchMode) => {
		navigation.navigate("Stats", { userNum, matchMode });
	}

	useEffect(() => {
		dispatch(getUserStats(userNum, season));
	}, [season]);
	
	/* userStat api when error, get success to code 404 and get error code.. This is problem of api server */
	return (
	<>
	<Background source={require("../../Public/background.jpg")}>
		{loading &&  <Loading />}
		{((data && data.code === 404) || error) && <Error />} 
		{data && data.code !== 404 && <Main nickname={nickname}
							season={season}
							setSeason={setSeason}
							userStats={data.userStats}
							linkMatchHistory={linkMatchHistory}
							linkStats={linkStats}/>}
	</Background>
	</>
	)
}

export default Container;