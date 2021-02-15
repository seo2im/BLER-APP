import React from 'react'
import { LinkerView, Name } from './Style'

const Linker = ({ link, title }) => {
	return (
		<LinkerView onPress={() => link()}>
			<Name>{title}</Name>
		</LinkerView>
	)
}

export default Linker