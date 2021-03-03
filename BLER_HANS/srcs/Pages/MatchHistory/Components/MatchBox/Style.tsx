import styled from 'styled-components/native'
import * as Basic from '../../../../Styles/Basic'

export const View = styled(Basic.HView)`
	position	: relative;
	justify-content	: space-between;

	width		: 100%;
	height		: 80px;
	padding		: 0 10px;
	margin		: 3px auto;
	
	borderRightWidth	: 2px;
	borderTopWidth		: 2px;
	borderBottomWidth	: 2px;
	borderColor	: ${({ theme }) => theme.Color.GBTrend.grey};
	background	: ${({ theme }) => theme.Color.black};
`
export const Bar = styled<{ rank : string }>(Basic.View)`
	position	: absolute;
	top			: -2px;
	left		: 0;

	width	: 10px;
	height	: 80px;

	background	: ${({ theme, rank }) => theme.Color.RankColor[rank]};
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
export const Text = styled(Basic.KorText)`
	margin	: auto 0;
`
export const Rank = styled<{ rank : string }>(Basic.EngTitle)`
	margin	: auto 0;
	color	: ${({ theme, rank }) => theme.Color.RankColor[rank]};
`