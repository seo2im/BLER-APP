import React from 'react'
import { tUserStat } from '../../../../Modules/userStats/api'
import { TierTitle, DataBoxView, BoxItems, Title, Item, NoData, BoxText, Click } from './Style'
import { Tier, CharacterBox } from '../../../Pulbic'
import { tierName, colorCode } from './Data'


const NoneBox
= ({ title } : { title :string}) => {
	return (
		<DataBoxView colors={['#000000', '#000000']}>
			<Title>{title}</Title>
			<NoData>데이터가 없습니다</NoData>
		</DataBoxView>
	)
}

const Box
= ({ stat, title, link } : { stat : tUserStat, title : string, link : () => void }) => {
	const { mmr, characterStats, averageKills, totalWins, totalGames } = stat;
	const { characterCode } = characterStats[0];

	return (
		<Click onPress={() => link()}>
		<DataBoxView colors={colorCode[Math.floor(mmr / 400)]}>
			<Title>{title}</Title>
			<BoxItems>
				<Item>
					<TierTitle>{tierName[Math.floor(mmr / 100)]}</TierTitle>
					<Tier mmr={mmr} width={93} height={140}/>
				</Item>
				<Item>
					<BoxText>{mmr} LP</BoxText>
					<BoxText>{totalGames} 게임</BoxText>
					<BoxText>평균 {averageKills} 킬</BoxText>
					<BoxText>승률 {String(totalWins * 100 / totalGames).slice(0, 4)} %</BoxText>
				</Item>
				<Item>
					<TierTitle>MOST</TierTitle>
					<CharacterBox code={characterCode} width={110} height={140}/>
				</Item>
			</BoxItems>
		</DataBoxView>
		</Click>
	)
}


const DataBox
= ({ stat, title, link } : { stat? : tUserStat, title : string, link : () => void}) => {
	return (
		<>
		{!stat ? <NoneBox title={title}/> :
		 <Box stat={stat} title={title} link={link}/>}
		</>
	)
}

export default DataBox;