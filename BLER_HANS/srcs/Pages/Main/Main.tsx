import React from 'react'
import { View, Text, Background, List, HView } from './Style'
import { charactorCode } from '../../information'

import { tUserStat } from '../../Modules/userStats/api'
import Tier from '../Pulbic/Tier'


const Main
= ({ userStats, linkMatchHistory, linkStats }
	:{ userStats : tUserStat[], linkMatchHistory : any, linkStats : any}) => {
	const [ solo, duo, squard ] = userStats;

	return (
		<>
		<Background source={require("../../Public/background.jpg")}>
		<View>
			<HView>
				{solo ? <Tier mmr={solo.mmr} /> : <Tier mmr={-1} />}
				{duo ? <Tier mmr={duo.mmr} /> : <Tier mmr={-1} />}
				{squard ? <Tier mmr={squard.mmr} /> : <Tier mmr={-1} />}
			</HView>
			<Text>nickname : {solo.nickname}</Text>
			<Text>Rank : {solo.rank} ({solo.mmr})</Text>
			<Text>Most</Text>
			{solo.characterStats.map((ch, i) => (
				<List key={i}>
					<Text>{charactorCode[ch.characterCode]}</Text>
					<Text>total : {ch.totalGames}</Text>
					<Text>wins : {ch.wins}</Text>
					<Text>average Rank : {ch.averageRank}</Text>
				</List>
			))}
		</View>
		</Background>
		</>
	)
}

export default Main;