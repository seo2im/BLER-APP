import styled from 'styled-components/native'
import * as Basic from '../../../Styles/Basic'

export const Box = styled<{ width : number, height : number}>(Basic.Image)`
	width : ${props => props.width}px;
	height : ${props => props.height}px;
`