import React from 'react'
import { tUserStat } from '../../../../Modules/userStats/api'
import { TierTitle, TierBoxView, TierView, HView, Title, View, NoData, TextBox, Text } from './Style'
import { Tier, Character } from '../../../Pulbic'


const tierName = ["아이언 4", "아이언 3", "아이언 2", "아이언 1",
				"브론즈 4", "브론즈 3", "브론즈 3", "브론즈 1",
				"실버 4", "실버 3", "실버 2", "실버 1",
				"골드 4", "골드 3", "골드 2", "골드 1",
				"플레티넘 4", "플레티넘 3", "플레티넘 2", "플레티넘 1",
				"다이아 4", "다이아 3", "다이아 2", "다이아 1",
				"데미갓 4", "데미갓 3", "데미갓 2", "데미갓 1",
				"이터니티 4", "이터니티 3", "이터니티 2", "이터니티 1"]
const colorCode = [["#28313B", "#485461"], ["#000000", "#A55C1B"], ["#1E1D1B", "#979797"], ['#1E1D1B', '#CC9934'],
					["#272F2F", "#40A095"], ["#2b1331", "#B9ABCF"], ["#747272", "#BDD1BD"], ["#000000", "#E84393"]]
const NoneBox
= ({ title } : { title :string}) => {
	return (
		<TierBoxView 
		colors={['#000000', '#000000']}>
			<Title>{title}</Title>
			<NoData>데이터가 없습니다</NoData>
		</TierBoxView>
	)
}

const Box
= ({ stat, title } : { stat : tUserStat, title : string }) => {
	const { mmr, characterStats, averageKills, totalWins} = stat;
	const { characterCode, totalGames } = characterStats[0];

	return (
		<TierBoxView colors={colorCode[Math.floor(mmr / 400)]}>
			<Title>{title}</Title>
			<HView>
				<View>
					<TierTitle>{tierName[Math.floor(mmr / 100)]}</TierTitle>
					<Tier mmr={mmr} width={"93px"} height={"140px"}/>
				</View>

				<TextBox>
					<Text>{mmr} LP</Text>
					<Text>{totalGames} 게임</Text>
					<Text>평균 {averageKills} 킬</Text>
					<Text>승률 {String(totalWins * 100 / totalGames).slice(0, 4)} %</Text>
				</TextBox>
				
				<View>
					<TierTitle>MOST</TierTitle>
					<Character code={characterCode} width={"110px"} height={"140px"}/>
				</View>
			</HView>
		</TierBoxView>
	)
}


const DataBox
= ({ stat, title } : { stat? : tUserStat, title : string}) => {
	return (
		<>
		{!stat ? <NoneBox title={title}/> :
		 <Box stat={stat} title={title}/>}
		</>
	)
}

export default DataBox;