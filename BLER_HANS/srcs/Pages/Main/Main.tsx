import React from 'react'
import { View, Text, Background, Tier } from './Style'
import { charactorCode } from '../../information'

import { tUserStat } from '../../Modules/userStats/api'


const Main = ({ userStats, linkMatchHistory, linkStats }) => {
	const { rank, mmr, nickname, characterStats } = userStats[0];
	
	return (
		<>
		<Background source={require("../../Public/background.jpg")}>
		<View>
			<Tier source={require("../../Public/tier/bronze.png")}/>
			<Text>nickname : {nickname}</Text>
			<Text>Rank : {rank} ({mmr})</Text>
			<Text>Most</Text>
			{characterStats.map((ch, i) => (
				<View key={i}>
					<Text>{charactorCode[ch.characterCode]}</Text>
					<Text>total : {ch.totalGames}</Text>
					<Text>wins : {ch.wins}</Text>
					<Text>average Rank : {ch.averageRank}</Text>
				</View>
			))}
		</View>
		</Background>
		</>
	)
}

export default Main;