import React, { useState } from 'react'
import {
	View,
	Title,
	HView,
	Button,
	Text
} from './Style'

import { tUserStat } from '../../Modules/userStats/api'
import { DataBox } from './Srcs'
import Linker from './Srcs/Linker'
import { ScrollView } from 'react-native'
type Prop = {
	nickname : string, 
	userStats : tUserStat[], 
	linkMatchHistory : (season : number, matchingTeamMode : number) => void, 
	linkStats : (id : number) => void,
	season	: number;
	setSeason : (id : number) => void
}

const Main
= ({ nickname, userStats, linkMatchHistory, linkStats, season, setSeason }
	: Prop) => {
	const [ solo, duo, squard ] = userStats;

	return (
	<>
	<View>
		<ScrollView>
		<Title>{nickname}</Title>
		<HView>
			<Button onPress={() => setSeason(0)}>
				<Text>Noraml</Text>
			</Button>
			<Button onPress={() => setSeason(1)}>
				<Text>Season</Text>
			</Button>
		</HView>
		<DataBox stat={solo} title={"솔로"} link={() => linkMatchHistory(season, 1)}/>
		<DataBox stat={duo} title={"듀오"} link={() => linkMatchHistory(season, 2)}/>
		<DataBox stat={squard} title={"스쿼드"} link={() => linkMatchHistory(season, 3)}/>
			
		<HView>
			<Linker link={() => linkStats(1)} title={"통계"}/>
			<Linker link={() => undefined} title={"루트"}/>
		</HView>
		</ScrollView>
	</View>
	</>
	)
}

export default Main;