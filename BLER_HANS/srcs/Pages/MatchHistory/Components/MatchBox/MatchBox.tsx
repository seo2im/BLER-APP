import React from 'react'
import { CharacterCircle } from '../../../Pulbic'
import {
	View, Bar, Item, WeaponeIcon, Text, Rank
} from './Style'
import { tUserGame } from '../../../../Modules/games/api'
type Prop = {
	game		: tUserGame,
	nowMmr		: number,
	beforeMmr	: number,
}
const rank = ["normal", "win", "top2", "top3"];
const MatchBox = ({ game, nowMmr, beforeMmr} : Prop) => {
	return (
		<View>
			<Bar rank={rank[game.gameRank < 4 ? game.gameRank : 0]}/>
			<Item>
				<Rank rank={rank[game.gameRank < 4 ? game.gameRank : 0]}>  # {game.gameRank}</Rank>
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
				<Text>deal : {game.damageToPlayer}</Text>
			</Item>
			<Item>
				<Text>mmr : {nowMmr}/{nowMmr - beforeMmr}</Text>
			</Item>
		</View>
	)
}

export default MatchBox;