import React, { useEffect, useState } from 'react'
import { tUserGame } from '../../../../Modules/games/api'
import {
	OpenBoxView,
	Text,
	InfoBox,
	Bar,
	SkillParmeter,
	NorParameter
} from './Style'
import ItemBox from './ItemBox'

const OpenBox = ({ game } : { game : tUserGame }) => {
	const [deal, setDeal] = useState<number>(100);

	const { 
		playerKill, playerAssistant, damageToPlayer,
		monsterKill, damageToMonster,
		basicAttackDamageToPlayer, skillDamageToPlayer, trapDamageToPlayer,
		equipment
	} = game;

	useEffect(() => {
		setDeal(Math.floor(basicAttackDamageToPlayer / damageToPlayer * 100));
	}, [])

	return (
		<OpenBoxView>
			<ItemBox equipment={equipment}/>
			<InfoBox>
				<Text>{playerKill} Kill / {playerAssistant} Assist</Text>
				<Text>Deal {damageToPlayer}</Text>
				<Text>야생동물 {monsterKill} / {damageToMonster} deal</Text>
				<Bar>
					<SkillParmeter per={deal}/>
					<NorParameter per={100 - deal}/>
				</Bar>
			</InfoBox>
		</OpenBoxView>
	)
}

export default OpenBox;