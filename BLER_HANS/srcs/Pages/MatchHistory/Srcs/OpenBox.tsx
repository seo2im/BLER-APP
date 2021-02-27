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

const OpenBox = ({ game } : { game : tUserGame }) => {
	const [deal, setDeal] = useState<number>(100);

	const { 
		playerKill, playerAssistant, damageToPlayer,
		monsterKill, damageToMonster,
		basicAttackDamageToPlayer, skillDamageToPlayer, trapDamageToPlayer
	} = game;

	useEffect(() => {
		setDeal(Math.floor(basicAttackDamageToPlayer / damageToPlayer * 100));
	}, [])

	return (
		<OpenBoxView>
			<Grid>
				<GridColumn>
					<GridItem/>
					<GridItem/>
					<GridItem/>
				</GridColumn>
				<GridColumn>
					<GridItem/>
					<GridItem/>
					<GridItem/>
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