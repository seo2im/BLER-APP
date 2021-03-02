import styled from 'styled-components/native'
import * as Basic from '../../../../Styles/Basic'

export const Click = styled(Basic.Click)``
export const DataBoxView = styled(Basic.Gradient)`
	width	: 95%;
	height : 250px;
	margin : 10px auto;
	
	padding : 10px 20px 10px 20px;
	
	border-radius : 8px;
	border-width : 1px;
	border-color : #FFFFFF;
`
export const Title = styled(Basic.KorTitle)`
	text-align	: center;
`
export const BoxItems = styled(Basic.HView)`
	align-items		: center;
	justify-content	: space-between;
`
export const Item = styled(Basic.View)``
export const TierTitle = styled(Title)`
	margin-bottom	: 10px;
`
export const BoxText = styled(Basic.KorText)`
	text-align		: center;
	margin-bottom	: 5px;
`
export const NoData = styled(Title)`
	line-height : 100px;
`