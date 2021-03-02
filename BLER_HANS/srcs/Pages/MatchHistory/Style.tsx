import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const Background = styled(Basic.Background)``
export const View = styled(Basic.Scroll)``
export const Box = styled(Basic.View)``
export const Text = styled.Text`
	color		: white;
	margin		: auto 0;
`
export const Click = styled.TouchableOpacity`

`
export const MatchBox = styled.View`
	position : relative;

	flex-direction	: row;
	justify-content	: space-between;

	width		: 100%;
	height		: 80px;
	padding		: 0 10px;
	margin		: 3px auto; 

	borderRightWidth	: 2px;
	borderTopWidth		: 2px;
	borderBottomWidth	: 2px;
	borderColor	: grey;
	background	: black;
`

export const Item = styled.View`
	position	: relative;
	width		: 20%;
	height		: 100%;
`
export const WeaponeIcon = styled.View`
	position	: absolute;
	top			: 45px;
	left		: 40px;
`
export const Next = styled.TouchableOpacity`
	width 	: 50px;
	height	: 30px;
`
