import styled from 'styled-components/native'
import * as Basic from '../../Styles/Basic'

const Background = styled.ImageBackground`
	width : 100%;
	height : 100%;
`

const View = styled.View`
	flex : 1;
	background-color : rgba(0, 0, 0, 0.6);
`

const HView = styled(Basic.HView)`

`

const List = styled.View`

`

const Text = styled.Text`
	color : white;
`

export { Background, View, Text, List, HView };