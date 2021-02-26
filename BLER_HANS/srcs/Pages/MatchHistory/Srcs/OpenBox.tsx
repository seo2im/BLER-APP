import React from 'react'
import { tUserGame } from '../../../Modules/games/api'
import {
	View,
	Text
} from './Style'

const OpenBox = ({ game } : { game : tUserGame }) => {
	const {  } = game;
	return (
		<View>
			<Text>TESTING</Text>
		</View>
	)
}

export default OpenBox;