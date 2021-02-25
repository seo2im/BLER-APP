import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'
import { getGames } from '../../Modules/games/thunks'

import { tUserGame } from '../../Modules/games/api'
import MatchHistory from './MatchHistory'

const Container = ({ route, navigation }) => {
	const { userNum, season, matchingTeamMode,  } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.games.data);
	const [ list, setList ] = useState<tUserGame[]>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		/* Todo : must call it when it need */
		dispatch(getGames(userNum));
	}, []);
	useEffect(() => {
		if (!data || (data && data.code !== 200))
			return ;
		setList(list.slice(10));
		
		setList([...list, ...data.userGames.filter(game => 
			game.seasonId === season && game.matchingTeamMode === matchingTeamMode)])
		if (list.length < 10)
			dispatch(getGames(userNum));
	}, [data])

	return (
		<>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <MatchHistory userGames={data.userGames}/>}
		</>
	)
}

export default Container;