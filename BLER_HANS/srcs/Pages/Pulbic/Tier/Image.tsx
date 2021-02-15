import React from 'react'
import styled from 'styled-components/native'

const Image = styled.Image<{ width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	resizeMode : stretch;

	margin : auto;
`
const NoneBox = styled.View<{width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	border-radius : 10px;
	background-color: white;

	margin : auto;
`
export const None = (width : string, height : string) =>
<NoneBox width={width} height={height}/>;
export const Iron = (width : string, height : string) =>
<Image source={require("../../../Public/tier/iron.png")} width={width} height={height}/>;
export const Bronze = (width : string, height : string) =>
<Image source={require("../../../Public/tier/bronze.png")} width={width} height={height}/>
export const Silver = (width : string, height : string) =>
<Image source={require("../../../Public/tier/silver.png")} width={width} height={height}/>
export const Gold = (width : string, height : string) =>
<Image source={require("../../../Public/tier/gold.png")} width={width} height={height}/>
export const Platinum = (width : string, height : string) =>
<Image source={require("../../../Public/tier/platinum.png")} width={width} height={height}/>
export const Diamond = (width : string, height : string) =>
<Image source={require("../../../Public/tier/diamond.png")} width={width} height={height}/>
export const Demigot = (width : string, height : string) =>
<Image source={require("../../../Public/tier/demigot.png")} width={width} height={height}/>
export const Eternity = (width : string, height : string) =>
<Image source={require("../../../Public/tier/eternity.png")} width={width} height={height}/>

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
