import React, { useEffect }  from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { tState } from '../../Modules';
import { getUserRank } from '../../Modules/userRank/thunks';

const Main = ({userNum}) => {
	const { data, loading, error } = useSelector((state : tState) => state.userRank.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserRank(userNum, 1, 1));
	}, []);

	return (
		<>
			<Text>BL:ER</Text>
			{loading && <Text>Loading</Text>}
			{error && <Text>Error</Text>}
			{data && <Text>rank : {data.userRank.rank}</Text>}
		</>
	)
}

export default Main;
