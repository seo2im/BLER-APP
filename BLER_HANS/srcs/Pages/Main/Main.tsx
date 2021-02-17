import React from 'react'
import { View, Title, HView } from './Style'

import { tUserStat } from '../../Modules/userStats/api'
import { DataBox } from './Srcs'
import Linker from './Srcs/Linker'
import { ScrollView } from 'react-native'

const Main
= ({ nickname, userStats, linkMatchHistory, linkStats }
	:{ nickname : string, userStats : tUserStat[], linkMatchHistory : any, linkStats : any}) => {
	const [ solo, duo, squard ] = userStats;

	return (
	<>
	<View>
		<ScrollView>
		<Title>{nickname}</Title>
		<DataBox stat={solo} title={"솔로"}/>
		<DataBox stat={duo} title={"듀오"}/>
		<DataBox stat={squard} title={"스쿼드"}/>
			
		<HView>
			<Linker link={() => linkStats(1)} title={"통계"}/>
			<Linker link={() => undefined} title={"루트"}/>
			<Linker link={() => linkMatchHistory()} title={"히스토리"}/>
		</HView>
		</ScrollView>
	</View>
	</>
	)
}

export default Main;