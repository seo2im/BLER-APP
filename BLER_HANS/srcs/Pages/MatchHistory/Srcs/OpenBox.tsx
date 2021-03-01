import React, { useEffect, useState } from 'react'
import { tUserGame } from '../../../Modules/games/api'
import {
	OpenBoxView,
	Text,
	Grid,
	GridColumn,
	GridItem,
	InfoBox,
	Bar,
	SkillParmeter,
	NorParameter
} from './Style'
import srcs from '../../../Public'

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
			<Grid>
				<GridColumn>
					<GridItem source={srcs.item.Weapon[equipment["0"]]}/>
					<GridItem source={srcs.item.Chest[equipment["1"]]}/>
					<GridItem source={srcs.item.Head[equipment["2"]]}/>
				</GridColumn>
				<GridColumn>
					<GridItem source={srcs.item.Arm[equipment["3"]]}/>
					<GridItem source={srcs.item.Leg[equipment["4"]]}/>
					<GridItem source={srcs.item.Trinket[equipment["5"]]}/>
				</GridColumn>
			</Grid>
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