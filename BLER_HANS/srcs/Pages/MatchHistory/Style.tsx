import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const Background = styled.ImageBackground`
	width : 100%;
	height : 100%;
`
export const View = styled.ScrollView`
	flex : 1;
	background-color : rgba(0, 0, 0, 0.7);
`
export const TEMP = styled.View`

`
export const Text = styled.Text`
	color		: white;
	margin		: auto 0;
`
export const Click = styled.TouchableOpacity`

`
export const Box = styled.View`
	flex-direction	: row;
	justify-content	: space-between;

	width		: 100%;
	height		: 80px;
	padding		: 0 10px;
	margin		: 3px auto; 

	borderWidth	: 2px;
	borderColor	: grey;
	background	: black;
`
export const InBox = styled.View`
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
