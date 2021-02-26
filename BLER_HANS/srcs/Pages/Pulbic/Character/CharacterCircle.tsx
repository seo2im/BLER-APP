import React from 'react'
import styled from 'styled-components/native'
import srcs from '../../../Public'

const Image = styled.Image<{width : number, height : number}>`
	width : ${props => props.width}px;
	height : ${props => props.height}px;
	resizeMode : cover;
	border-radius	: ${props => props.width / 2}px;
`
const NoneBox = styled.View<{width : number, height : number}>`
	width : ${props => props.width}px;
	height : ${props => props.height}px;
	border-radius : 10px;
	background-color: white;
`
export const None = (width : number, height : number) => 
<NoneBox width={width} height={height}/>


type Prob = {
	code : number,
	width : number,
	height : number
}

const CharacterCircle = ({ code, width, height } : Prob) => {
	return (
		<Image source={srcs.charaters[code]} width={width} height={height}/>
	)
}

export default CharacterCircle;