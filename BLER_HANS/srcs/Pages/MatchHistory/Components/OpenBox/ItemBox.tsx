import React from 'react'
import {
	Grid, GridColumn, GridItem
} from './Style'
import srcs from '../../../../Public'
type Prop = {
	equipment	: {};
}

const ItemBox = ({ equipment } : Prop) => {
	return (
		<Grid>
			<GridColumn>
				<GridItem source={srcs.item.Weapon[equipment["0"]]}/>
				<GridItem source={srcs.item.Chest[equipment["1"]]}/>
				<GridItem source={srcs.item.Head[equipment["2"]]}/>
			</GridColumn>
			<GridColumn>
				<GridItem source={srcs.item.Arm[equipment["3"]]}/>
				<GridItem source={srcs.item.Leg[equipment["4"]]}/>
				<GridItem source={srcs.item.Trinket[equipment["5"]]}/>
			</GridColumn>
		</Grid>
	)
}

export default ItemBox;