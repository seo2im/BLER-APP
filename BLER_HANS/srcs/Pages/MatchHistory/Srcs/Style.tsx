import styled from 'styled-components/native'
import * as Basic from '../../../Styles/Basic'

export const OpenBoxView = styled.View`
	flex-direction : row;
	
	width	: 100%;
	height	: 200px;

	padding	: 5px;

	background : black;
`
export const Text = styled.Text`
	color	: white;
`
export const Grid = styled.View`
	width : 45%;
`
export const GridColumn = styled.View`
	flex-direction : row;
	width	: 100%;
`
export const GridItem = styled.View`
	width 	: 33%;
	height	: 40px;
	
	background : white;
	borderWidth	: 1px;
	borderColor : black;
`
export const InfoBox = styled.View`
	color : white;
`
export const Bar = styled.View`
	flex-direction : row;

	width	: 40%;
	height	: 10px;
`
export const SkillParmeter = styled.View<{per : number}>`
	width	: ${({ per }) => per}%;
	height	: 100%;

	background : red;
`
export const NorParameter = styled.View<{per : number}>`
	width	: ${({ per }) => per}%;
	height	: 100%;

	background : blue;
`
/* Graph */
export const GraphView = styled.View`
	width	: 100%;
	padding	: 10px;

	background : white;
`

