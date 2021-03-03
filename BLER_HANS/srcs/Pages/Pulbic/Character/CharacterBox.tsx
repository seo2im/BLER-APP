import React from 'react'
import { Box } from './Style'
import srcs from '../../../Public'
type Prob = {
	code	: number,
	width	: number,
	height	: number
}

const CharacterBox = ({ code, width, height } : Prob) => {
	return (
		<Box source={srcs.charaters[code]} width={width} height={height}/>
	)
}

export default CharacterBox;