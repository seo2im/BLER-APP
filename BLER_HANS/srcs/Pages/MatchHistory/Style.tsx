import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

export const Background = styled.ImageBackground`
	width : 100%;
	height : 100%;
`
export const View = styled.View`
	flex	: 1;
	background-color : rgba(0, 0, 0, 0.7);
`
export const Text = styled.Text`
	color	: white;
`
export const Box = styled.View`
	flex			: 1;
	flex-direction	: row;
	justify-content	: space-between;

	width		: 99%;
	height		: 50px;
	margin		: auto;
	borderWidth	: 2px;
	borderColor	: grey;
	background	: black;
`
export const Character = styled.View
