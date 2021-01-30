import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules'
import { getGames } from '../../Modules/games/thunks'

import Component from './MatchHistory'

const Container = ({ route, navigation }) => {
	const { userNum } = route.params;
	const { data, loading, error } = useSelector((state : tState) => state.games.data);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data)
			dispatch(getGames(userNum));
	}, []);

	return (
		<>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Component userGames={data.userGames}/>}
		</>
	)
}

export default Container;