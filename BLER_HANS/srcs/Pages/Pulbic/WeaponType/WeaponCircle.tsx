import React from 'react'
import { Circle } from './Style'
import srcs from '../../../Public'
import { weaponTypeCode } from '../../../information'
type Prop = {
	code: number,
	width: number,
	height: number,
}

const WeaponCircle = ({ code, width, height }: Prop) => {
	return (
		<Circle source={srcs.weaponType[weaponTypeCode[code]]} width={width} height={height}/>
	)
}

export default WeaponCircle;