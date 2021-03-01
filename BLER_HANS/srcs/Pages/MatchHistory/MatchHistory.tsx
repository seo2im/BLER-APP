import React, { useState } from 'react'
import { FlatList } from 'react-native'
import {
	Background,
	View,
	Box,
	Text,
	Click,
	InBox,
	WeaponeIcon,
	TEMP,
	Next
} from './Style'
import { OpenBox, Grpah } from "./Srcs"
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
				<TEMP key={index}>
				<Click onPress={() => setOpenItem(openItem !== index ? index : -1)}>
				<Box>
					<InBox>
						<Text>Rank {item.gameRank}</Text>
					</InBox>
					<InBox>
						<CharacterCircle code={item.characterNum} width={50} height={50}/>
						<WeaponeIcon>
							<CharacterCircle code={1} width={20} height={20}/>
						</WeaponeIcon>
					</InBox>
					<InBox>
						<Text>{item.playerKill}K/{item.playerAssistant}A</Text>
					</InBox>
					<InBox>
						<Text>{item.damageToPlayer}</Text>
					</InBox>
					<InBox>
						<Text>mmr : {now}/{now - before}</Text>
					</InBox>
				</Box>
				</Click>
				{openItem === index && <OpenBox game={item}/>}
				</TEMP>
			)})}
		</View>
		</Background>
	)
}

export default MatchHistory;