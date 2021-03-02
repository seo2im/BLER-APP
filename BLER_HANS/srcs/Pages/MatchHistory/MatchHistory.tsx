import React, { useState } from 'react'
import {
	Background,
	View,
	Box,
	Text,
	Click,
	WeaponeIcon,
	Item,
	Next,
} from './Style'
import { OpenBox, Grpah, MatchBox } from "./Components"
import { CharacterCircle } from '../Pulbic'

import { tUserGame } from '../../Modules/games/api'
type Prop = {
	userGames : tUserGame[], 
	mmr : number,
	next : (newMmr : number) => void,
}

const MatchHistory = ({ userGames, mmr, next } : Prop) => {
	const [ openItem, setOpenItem ] = useState<number>(-1);
	const mmrs = [mmr, ...userGames.map(game => game.mmrBefore)].reverse();

	let now : number = mmr;
	let before : number = mmr;
	return (
		<Background source={require("../../Public/background.jpg")}>
		<View>
			<Grpah mmrs={mmrs}/>
			<Next onPress={() => next(userGames[9].mmrBefore)}>
				<Text>next</Text>
			</Next>
			{userGames.map((item, index) => {
				now = before;
				before = item.mmrBefore;
				
				return (
					<Box key={index}>
						<Click onPress={() => setOpenItem(openItem !== index ? index : -1)}>
							<MatchBox game={item} nowMmr={now} beforeMmr={before} />
						</Click>
						{openItem === index && <OpenBox game={item}/>}
					</Box>
			)})}
		</View>
		</Background>
	)
}

export default MatchHistory;