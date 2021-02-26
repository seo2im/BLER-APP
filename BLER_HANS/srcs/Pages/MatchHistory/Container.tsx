import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'
import { getGames } from '../../Modules/games/thunks'

import { tUserGame } from '../../Modules/games/api'
import MatchHistory from './MatchHistory'
import { ThunkDispatch } from 'redux-thunk';

const Container = ({ route, navigation }) => {
	const { userNum, season, matchingTeamMode } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.games.data);
	const [ list, setList ] = useState<tUserGame[]>([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const func = async () => {
			dispatch(getGames(userNum));
		}
		func().then(e => {
			console.log(data);
		});
	}, [])

	return (
		<>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <MatchHistory userGames={data.userGames}/>}
		</>
	)
}

export default Container;