import React from 'react'
import styled from 'styled-components/native'
import srcs from '../../../Public'

const Image = styled.Image<{width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	resizeMode : stretch;
	border-top-left-radius : 10px;
	border-bottom-left-radius : 10px;
`
const NoneBox = styled.View<{width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	border-radius : 10px;
	background-color: white;
`
export const None = (width : string, height : string) => 
<NoneBox width={width} height={height}/>


type Prob = {
	code : number,
	width : string,
	height : string
}

const CharacterBox = ({ code, width, height } : Prob) => {
	return (
		<Image source={srcs.charaters[code]} width={width} height={height}/>
	)
}

export default CharacterBox;