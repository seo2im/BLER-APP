import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const Background = styled.ImageBackground`
	width : 100%;
	height : 100%;
`
export const View = styled.View`
	flex : 1;
	background-color : rgba(0, 0, 0, 0.7);
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

	width		: 99%;
	height		: 80px;
	padding		: 0 10px;
	margin		: 3px auto; 

	borderWidth	: 2px;
	borderColor	: grey;
	background	: black;
`
