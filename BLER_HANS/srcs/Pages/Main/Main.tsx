import React from 'react'
import { View, Title, HView } from './Style'

import { tUserStat } from '../../Modules/userStats/api'
import TierBox from './Srcs/TierBox'
import CharacterBox from './Srcs/CharactorBox'
import Linker from './Srcs/Linker'

const Main
= ({ nickname, userStats, linkMatchHistory, linkStats }
	:{ nickname : string, userStats : tUserStat[], linkMatchHistory : any, linkStats : any}) => {
	const [ solo, duo, squard ] = userStats;

	return (
	<>
		<View>
			<Title>{nickname}</Title>
			<HView>
				<TierBox stat={solo} />
				<TierBox stat={duo} />
				<TierBox stat={squard} />
			</HView>
			
			<Title>Most</Title>
			<HView>
				<CharacterBox stat={solo}/>
				<CharacterBox stat={duo}/>
				<CharacterBox stat={squard}/>
			</HView>
			
			<HView>
				<Linker link={() => linkStats(1)} title={"통계"}/>
				<Linker link={() => undefined} title={"루트"}/>
				<Linker link={() => linkMatchHistory()} title={"히스토리"}/>
			</HView>
		</View>
	</>
	)
}

export default Main;