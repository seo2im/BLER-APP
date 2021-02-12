import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Image = styled.Image`
	
`
const None = (<Text>None</Text>);
const Iron = <Image source={require("../../Public/tier/iron.png")}/>
const Bronze = <Image source={require("../../Public/tier/bronze.png")}/>
const Silver = <Image source={require("../../Public/tier/silver.png")}/>
const Gold = <Image source={require("../../Public/tier/gold.png")}/>
const Platinum = <Image source={require("../../Public/tier/platinum.png")}/>
const Diamond = <Image source={require("../../Public/tier/diamond.png")}/>
const Demigot = <Image source={require("../../Public/tier/demigot.png")}/>
const Eternity = <Image source={require("../../Public/tier/eternity.png")}/>

const Tier = ({ mmr } : { mmr : number }) => {
	const Check = () => {
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

	return (
		<>
			{Check()}
		</>
	)
}

export default Tier;
