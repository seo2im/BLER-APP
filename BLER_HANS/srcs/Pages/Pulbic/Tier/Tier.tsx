import React from 'react'
import * as Img from './Image'

const Tier = ({ mmr, width, height } : { mmr : number, width : string, height : string}) => {
	return (
		<>
			{Img.getImg(mmr)(width, height)}
		</>
	)
}

export default Tier;
