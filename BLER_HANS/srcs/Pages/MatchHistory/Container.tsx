import React, { useEffect, useState } from 'react'
import { BackHandler } from 'react-native'
import { Loading, Error } from '../Pulbic'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'
import { getGames } from '../../Modules/games/thunks'

import { tUserGame } from '../../Modules/games/api'
import MatchHistory from './MatchHistory'

const Container = ({ route, navigation }) => {
	const { userNum, season, matchingTeamMode, mmr } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.games.data);
	const [ list, setList ] = useState<tUserGame[]>([]);
	const [ firstMmr, setFirstMmr ] = useState<number>(mmr);

	const dispatch = useDispatch();
	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				dispatch(getGames(0))
				navigation.navigate("Main");
				return true;
			})
		
			return () => backHandler.remove();
	}, [])

	const next = (newMmr) => {
		setFirstMmr(newMmr);
		setList(list.slice(10));
	}


	useEffect(() => {
		if (data && data.code === 404)
			return ;
		if (data)
			setList([...list, ...data.userGames.filter(e => e.seasonId === season && e.matchingTeamMode === matchingTeamMode )]);
	}, [data])
	useEffect(() => {
		if (list.length < 10)
			setTimeout(() => 
				dispatch(getGames(userNum, data ? data.next : undefined))
			, 1100)
	}, [list])

	return (
		<>
			{(loading || list.length < 10) && <Loading />}
			{error && <Error />}
			{(data && list.length >= 10) && <MatchHistory userGames={list.slice(0, 10)} mmr={firstMmr} next={next}/>}
		</>
	)
}

export default Container;

