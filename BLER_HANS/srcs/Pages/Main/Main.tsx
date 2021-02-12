import React from 'react'
import { View, Text, Background, List, HView } from './Style'
import { charactorCode } from '../../information'

import { tUserStat } from '../../Modules/userStats/api'
import Tier from '../Pulbic/Tier'
import Charactor from '../Pulbic/Character'


const Main
= ({ userStats, linkMatchHistory, linkStats }
	:{ userStats : tUserStat[], linkMatchHistory : any, linkStats : any}) => {
	const [ solo, duo, squard ] = userStats;

	return (
		<>
		<Background source={require("../../Public/background.jpg")}>
		<View>
			<Text>nickname : {solo.nickname}</Text>
			<HView>
				{solo ? <Tier mmr={solo.mmr} /> : <Tier mmr={-1} />}
				{duo ? <Tier mmr={duo.mmr} /> : <Tier mmr={-1} />}
				{squard ? <Tier mmr={squard.mmr} /> : <Tier mmr={-1} />}
			</HView>
			
			<Text>Most</Text>
			<HView>
				{solo ? <Charactor code={solo.characterStats[0].characterCode}/>
						: <Charactor code={-1} />}
				{duo ? <Charactor code={duo.characterStats[0].characterCode}/>
						: <Charactor code={-1} />}
				{squard ? <Charactor code={squard.characterStats[0].characterCode}/>
						: <Charactor code={-1} />}
			</HView>
		</View>
		</Background>
		</>
	)
}

export default Main;