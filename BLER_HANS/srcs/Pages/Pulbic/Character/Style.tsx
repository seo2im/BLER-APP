import styled from 'styled-components/native'
import * as Basic from '../../../Styles/Basic'

export const Box = styled<{width : number, height : number}>(Basic.Image)`
	width	: ${props => props.width}px;
	height	: ${props => props.height}px;

	border-radius	: ${props => props.width / 10}px;
`
export const Circle = styled<{width : number, height : number}>(Box)`
	margin	: auto 0;
	resizeMode : cover;

	border-radius	: ${props => props.width / 2}px;
	background: white;
`
