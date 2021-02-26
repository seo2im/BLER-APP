import React, { useState } from 'react'
import { FlatList } from 'react-native'
import {
	Background,
	View,
	Box,
	Text,
	Click
} from './Style'
import OpenBox from "./Srcs/OpenBox"
import { CharacterCircle } from '../Pulbic'

import { tUserGame } from '../../Modules/games/api'

const MatchHistory = ({ userGames, mmr } : { userGames : tUserGame[], mmr : number }) => {
	const [ openItem, setOpenItem ] = useState<number>(-1);

	let now : number = mmr;
	let before : number = mmr;


	return (
		<Background source={require("../../Public/background.jpg")}>
		<View>
			<FlatList
				data={userGames}
				renderItem={({ item, index } : { item : tUserGame, index : number }) => {
					now = before;
					before = item.mmrBefore;
					return (
					<>
					<Click onPress={() => setOpenItem(openItem !== index ? index : -1)}>
					<Box>
						<Text>Rank {item.gameRank}</Text>
						<CharacterCircle code={1} width={40} height={40}/>
						<Text>{item.playerKill}K/{item.playerAssistant}A</Text>
						<Text>{item.damageToPlayer}</Text>
						<Text>mmr : {now} "" {now - before}</Text>
					</Box>
					</Click>
					{openItem === index && <OpenBox game={item}/>}
					</>
				)}}
				keyExtractor={item => String(item.gameId)}
			/>
		</View>
		</Background>
	)
}

export default MatchHistory;