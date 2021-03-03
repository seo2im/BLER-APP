import React from 'react'
import {
	View, Text
} from './Style'
import { Next } from '../../Style'
type Prop = {
	next : () => void
}
const NextBtn = ({ next } : Prop) => {
	return (
		<View onPress={() => next()}>
			<Text>NEXT</Text>
		</View>
	)
}

export default NextBtn