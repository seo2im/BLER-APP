import React from 'react'
import srcs from '../../../Public'
import {
	Box
} from './Style'
type Prop = {
	mmr		: number,
	width	: number,
	height	: number
}
const tierName = ["iron", "bronze", "silver",
				"gold", "platinum", "diamond",
				"demigot", "eternity"]

const Tier = ({ mmr, width, height } : Prop) => {
	
	return (
		<Box source={srcs.tier[tierName[Math.floor(mmr / 400)]]}
			width={width} height={height}/>
	)
}

export default Tier;
