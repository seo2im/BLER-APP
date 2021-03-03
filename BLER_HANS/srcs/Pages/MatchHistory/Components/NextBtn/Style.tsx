import styled from 'styled-components/native'
import * as Basic from '../../../../Styles/Basic'

export const View = styled(Basic.Click)`
	background : ${({ theme }) => theme.Color.transparency};
`
export const Text = styled(Basic.EngTitle)`
	text-align : center;
`