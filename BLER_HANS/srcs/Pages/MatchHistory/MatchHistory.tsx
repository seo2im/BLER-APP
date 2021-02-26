import React from 'react'
import { FlatList } from 'react-native'
import {
	Background,
	View,
	Box,
	Text
} from './Style'
import { Character } from '../Pulbic'

import { tUserGame } from '../../Modules/games/api'

const MatchHistory = ({ userGames } : { userGames : tUserGame[] }) => {
	const { 
		
	} = userGames;
	return (
		<Background source={require("../../Public/background.jpg")}>
		<View>
			<FlatList
				data={userGames}
				renderItem={({ item } : { item : tUserGame }) => (
					<Box>
						<Character code={1} width={"40px"} height={"40px"}/>
						<Text>Rank {item.gameRank}</Text>
						<Text>{item.playerKill}/{item.playerAssistant}/{item.monsterKill}</Text>
						<Text>{item.damageToPlayer}</Text>
					</Box>
				)}
				keyExtractor={item => String(item.gameId)}
			/>
		</View>
		</Background>
	)
}

export default MatchHistory;