import React from 'react'
import {
	Background,
	View,
	NickName,
} from './Style'
import { tUserStat } from '../../Modules/userStats/api'
import { DataBox, SeasonBtn } from './Components'

type Prop = {
	nickname : string, 
	userStats : tUserStat[], 
	linkMatchHistory : (season : number, matchingTeamMode : number, mmr : number) => void, 
	season	: number;
	setSeason : (id : number) => void
}
const Main
= ({ nickname, userStats, linkMatchHistory, season, setSeason } : Prop) => {
	const [ solo, duo, squard ] = userStats;

	return (
	<View>
		<NickName>{nickname}</NickName>
		<SeasonBtn season={season} setSeason={setSeason}/>
		<DataBox stat={solo} title={"솔로"} link={() => linkMatchHistory(season, 1, solo.mmr)}/>
		<DataBox stat={duo} title={"듀오"} link={() => linkMatchHistory(season, 2, duo.mmr)}/>
		<DataBox stat={squard} title={"스쿼드"} link={() => linkMatchHistory(season, 3, squard.mmr)}/>
	</View>
	)
}

export default Main;