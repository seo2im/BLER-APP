import React from 'react'
import styled from 'styled-components/native'
import srcs from '../../../Public'

const Image = styled.Image<{ width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	resizeMode : stretch;
`
const NoneBox = styled.View<{width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	border-radius : 10px;
	background-color: white;
`
export const None = (width : string, height : string) =>
<NoneBox width={width} height={height}/>;
export const Iron = (width : string, height : string) =>
<Image source={srcs.tier.iron} width={width} height={height}/>;
export const Bronze = (width : string, height : string) =>
<Image source={srcs.tier.bronze} width={width} height={height}/>
export const Silver = (width : string, height : string) =>
<Image source={srcs.tier.silver} width={width} height={height}/>
export const Gold = (width : string, height : string) =>
<Image source={srcs.tier.gold} width={width} height={height}/>
export const Platinum = (width : string, height : string) =>
<Image source={srcs.tier.platinum} width={width} height={height}/>
export const Diamond = (width : string, height : string) =>
<Image source={srcs.tier.diamond} width={width} height={height}/>
export const Demigot = (width : string, height : string) =>
<Image source={srcs.tier.demigot} width={width} height={height}/>
export const Eternity = (width : string, height : string) =>
<Image source={srcs.tier.eternity} width={width} height={height}/>

export const getImg = (mmr : number) => {		
	if (mmr == -1)
		return None
	if (0 <= mmr && mmr < 400)
		return Iron
	if (400 <= mmr && mmr < 800)
		return Bronze
	if (800 <= mmr && mmr < 1200)
		return Silver
	if (1200 <= mmr && mmr < 1600)
		return Gold
	if (1600 <= mmr && mmr < 2000)
		return Platinum
	if (2000 <= mmr && mmr < 2400)
		return Diamond
	if (2400 <= mmr && mmr < 2800)
		return Demigot
	if (2800 <= mmr)
		return Eternity
}
