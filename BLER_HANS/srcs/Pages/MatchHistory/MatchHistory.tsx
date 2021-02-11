import React from 'react'
import { Text, FlatList } from 'react-native'

import { tUserGame } from '../../Modules/games/api'

const MatchHistory = ({ userGames } : { userGames : tUserGame[] }) => {
	const { 
		
	} = userGames;
	return (
		<>
			<FlatList
				data={userGames}
				renderItem={({ item }) => (
					<>
						<Text>{item.matchingMode}</Text>
						<Text>{item.characterLevel}</Text>
						<Text>{item.gameRank}</Text>
						<Text>{item.playerKill}/{item.playerAssistant}/{item.monsterKill}</Text>
						<Text>{item.damageToPlayer}</Text>
					</>
				)}
				keyExtractor={item => String(item.gameId)}
			/>
		</>
	)
}

export default MatchHistory;