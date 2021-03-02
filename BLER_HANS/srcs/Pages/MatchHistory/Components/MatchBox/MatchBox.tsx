import React from 'react'
import { CharacterCircle } from '../../../Pulbic'
import {
	View, Bar, Item, WeaponeIcon, Text
} from './Style'
import { tUserGame } from '../../../../Modules/games/api'

type Prop = {
	game		: tUserGame,
	nowMmr		: number,
	beforeMmr	: number,
}
const MatchBox = ({ game, nowMmr, beforeMmr} : Prop) => {
	return (
		<View>
			<Bar />
			<Item>
				<Text>  # {game.gameRank}</Text>
			</Item>
			<Item>
				<CharacterCircle code={game.characterNum} width={50} height={50}/>
				<WeaponeIcon>
					<CharacterCircle code={1} width={20} height={20}/>
				</WeaponeIcon>
			</Item>
			<Item>
				<Text>{game.playerKill}K/{game.playerAssistant}A</Text>
			</Item>
			<Item>
				<Text>{game.damageToPlayer}</Text>
			</Item>
			<Item>
				<Text>mmr : {nowMmr}/{nowMmr - beforeMmr}</Text>
			</Item>
		</View>
	)
}

export default MatchBox;