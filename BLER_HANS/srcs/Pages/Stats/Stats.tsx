import React from 'react'
import { Text } from 'react-native'

import { tUserStat } from '../../Modules/userStats/api'

const Stats = ({ userStats } : { userStats : tUserStat[] }) => {
	const { 
		seasonId,
		mmr,
		rank,
		nickname,
		rankSize,
		totalGames,
		rankPercent,
		averageRank
	} = userStats[0];
	return (
		<>
			<Text>{nickname}</Text>
			<Text>Rank : {rank}</Text>
			<Text>mmr : {mmr}</Text>
			<Text>totalGames : {totalGames}</Text>
		</>
	)
}

export default Stats;