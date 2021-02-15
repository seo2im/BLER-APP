import React from 'react'
import { tUserStat } from '../../../Modules/userStats/api'
import { TierBoxView, Name } from './Style'
import Tier from '../../Pulbic/Tier/Tier'

const tierName = ["아이언 4", "아이언 3", "아이언 2", "아이언 1",
				"브론즈 4", "브론즈 3", "브론즈 3", "브론즈 1",
				"실버 4", "실버 3", "실버 2", "실버 1",
				"골드 4", "골드 3", "골드 2", "골드 1",
				"플레티넘 4", "플레티넘 3", "플레티넘 2", "플레티넘 1",
				"다이아 4", "다이아 3", "다이아 2", "다이아 1",
				"데미갓 4", "데미갓 3", "데미갓 2", "데미갓 1",
				"이터니티 4", "이터니티 3", "이터니티 2", "이터니티 1"]

const TierBox
= ({ stat } : { stat? : tUserStat }) => {
	return (
		
		<TierBoxView>
			{stat ? 
			<Name>{tierName[Math.floor(stat.mmr / 100)]}</Name>
			: <Name>No Tier</Name>}
			{stat ? <Tier mmr={stat.mmr} width={"70px"} height={"100px"}/>
			: <Tier mmr={-1} width={"70px"} height={"100px"}/>}
			{stat ? <Name>{stat.mmr}</Name> :
			<Name>No mmr</Name>}
		</TierBoxView>
	)
}

export default TierBox;