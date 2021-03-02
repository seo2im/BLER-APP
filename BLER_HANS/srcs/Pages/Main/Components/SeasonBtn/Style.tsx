import styled from 'styled-components/native'
import * as Basic from '../../../../Styles/Basic'

export const BtnView = styled(Basic.HView)`
	justify-content	: space-between;
`
export const Btn = styled(Basic.Click)<{select : boolean}>`
	width	: 50%;
	padding	: 10px 0;

	background : ${({ select, theme }) => select ? theme.Color.BYTrend.lightYellow : "rgba(0, 0, 0, 0)"};
`
export const BtnText = styled(Basic.KorText)`
	text-align	: center;
`