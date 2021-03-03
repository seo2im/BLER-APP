import styled from 'styled-components/native'
import * as Basic from '../../../../Styles/Basic'

export const OpenBoxView = styled(Basic.HView)`
	width	: 100%;
	height	: 200px;
	padding	: 5px;

	background : ${({ theme }) => theme.Color.black};
`
export const Text = styled(Basic.KorText)``
export const Grid = styled(Basic.View)`
	width	: 45%;
`
export const GridColumn = styled(Basic.HView)`
	width	: 100%;
`
export const GridItem = styled(Basic.Background)`
	width 	: 33%;
	height	: 40px;
	
	background : ${({ theme }) => theme.Color.white};
	borderWidth	: 1px;
	borderColor : ${({ theme }) => theme.Color.black};;
`
export const InfoBox = styled(Basic.View)`
	color : white;
`

/* Skill Parameter */
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