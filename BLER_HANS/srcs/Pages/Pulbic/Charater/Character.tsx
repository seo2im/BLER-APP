import React from 'react'
import { Text } from 'react-native'
import * as Img from './Image'

type Prob = {
	code : number,
	width : string,
	height : string
}

const Character = ({ code, width, height } : Prob) => {
	return (
		<>
			{Img.getImg(code)(width, height)}
		</>
	)
}

export default Character;