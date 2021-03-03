import React from 'react'
import { Circle } from './Style'
import srcs from '../../../Public'
type Prob = {
	code	: number,
	width	: number,
	height	: number,
}

const CharacterCircle = ({ code, width, height } : Prob) => {
	return (
		<Circle source={srcs.charaters[code]} width={width} height={height}/>
	)
}

export default CharacterCircle;